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
    <main className="min-h-screen bg-gray-50 pt-32">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing Plans for Every Team
          </h1>
          <p className="text-xl text-gray-600">
            Start for free, upgrade when you need more power. No credit card required.
          </p>
        </div>
      </div>
      <PricingSection />
      <Faq />
      <CallToAction />
    </main>
  );
}
