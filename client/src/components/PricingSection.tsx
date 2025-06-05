import { motion } from "framer-motion";
import { CheckIcon, XIcon, SparklesIcon } from "lucide-react";
import { Link } from "wouter";

// Free plan features
const freePlanFeatures = [
  { name: "Up to 5 custom lists for all your activities", included: true },
  { name: "Unlimited tasks on each list", included: true },
  { name: "Basic task types (checkbox and text)", included: true },
  { name: "Smart tags to organize your items", included: true },
  { name: "Share with friends via simple links", included: true },
  { name: "Photo upload tasks (limit: 5 per list)", included: true },
  { name: "Magic automation rules ✨", included: false },
  { name: "Advanced task types (file uploads, etc.)", included: false },
  { name: "Tasks that create other tasks automatically", included: false }
];

// Pro plan features
const proPlanFeatures = [
  { name: "Unlimited lists for all your adventures", included: true },
  { name: "Unlimited tasks per list", included: true },
  { name: "All task types (photos, files, text input)", included: true },
  { name: "Super-powered tagging system", included: true },
  { name: "Share with privacy controls for your squad", included: true },
  { name: "Unlimited photo uploads in tasks", included: true },
  { name: "File uploads up to 100MB per task", included: true },
  { name: "Magic automation rules ✨", included: true },
  { name: "Tasks that trigger other tasks automatically", included: true },
  { name: "Fast & friendly help when you need it", included: true }
];

// Agent plan features
const agentPlanFeatures = [
  { name: "Everything in Pro Magic plan", included: true },
  { name: "Email inbox monitoring and processing", included: true },
  { name: "Automatic task creation from emails", included: true },
  { name: "Smart categorization of incoming tasks", included: true },
  { name: "Integration with Attio, Hubspot & Salesforce", included: true },
  { name: "Custom task assignments based on email content", included: true },
  { name: "Document & attachment extraction", included: true },
  { name: "Priority support with dedicated agent", included: true },
  { name: "Custom workflows and advanced automations", included: true },
  { name: "Weekly analytics and productivity reports", included: true }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple Pricing, Maximum Value!
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start free today, upgrade only if you need extra magic powers ✨
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            className="p-8 rounded-2xl border-2 border-secondary/30 bg-white shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-secondary">Free Forever! 🎁</h3>
              <p className="text-gray-600 mt-2">Perfect for friend groups & casual planning</p>
            </div>
            
            <div className="mb-6">
              <div className="text-4xl font-bold text-secondary">$0</div>
              <p className="text-gray-600">No credit card needed</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {freePlanFeatures.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  {feature.included ? (
                    <span className="h-6 w-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mt-0.5 mr-3 flex-shrink-0">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mt-0.5 mr-3 flex-shrink-0">
                      <XIcon className="h-4 w-4" />
                    </span>
                  )}
                  <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a 
              href="https://app.dodropp.com/" 
              className="block w-full py-3 text-center border-2 border-secondary text-secondary rounded-full font-medium hover:bg-secondary hover:text-white transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Free - No Credit Card
            </motion.a>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div 
            className="p-8 rounded-2xl border-2 border-primary bg-gradient-to-br from-white to-primary/5 shadow-lg relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
              Most Popular! ⭐
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary">Pro Magic ✨</h3>
              <p className="text-gray-600 mt-2">For friend groups who want all the advanced features</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end">
                <div className="text-4xl font-bold text-primary">$3</div>
                <span className="text-gray-600 ml-1 mb-1">/month</span>
              </div>
              <p className="text-gray-600">Less than a coffee! ☕</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {proPlanFeatures.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="h-6 w-6 bg-primary/20 rounded-full flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                    {feature.name.includes("Magic") ? (
                      <SparklesIcon className="h-4 w-4" />
                    ) : (
                      <CheckIcon className="h-4 w-4" />
                    )}
                  </span>
                  <span className="text-gray-700">{feature.name}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a 
              href="https://app.dodropp.com/" 
              className="block w-full py-3 text-center bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium transition shadow-md"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              Start Monthly Plan - $3/month ✨
            </motion.a>
          </motion.div>
          
          {/* Agent Plan */}
          <motion.div 
            className="p-8 rounded-2xl border-2 border-accent bg-gradient-to-br from-white to-accent/5 shadow-lg relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-accent to-primary text-white px-4 py-1 rounded-full text-sm font-bold">
              Power User! 🚀
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-accent">Agent 🤖</h3>
              <p className="text-gray-600 mt-2">For professionals who want to automate their workflow</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end">
                <div className="text-4xl font-bold text-accent">$20</div>
                <span className="text-gray-600 ml-1 mb-1">/month</span>
              </div>
              <p className="text-gray-600">AI-powered task management</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {agentPlanFeatures.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="h-6 w-6 bg-accent/20 rounded-full flex items-center justify-center text-accent mt-0.5 mr-3 flex-shrink-0">
                    {feature.name.includes("Magic") || feature.name.includes("AI") ? (
                      <SparklesIcon className="h-4 w-4" />
                    ) : (
                      <CheckIcon className="h-4 w-4" />
                    )}
                  </span>
                  <span className="text-gray-700">{feature.name}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a 
              href="https://app.dodropp.com/agent" 
              className="block w-full py-3 text-center bg-gradient-to-r from-accent to-primary text-white rounded-full font-medium transition shadow-md"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Agent Plan - $20/month 🤖
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}