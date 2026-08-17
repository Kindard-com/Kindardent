import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Settings",
  description: "Manage your cookie and privacy preferences for the Kindard Kids website.",
};

export default function CookieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
