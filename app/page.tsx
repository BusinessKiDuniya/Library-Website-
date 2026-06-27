import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MembershipPlans from "@/components/home/MembershipPlans";
import FacilitiesShowcase from "@/components/home/FacilitiesShowcase";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import LibraryTour from "@/components/home/LibraryTour";
import Location from "@/components/home/Location";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Athenaeum Study Hall — Premium Study Library in Noida",
  description:
    "Join Noida's #1 premium study library. Silent environment, high-speed Wi-Fi, 120+ seats, private cabins, and 24/7 CCTV. Start with a free trial today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <MembershipPlans />
      <FacilitiesShowcase />
      <GalleryPreview />
      <Testimonials />
      <LibraryTour />
      <Location />
      <FAQ />
      <FinalCTA />
    </>
  );
}
