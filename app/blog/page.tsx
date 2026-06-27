import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Study Tips, Strategies & Library News",
  description:
    "Insights on deep focus, competitive exam strategies, study techniques, and productivity tips from the Athenaeum Study Hall blog.",
};

export default function BlogPage() {
  return <BlogClient />;
}
