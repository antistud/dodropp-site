import { motion } from "framer-motion";
import { Link } from "wouter";

export default function CallToAction() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Simplify Your Task Management?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Start organizing, automating, and sharing your checklists today. No credit card required for the Free plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}>
              <a href="#" className="px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition shadow-lg inline-block">
                Get Started Free
              </a>
            </motion.div>
            <a href="#" className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition inline-block">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
