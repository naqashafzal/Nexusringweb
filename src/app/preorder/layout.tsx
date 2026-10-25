import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Access & Planned Editions",
  description: "Follow Nexus Ring development and join the free launch waitlist. Explore proposed Maker, Hacker and Pro editions. Orders are not open yet.",
  alternates: { canonical: "/preorder" },
};

export default function EarlyAccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
