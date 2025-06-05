
<old_str>import { motion } from "framer-motion";

const plans = [
  {
    name: "Free Forever",
    price: "Free",
    description: "Perfect for trying out DoDropp!",
    features: [
      "Create unlimited lists",
      "Share with friends via link",
      "Basic task types (checkbox, text)",
      "Up to 10 tasks per list",
      "Community support"
    ],
    cta: "Start Free Forever! 🎉",
    isPopular: false,
    ctaLink: "https://app.dodropp.com/"
  },
  {
    name: "Pro Magic",
    price: "$7",
    description: "AI personal project manager that never stops organizing for you",
    features: [
      "Everything in Free",
      "Unlimited tasks per list",
      "Photo & file upload tasks",
      "Smart automation rules",
      "Priority support",
      "AI-powered task suggestions"
    ],
    cta: "Start Monthly Plan - $7/month ✨",
    isPopular: true,
    ctaLink: "https://app.dodropp.com/"
  },
  {
    name: "Agent",
    price: "$20",
    description: "Personal consultation for complex planning needs",
    features: [
      "Everything in Pro Magic",
      "1-on-1 consultation call",
      "Custom automation setup",
      "Advanced integrations",
      "White-glove onboarding",
      "Dedicated account manager"
    ],
    cta: "Book a Call - $20/month 🤖",
    isPopular: false,
    ctaLink: "https://calendly.com/jon-t3ch/30min"
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple Pricing That Makes Sense 💰
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start free, upgrade when you're ready for more magic!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plans[0].name}</h3>
              <p className="text-gray-600 mb-4">{plans[0].description}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end">
                <div className="text-4xl font-bold text-primary">{plans[0].price}</div>
              </div>
              <p className="text-gray-600">Forever and always! 🌟</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plans[0].features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <motion.a 
              href={plans[0].ctaLink}
              className="block w-full py-3 text-center border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {plans[0].cta}
            </motion.a>
          </motion.div>
          
          {/* Pro Magic Plan */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary relative transform md:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold">
                Most Popular! ⭐
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plans[1].name}</h3>
              <p className="text-gray-600 mb-4">{plans[1].description}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end">
                <div className="text-4xl font-bold text-primary">$7</div>
                <span className="text-gray-600 ml-1 mb-1">/month</span>
              </div>
              <p className="text-gray-600">Less than a lunch! 🥪</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plans[1].features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <motion.a 
              href={plans[1].ctaLink}
              className="block w-full py-3 text-center bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium transition shadow-md"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              Start Monthly Plan - $7/month ✨
            </motion.a>
          </motion.div>
          
          {/* Agent Plan */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plans[2].name}</h3>
              <p className="text-gray-600 mb-4">{plans[2].description}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-end">
                <div className="text-4xl font-bold text-primary">$20</div>
                <span className="text-gray-600 ml-1 mb-1">/month</span>
              </div>
              <p className="text-gray-600">Premium consultation! 👑</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plans[2].features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <motion.a 
              href="https://calendly.com/jon-t3ch/30min" 
              className="block w-full py-3 text-center bg-gradient-to-r from-accent to-primary text-white rounded-full font-medium transition shadow-md"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Call - $20/month 🤖
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            All plans include our happiness guarantee! Not loving it? We'll make it right. 😊
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>•</span>
            <span>✓ No setup fees</span>
            <span>•</span>
            <span>✓ 30-day money back</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}</old_str>
<new_str>import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Start free, upgrade when you need more
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            className="bg-gray-50 p-8 rounded-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-gray-600 mb-6">Perfect for getting started</p>
            
            <div className="text-3xl font-bold mb-6">$0</div>
            
            <ul className="space-y-3 mb-8 text-gray-700">
              <li>✓ Unlimited lists</li>
              <li>✓ Share with friends</li>
              <li>✓ Basic task types</li>
              <li>✓ Up to 10 tasks per list</li>
            </ul>
            
            <a 
              href="https://app.dodropp.com/"
              className="block w-full py-3 text-center border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition"
            >
              Start Free
            </a>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div 
            className="bg-primary text-white p-8 rounded-xl relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Pro Magic</h3>
            <p className="text-primary-100 mb-6">AI-powered automation</p>
            
            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">$7</div>
              <div className="text-primary-200 text-sm">per month</div>
            </div>
            
            <ul className="space-y-3 mb-8 text-primary-100">
              <li>✓ Everything in Free</li>
              <li>✓ Unlimited tasks</li>
              <li>✓ Photo & file uploads</li>
              <li>✓ Smart automation</li>
              <li>✓ AI task suggestions</li>
            </ul>
            
            <a 
              href="https://app.dodropp.com/"
              className="block w-full py-3 text-center bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition"
            >
              Start Pro Plan
            </a>
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need something custom? <a href="https://calendly.com/jon-t3ch/30min" className="text-primary hover:underline">Book a call</a>
          </p>
        </div>
      </div>
    </section>
  );
}</new_str>
