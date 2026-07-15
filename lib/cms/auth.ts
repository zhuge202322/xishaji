import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const adminCookieName = "vicmach_admin_session";
const sessionDurationSeconds = 60 * 60 * 12;

function getSessionSecret() {
  const configured = process.env.ADMIN_SESSION_SECRET?.trim();
  if (configured) return configured;
  if (process.env.NODE_ENV !== "production") return "vicmach-local-development-session-secret";
  return "";
}

function encode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function decode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(payload: string) {
  const secret = getSessionSecret();
  if (!secret) return "";
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function isAdminAuthConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD?.trim() && process.env.ADMIN_SESSION_SECRET?.trim());
}

export function getLocalDevelopmentPassword() {
  return process.env.NODE_ENV !== "production" && !process.env.ADMIN_PASSWORD ? "admin123" : null;
}

export function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD?.trim() || getLocalDevelopmentPassword();
  if (!expected) return false;
  return safeEqual(password, expected);
}

export function createAdminToken() {
  const payload = encode(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + sessionDurationSeconds }));
  const signature = sign(payload);
  if (!signature) throw new Error("ADMIN_SESSION_SECRET 尚未配置。");
  return `${payload}.${signature}`;
}

export function verifyAdminToken(token: string | undefined | null) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return false;

  try {
    const parsed = JSON.parse(decode(payload)) as { exp?: number };
    return typeof parsed.exp === "number" && parsed.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export async function hasAdminSession() {
  const cookieStore = await cookies();
  return verifyAdminToken(cookieStore.get(adminCookieName)?.value);
}

export async function requireAdminSession() {
  if (!(await hasAdminSession())) {
    redirect("/admin/login");
  }
}

export const adminSessionMaxAge = sessionDurationSeconds;
