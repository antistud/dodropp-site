import PricingSection from "@/components/PricingSection";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import { useEffect } from "react";

export default function Pricing() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-32">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fun Plans for Every Friend Group
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              (Magic Powers Included! ✨)
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Start for free, add magic powers when you need them! No credit card needed to begin your adventure.
          </p>
        </div>
      </div>
      <PricingSection />
      <Faq />
      <CallToAction />
    </main>
  );
}
