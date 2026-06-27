import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Contact Athenaeum Study Hall via phone, WhatsApp, email, or visit us in person at Sector 62, Noida. We respond within 2 hours.",
};

export default function ContactPage() {
  return <ContactClient />;
}
