import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Book a Seat — Reserve Your Study Spot",
  description:
    "Book your study seat at Athenaeum Study Hall online. Choose your preferred plan, date, and time slot. Confirmation within 30 minutes.",
};

export default function BookingPage() {
  return <BookingClient />;
}
