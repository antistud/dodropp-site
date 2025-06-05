import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";

const plans = [
  {
    name: "Free Magic",
    price: "$0",
    period: "forever",
    description: "Discover your team's superpowers without the stress",
    features: [
      "5 magical lists to start your journey",
      "Basic automation spells ✨",
      "Share magic links with your crew",
      "Zen-like focus features",
      "Make work less worky"
    ],
    cta: "Start the Magic",
    popular: false
  },
  {
    name: "Pro Magic",
    price: "$7",
    period: "per month",
    description: "Supercharge your team while staying zen",
    features: [
      "Unlimited magical lists",
      "Advanced automation powers ✨",
      "Team coordination superpowers",
      "ADHD-friendly focus tools",
      "Peaceful productivity insights",
      "Priority magical support"
    ],
    cta: "Unlock Pro Magic",
    popular: true
  },
  {
    name: "Agent Magic",
    price: "$20",
    period: "per month", 
    description: "AI-powered team nirvana for complex workflows",
    features: [
      "Everything in Pro Magic",
      "AI email processing magic",
      "CRM integrations (Attio, Hubspot, Salesforce)",
      "Automated task creation spells",
      "Advanced zen analytics",
      "Dedicated magical agent support"
    ],
    cta: "Achieve Team Nirvana",
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-light text-slate-800 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-medium">
              Magic Level ✨
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Supercharge your team's productivity without the overwhelm. Simple pricing for powerful results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-indigo-200 bg-white shadow-xl scale-105' 
                  : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-slate-800 mb-2">{plan.name}</h3>
                <p className="text-slate-600 font-light mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-light text-slate-800">{plan.price}</span>
                    {plan.price !== "$0" && (
                      <span className="text-slate-600 ml-1 mb-1">/{plan.period}</span>
                    )}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.a 
                href="https://app.dodropp.com/" 
                className={`block w-full py-3 text-center rounded-full font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl'
                    : 'border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-slate-500 font-light">
            All plans include a 30-day mindful money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}