import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import PricingSection from "@/components/PricingSection";
import CallToAction from "@/components/CallToAction";
import { useEffect } from "react";

export default function Home() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ProductShowcase />
      <PricingSection />
      <CallToAction />
    </main>
  );
}