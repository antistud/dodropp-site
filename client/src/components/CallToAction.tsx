import { motion } from "framer-motion";
import { Link } from "wouter";
import { SparklesIcon, RocketIcon } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary via-purple-500 to-secondary text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1.2, 1],
              opacity: [0, 0.2, 0.3, 0.1],
              y: [0, -50 - Math.random() * 100]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              repeatType: "loop",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <SparklesIcon className="h-8 w-8" />
              Ready for Some Magical Checklists?
              <SparklesIcon className="h-8 w-8" />
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start creating amazing lists for your friend groups, family trips, hobby clubs, and adventures today! No credit card needed! ✨
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div 
                whileHover={{ y: -5, rotate: -2, scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://app.dodropp.com/" className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition shadow-xl inline-flex items-center gap-2">
                  <RocketIcon className="h-5 w-5" />
                  Let's Go! It's Free! 🎉
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ y: -3, rotate: 2, scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
              >
                <a href="#" className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white/20 transition inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                  See a Quick Demo
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 flex items-center justify-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/><path d="M9 11.5V14.5L12 16L15 14.5V11.5L12 10L9 11.5Z" fill="currentColor"/><path d="M16.5 8.5L13.5 7L12 8.5L9 7L6.5 8.5L8 11.5L9.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Join <span className="text-white font-bold">1,000+</span> friend groups already having fun with DoDropp
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
