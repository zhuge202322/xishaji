import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken, adminCookieName } from "@/lib/cms/auth";
import { getAdminCollectionConfig } from "@/lib/cms/admin-config";
import { getCmsStorageMode, listCmsRecords, saveCmsRecord } from "@/lib/cms/storage";

export const runtime = "nodejs";

type RouteProps = {
  params: Promise<{ collection: string }>;
};

function isAuthorized(request: NextRequest) {
  return verifyAdminToken(request.cookies.get(adminCookieName)?.value);
}

function refreshPublicContent() {
  revalidatePath("/", "layout");
  revalidatePath("/news");
  revalidatePath("/equipment");
}

export async function GET(request: NextRequest, { params }: RouteProps) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "登录已过期。" }, { status: 401 });
  const { collection } = await params;
  const config = getAdminCollectionConfig(collection);
  if (!config) return NextResponse.json({ error: "内容类型不存在。" }, { status: 404 });

  const records = await listCmsRecords(config.collection, { includeDrafts: true });
  return NextResponse.json({ records, storageMode: getCmsStorageMode() });
}

export async function POST(request: NextRequest, { params }: RouteProps) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "登录已过期。" }, { status: 401 });
  const { collection } = await params;
  const config = getAdminCollectionConfig(collection);
  if (!config) return NextResponse.json({ error: "内容类型不存在。" }, { status: 404 });

  try {
    const body = (await request.json()) as { data?: Record<string, unknown> };
    const data = body.data ?? {};
    const record = await saveCmsRecord({
      collection: config.collection,
      slug: typeof data.slug === "string" ? data.slug : null,
      status: data.status === "draft" ? "draft" : "published",
      sortOrder: Number(data.sortOrder ?? 0),
      data
    });
    refreshPublicContent();
    return NextResponse.json({ record }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
