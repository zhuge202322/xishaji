import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, verifyAdminToken } from "@/lib/cms/auth";

export const runtime = "nodejs";

const maxUploadBytes = 12 * 1024 * 1024;

function safeFilename(filename: string) {
  const extension = path.extname(filename).toLowerCase();
  const basename = path.basename(filename, extension).replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/^-|-$/g, "") || "image";
  return `${basename.slice(0, 80)}-${Date.now()}${extension}`;
}

export async function POST(request: NextRequest) {
  if (!verifyAdminToken(request.cookies.get(adminCookieName)?.value)) {
    return NextResponse.json({ error: "登录已过期。" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!(file instanceof File)) return NextResponse.json({ error: "请选择图片文件。" }, { status: 400 });
    if (!file.type.startsWith("image/")) return NextResponse.json({ error: "只能上传图片文件。" }, { status: 400 });
    if (file.size > maxUploadBytes) return NextResponse.json({ error: "图片不能超过 12MB。" }, { status: 400 });

    const filename = safeFilename(file.name);
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`cms/${filename}`, file, { access: "public", addRandomSuffix: true });
      return NextResponse.json({ url: blob.url, storage: "vercel-blob" });
    }

    if (process.env.VERCEL) {
      return NextResponse.json({ error: "Vercel 生产环境尚未配置 BLOB_READ_WRITE_TOKEN。" }, { status: 503 });
    }

    const uploadDirectory = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDirectory, { recursive: true });
    await writeFile(path.join(uploadDirectory, filename), Buffer.from(await file.arrayBuffer()));
    return NextResponse.json({ url: `/uploads/${filename}`, storage: "local" });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
