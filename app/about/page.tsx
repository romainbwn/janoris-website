import type { Metadata } from "next";
import { AboutSpread } from "@/components/about/AboutSpread";

export const metadata: Metadata = {
  title: "About — JANORIS",
  description:
    "From a teenage radio show in Marseille to weddings, rooftops and late-night dancefloors — the story behind JANORIS.",
};

export default function AboutPage() {
  return <AboutSpread />;
}
