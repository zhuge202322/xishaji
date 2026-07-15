import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminSession } from "@/lib/cms/auth";

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdminSession();
  return <AdminShell>{children}</AdminShell>;
}
