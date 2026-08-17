import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track My Order",
  description: "Track your Kindard Kids order in real time. Enter your order number or email to see your delivery status.",
};

export default function TrackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
