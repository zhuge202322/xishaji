import { NextResponse } from "next/server";
import {
  adminCookieName,
  adminSessionMaxAge,
  createAdminToken,
  verifyAdminPassword
} from "@/lib/cms/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  if (!body?.password || !verifyAdminPassword(body.password)) {
    return NextResponse.json({ error: "密码错误，请重新输入。" }, { status: 401 });
  }

  try {
    const response = NextResponse.json({ success: true });
    response.cookies.set(adminCookieName, createAdminToken(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: adminSessionMaxAge
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(adminCookieName, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0
  });
  return response;
}
