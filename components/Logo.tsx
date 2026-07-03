import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link className="logo" href="/" aria-label="VICMACH home">
      <span className="logo-mark">
        <Image src="/images/vicmach-mark.png" alt="" width={48} height={32} priority />
      </span>
      {!compact ? <span className="logo-word">VICMACH</span> : null}
    </Link>
  );
}
