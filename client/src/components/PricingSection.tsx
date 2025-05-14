import { motion } from "framer-motion";
import { CheckIcon, XIcon } from "lucide-react";
import { Link } from "wouter";

// Free plan features
const freePlanFeatures = [
  { name: "Up to 5 DoDropp lists", included: true },
  { name: "Unlimited tasks per list", included: true },
  { name: "Basic task tagging", included: true },
  { name: "Shareable links", included: true },
  { name: "Automation rules", included: false },
  { name: "Advanced task dependencies", included: false }
];

// Pro plan features
const proPlanFeatures = [
  { name: "Unlimited DoDropp lists", included: true },
  { name: "Unlimited tasks per list", included: true },
  { name: "Advanced task tagging and filtering", included: true },
  { name: "Shareable links with access controls", included: true },
  { name: "Powerful automation rules", included: true },
  { name: "Advanced task dependencies", included: true },
  { name: "Priority support", included: true }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start for free, upgrade when you need more power
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="text-gray-600 mt-2">Perfect for individuals and small teams</p>
            </div>
            
            <div className="mb-6">
              <div className="text-4xl font-bold">$0</div>
              <p className="text-gray-600">Forever free</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {freePlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.included ? (
                    <CheckIcon className="h-5 w-5 text-accent mt-1 mr-2" />
                  ) : (
                    <XIcon className="h-5 w-5 text-gray-400 mt-1 mr-2" />
                  )}
                  <span className={feature.included ? "" : "text-gray-400"}>{feature.name}</span>
                </li>
              ))}
            </ul>
            
            <a href="#" className="block w-full py-3 text-center border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition">
              Sign Up Free
            </a>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div 
            className="p-8 rounded-xl border-2 border-primary bg-white shadow-lg relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
              Most Popular
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-gray-600 mt-2">For teams that need more power and flexibility</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end">
                <div className="text-4xl font-bold">$3</div>
                <span className="text-gray-600 ml-1 mb-1">/month</span>
              </div>
              <p className="text-gray-600">or $24/year (save 33%)</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {proPlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-accent mt-1 mr-2" />
                  <span dangerouslySetInnerHTML={{ __html: feature.name.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></span>
                </li>
              ))}
            </ul>
            
            <a href="#" className="block w-full py-3 text-center bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition shadow-md">
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
