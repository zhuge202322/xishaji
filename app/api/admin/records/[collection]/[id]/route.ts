import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, verifyAdminToken } from "@/lib/cms/auth";
import { getAdminCollectionConfig } from "@/lib/cms/admin-config";
import { deleteCmsRecord, getCmsRecord, saveCmsRecord } from "@/lib/cms/storage";

export const runtime = "nodejs";

type RouteProps = {
  params: Promise<{ collection: string; id: string }>;
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
  const { collection, id } = await params;
  const config = getAdminCollectionConfig(collection);
  if (!config) return NextResponse.json({ error: "内容类型不存在。" }, { status: 404 });
  const record = await getCmsRecord(config.collection, id);
  return record ? NextResponse.json({ record }) : NextResponse.json({ error: "内容不存在。" }, { status: 404 });
}

export async function PUT(request: NextRequest, { params }: RouteProps) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "登录已过期。" }, { status: 401 });
  const { collection, id } = await params;
  const config = getAdminCollectionConfig(collection);
  if (!config) return NextResponse.json({ error: "内容类型不存在。" }, { status: 404 });

  try {
    const body = (await request.json()) as { data?: Record<string, unknown> };
    const data = body.data ?? {};
    const record = await saveCmsRecord({
      id,
      collection: config.collection,
      slug: typeof data.slug === "string" ? data.slug : null,
      status: data.status === "draft" ? "draft" : "published",
      sortOrder: Number(data.sortOrder ?? 0),
      data
    });
    refreshPublicContent();
    return NextResponse.json({ record });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteProps) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "登录已过期。" }, { status: 401 });
  const { collection, id } = await params;
  const config = getAdminCollectionConfig(collection);
  if (!config) return NextResponse.json({ error: "内容类型不存在。" }, { status: 404 });

  try {
    const deleted = await deleteCmsRecord(config.collection, id);
    if (!deleted) return NextResponse.json({ error: "内容不存在。" }, { status: 404 });
    refreshPublicContent();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
