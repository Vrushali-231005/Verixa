import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "book"
  | "check"
  | "chevron"
  | "clock"
  | "document"
  | "download"
  | "edit"
  | "file"
  | "folder"
  | "graph"
  | "menu"
  | "plus"
  | "search"
  | "timeline"
  | "warning"
  | "x";

const icons: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Zm16 0A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  document: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 13h6M9 17h5" /></>,
  download: <><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M5 21h14" /></>,
  edit: <><path d="m4 20 4.5-1L19 8.5 15.5 5 5 15.5Z" /><path d="m13.5 7 3.5 3.5" /></>,
  file: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4" /></>,
  folder: <path d="M3 6h7l2 2h9v11H3z" />,
  graph: <><circle cx="6" cy="12" r="2" /><circle cx="17" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="m8 11 7-4m-7 6 8 4" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  plus: <path d="M12 5v14M5 12h14" />,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  timeline: <><path d="M4 12h16" /><circle cx="7" cy="12" r="2" /><circle cx="16" cy="12" r="2" /></>,
  warning: <><path d="M12 3 2.5 20h19Z" /><path d="M12 9v4m0 3.5v.1" /></>,
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
