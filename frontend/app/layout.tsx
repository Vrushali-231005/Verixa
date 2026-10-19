import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERIXA – Verified Research & Intelligent Expression Assistant",
  description:
    "An evidence-aware historical research workspace. Follow every historical claim back to its evidence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
