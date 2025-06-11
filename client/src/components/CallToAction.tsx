import { motion } from "framer-motion";
import { trackCTAClick } from "@/lib/analytics";

export default function CallToAction() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-light text-slate-800 mb-8 leading-relaxed">
            Become a <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-medium">
              Wizard ✨
            </span>
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands who've discovered their magic powers while keeping
            their sanity intact.
          </p>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://app.dodropp.com/"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🧙‍♂️ Unlock Your Magic Powers
            </a>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-slate-500 font-light flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Free to start • No overwhelm • Just clarity
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
