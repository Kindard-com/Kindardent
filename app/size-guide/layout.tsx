import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Guide",
  description: "Kids clothing size guide for ages 2–14. Size charts for tops, bottoms, and shoes with measurement instructions.",
};

export default function SizeGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
