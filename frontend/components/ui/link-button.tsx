import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icon";

export function LinkButton({
  href,
  children,
  variant = "primary",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "rust";
  icon?: IconName;
}) {
  return (
    <Link href={href} className={`button button-${variant}`}>
      {children}
      {icon && <Icon name={icon} size={16} />}
    </Link>
  );
}
