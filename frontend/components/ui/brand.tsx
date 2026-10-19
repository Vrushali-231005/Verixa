import Link from "next/link";

// Logo mark: a seal ring around a "V" that doubles as a check mark (verified),
// with a rust dot for the claim being traced back to its evidence.
export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg
      className="logo-mark"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <path
        d="M12.5 14.5 19 26.5 28.5 12"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="logo-dot" cx="12.5" cy="14.5" r="2.4" />
    </svg>
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="VERIXA home">
      <LogoMark />
      {!compact && (
        <span className="brand-name">
          VERI<span className="brand-x">X</span>A
        </span>
      )}
    </Link>
  );
}
