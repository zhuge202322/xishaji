import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import postgres from "postgres";
import { createSeedRecords } from "./seeds";
import {
  cmsCollectionNames,
  type CmsCollection,
  type CmsRecord,
  type CmsRecordInput
} from "./types";

type LocalDatabase = {
  initialized: true;
  records: CmsRecord[];
};

const databaseUrl = process.env.DATABASE_URL?.trim();
const localDirectory = path.join(process.cwd(), ".cms-data");
const localFile = path.join(localDirectory, "content.json");
const isVercelWithoutDatabase = Boolean(process.env.VERCEL && !databaseUrl);
let localWriteQueue = Promise.resolve();

const globalForCms = globalThis as typeof globalThis & {
  cmsSql?: ReturnType<typeof postgres>;
  cmsSchemaReady?: Promise<void>;
};

function getSql() {
  if (!databaseUrl) return null;

  if (!globalForCms.cmsSql) {
    globalForCms.cmsSql = postgres(databaseUrl, {
      max: 4,
      idle_timeout: 20,
      connect_timeout: 15,
      prepare: false
    });
  }

  return globalForCms.cmsSql;
}

function assertCollection(value: string): asserts value is CmsCollection {
  if (!cmsCollectionNames.includes(value as CmsCollection)) {
    throw new Error("Unsupported CMS collection.");
  }
}

function normalizePostgresRecord(row: Record<string, unknown>): CmsRecord {
  return {
    id: String(row.id),
    collection: row.collection as CmsCollection,
    slug: row.slug ? String(row.slug) : null,
    status: row.status === "draft" ? "draft" : "published",
    sortOrder: Number(row.sort_order ?? 0),
    data: (row.data ?? {}) as Record<string, unknown>,
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString()
  };
}

function appendMissingMediaSeeds(records: CmsRecord[]) {
  const existingIds = new Set(records.map((record) => record.id));
  const missingMediaSeeds = createSeedRecords().filter((record) => record.collection === "media" && !existingIds.has(record.id));
  if (missingMediaSeeds.length > 0) records.push(...missingMediaSeeds);
  return missingMediaSeeds.length;
}

async function ensurePostgresSchema() {
  const sql = getSql();
  if (!sql) return;

  if (!globalForCms.cmsSchemaReady) {
    globalForCms.cmsSchemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS cms_records (
          id TEXT PRIMARY KEY,
          collection TEXT NOT NULL,
          slug TEXT,
          status TEXT NOT NULL DEFAULT 'published',
          sort_order INTEGER NOT NULL DEFAULT 0,
          data JSONB NOT NULL DEFAULT '{}'::jsonb,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS cms_records_collection_idx ON cms_records (collection, sort_order, updated_at DESC)`;
      await sql`CREATE UNIQUE INDEX IF NOT EXISTS cms_records_collection_slug_idx ON cms_records (collection, slug) WHERE slug IS NOT NULL`;
      await sql`
        CREATE TABLE IF NOT EXISTS cms_meta (
          key TEXT PRIMARY KEY,
          value TEXT NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;

      const [seedMarker] = await sql`SELECT value FROM cms_meta WHERE key = 'seed-version' LIMIT 1`;
      if (!seedMarker) {
        const seeds = createSeedRecords();
        await sql.begin(async (transaction) => {
          for (const record of seeds) {
            await transaction`
              INSERT INTO cms_records (id, collection, slug, status, sort_order, data, created_at, updated_at)
              VALUES (
                ${record.id},
                ${record.collection},
                ${record.slug},
                ${record.status},
                ${record.sortOrder},
                ${transaction.json(record.data as postgres.JSONValue)},
                ${record.createdAt},
                ${record.updatedAt}
              )
              ON CONFLICT (id) DO NOTHING
            `;
          }
          await transaction`
            INSERT INTO cms_meta (key, value)
            VALUES ('seed-version', '1')
            ON CONFLICT (key) DO NOTHING
          `;
        });
      }

      const mediaSeeds = createSeedRecords().filter((record) => record.collection === "media");
      await sql.begin(async (transaction) => {
        for (const record of mediaSeeds) {
          await transaction`
            INSERT INTO cms_records (id, collection, slug, status, sort_order, data, created_at, updated_at)
            VALUES (
              ${record.id},
              ${record.collection},
              ${record.slug},
              ${record.status},
              ${record.sortOrder},
              ${transaction.json(record.data as postgres.JSONValue)},
              ${record.createdAt},
              ${record.updatedAt}
            )
            ON CONFLICT (id) DO NOTHING
          `;
        }
      });
    })().catch((error) => {
      globalForCms.cmsSchemaReady = undefined;
      throw error;
    });
  }

  await globalForCms.cmsSchemaReady;
}

async function readLocalDatabase(): Promise<LocalDatabase> {
  if (isVercelWithoutDatabase) {
    return { initialized: true, records: createSeedRecords() };
  }

  try {
    const content = await readFile(localFile, "utf8");
    const parsed = JSON.parse(content) as LocalDatabase;
    if (!parsed.initialized || !Array.isArray(parsed.records)) {
      throw new Error("Invalid local CMS data file.");
    }
    const added = appendMissingMediaSeeds(parsed.records);
    if (added > 0) {
      await mkdir(localDirectory, { recursive: true });
      await writeFile(localFile, JSON.stringify(parsed, null, 2), "utf8");
    }
    return parsed;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    const database: LocalDatabase = { initialized: true, records: createSeedRecords() };
    await mkdir(localDirectory, { recursive: true });
    await writeFile(localFile, JSON.stringify(database, null, 2), "utf8");
    return database;
  }
}

async function writeLocalDatabase(database: LocalDatabase) {
  if (isVercelWithoutDatabase) {
    throw new Error("Vercel 生产环境尚未配置 DATABASE_URL，后台内容无法持久保存。");
  }

  await mkdir(localDirectory, { recursive: true });
  localWriteQueue = localWriteQueue.then(() => writeFile(localFile, JSON.stringify(database, null, 2), "utf8"));
  await localWriteQueue;
}

export function getCmsStorageMode() {
  if (databaseUrl) return "postgres" as const;
  if (isVercelWithoutDatabase) return "readonly-seed" as const;
  return "local-json" as const;
}

export async function listCmsRecords(collection: CmsCollection, options: { includeDrafts?: boolean } = {}) {
  assertCollection(collection);
  const sql = getSql();

  if (sql) {
    await ensurePostgresSchema();
    const rows = options.includeDrafts
      ? await sql`SELECT * FROM cms_records WHERE collection = ${collection} ORDER BY sort_order ASC, updated_at DESC`
      : await sql`SELECT * FROM cms_records WHERE collection = ${collection} AND status = 'published' ORDER BY sort_order ASC, updated_at DESC`;
    return rows.map((row) => normalizePostgresRecord(row));
  }

  const database = await readLocalDatabase();
  return database.records
    .filter((record) => record.collection === collection && (options.includeDrafts || record.status === "published"))
    .sort((left, right) => left.sortOrder - right.sortOrder || right.updatedAt.localeCompare(left.updatedAt));
}

export async function getCmsRecord(collection: CmsCollection, id: string) {
  assertCollection(collection);
  const sql = getSql();

  if (sql) {
    await ensurePostgresSchema();
    const [row] = await sql`SELECT * FROM cms_records WHERE collection = ${collection} AND id = ${id} LIMIT 1`;
    return row ? normalizePostgresRecord(row) : null;
  }

  const database = await readLocalDatabase();
  return database.records.find((record) => record.collection === collection && record.id === id) ?? null;
}

export async function saveCmsRecord(input: CmsRecordInput) {
  assertCollection(input.collection);
  const now = new Date().toISOString();
  const existing = input.id ? await getCmsRecord(input.collection, input.id) : null;
  const record: CmsRecord = {
    id: input.id ?? crypto.randomUUID(),
    collection: input.collection,
    slug: input.slug?.trim() || null,
    status: input.status === "draft" ? "draft" : "published",
    sortOrder: Number.isFinite(input.sortOrder) ? Number(input.sortOrder) : 0,
    data: input.data,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now
  };
  const sql = getSql();

  if (sql) {
    await ensurePostgresSchema();
    await sql`
      INSERT INTO cms_records (id, collection, slug, status, sort_order, data, created_at, updated_at)
      VALUES (
        ${record.id},
        ${record.collection},
        ${record.slug},
        ${record.status},
        ${record.sortOrder},
        ${sql.json(record.data as postgres.JSONValue)},
        ${record.createdAt},
        ${record.updatedAt}
      )
      ON CONFLICT (id) DO UPDATE SET
        slug = EXCLUDED.slug,
        status = EXCLUDED.status,
        sort_order = EXCLUDED.sort_order,
        data = EXCLUDED.data,
        updated_at = EXCLUDED.updated_at
    `;
    return record;
  }

  const database = await readLocalDatabase();
  const index = database.records.findIndex((item) => item.id === record.id);
  if (index >= 0) database.records[index] = record;
  else database.records.push(record);
  await writeLocalDatabase(database);
  return record;
}

export async function deleteCmsRecord(collection: CmsCollection, id: string) {
  assertCollection(collection);
  const sql = getSql();

  if (sql) {
    await ensurePostgresSchema();
    const result = await sql`DELETE FROM cms_records WHERE collection = ${collection} AND id = ${id} RETURNING id`;
    return result.length > 0;
  }

  const database = await readLocalDatabase();
  const nextRecords = database.records.filter((record) => !(record.collection === collection && record.id === id));
  const deleted = nextRecords.length !== database.records.length;
  if (deleted) {
    database.records = nextRecords;
    await writeLocalDatabase(database);
  }
  return deleted;
}

export async function getCmsStats() {
  const entries = await Promise.all(
    cmsCollectionNames.map(async (collection) => [collection, (await listCmsRecords(collection, { includeDrafts: true })).length] as const)
  );
  return Object.fromEntries(entries) as Record<CmsCollection, number>;
}
