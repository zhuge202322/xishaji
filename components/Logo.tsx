import Link from "next/link";
import { CmsImage as Image } from "@/components/cms/CmsImage";
import type { PublicSiteSettings } from "@/lib/cms/types";

type LogoProps = {
  compact?: boolean;
  settings: PublicSiteSettings;
};

export function Logo({ compact = false, settings }: LogoProps) {
  return (
    <Link className="logo" href="/" aria-label={`${settings.siteName} home`}>
      <span className="logo-mark">
        <Image src={settings.logoUrl} alt="" width={48} height={32} priority />
      </span>
      {!compact ? (
        <span className="logo-copy">
          <span className="logo-word">{settings.siteName}</span>
          <span className="logo-company-name">{settings.legalName}</span>
        </span>
      ) : null}
    </Link>
  );
}
