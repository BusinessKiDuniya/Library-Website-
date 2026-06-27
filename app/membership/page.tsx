import type { Metadata } from "next";
import MembershipClient from "./MembershipClient";

export const metadata: Metadata = {
  title: "Membership Plans — Monthly, Quarterly, Half-Yearly, Yearly",
  description:
    "Compare all Athenaeum Study Hall membership plans. Transparent pricing with all features listed. No hidden fees. Monthly starting at ₹1,499.",
};

export default function MembershipPage() {
  return <MembershipClient />;
}
