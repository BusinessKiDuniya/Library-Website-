import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Find answers to common questions about Athenaeum Study Hall — membership, bookings, rules, facilities, timings, and more.",
};

export default function FAQPage() {
  return <FAQClient />;
}
