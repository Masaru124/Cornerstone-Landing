import type { Metadata } from "next";
import { CookingLandingPage } from "@/sites/cooking";

export const metadata: Metadata = {
  title: "Ultimate 300+ Cooking & Nutrition Reels Bundle",
  description: "Cooking landing page clone for Digital Aura.",
};

export default function CookingPage() {
  return <CookingLandingPage />;
}