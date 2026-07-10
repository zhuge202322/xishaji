import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/site";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link className="logo" href="/" aria-label="VICMACH home">
      <span className="logo-mark">
        <Image src="/images/vicmach-mark.png" alt="" width={48} height={32} priority />
      </span>
      {!compact ? (
        <span className="logo-copy">
          <span className="logo-word">{company.brand}</span>
          <span className="logo-company-name">{company.legalName}</span>
        </span>
      ) : null}
    </Link>
  );
}
