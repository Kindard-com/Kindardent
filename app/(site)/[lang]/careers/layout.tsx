import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Kindard Kids team — build the future of kids streetwear from Amsterdam.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
