import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Photos & Videos of Athenaeum",
  description:
    "View photos and videos of Athenaeum Study Hall — study halls, private cabins, reading lounge, reception, parking, and more.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
