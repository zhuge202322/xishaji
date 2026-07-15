import { notFound } from "next/navigation";
import { AdminCollectionManager } from "@/components/admin/AdminCollectionManager";
import { getAdminCollectionConfig } from "@/lib/cms/admin-config";
import { getCmsStorageMode, listCmsRecords } from "@/lib/cms/storage";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ collection: string }>;
};

export default async function AdminCollectionPage({ params }: PageProps) {
  const { collection } = await params;
  const config = getAdminCollectionConfig(collection);
  if (!config) notFound();

  const records = await listCmsRecords(config.collection, { includeDrafts: true });
  return <AdminCollectionManager config={config} initialRecords={records} storageMode={getCmsStorageMode()} />;
}
