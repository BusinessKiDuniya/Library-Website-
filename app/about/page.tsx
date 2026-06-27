import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Team",
  description:
    "Learn about Athenaeum Study Hall — our story, mission, values, team, and the journey to build Noida's most premium study library since 2019.",
};

export default function AboutPage() {
  return <AboutClient />;
}
