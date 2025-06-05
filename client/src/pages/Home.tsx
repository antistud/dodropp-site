
<old_str>import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import BrandsBar from "@/components/BrandsBar";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import PricingSection from "@/components/PricingSection";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import NewsletterForm from "@/components/NewsletterForm";
import { useEffect } from "react";

export default function Home() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <BrandsBar />
      <Features />
      <HowItWorks />
      <Testimonials />
      <UseCases />
      <PricingSection />
      <Faq />
      <CallToAction />
      <NewsletterForm />
    </main>
  );
}</old_str>
<new_str>import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
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
      <HowItWorks />
      <PricingSection />
      <CallToAction />
    </main>
  );
}</new_str>
