import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-light leading-relaxed text-slate-800 mb-8">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-medium">
              Magic Powers
            </span>
            <br />
            <span className="text-3xl md:text-4xl">Remove the Chaos ✨</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Transform overwhelming tasks into peaceful, manageable steps. Make
            your work feel less worky, one focused moment at a time.
          </p>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="https://app.dodropp.com/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
            🎯 Unlock Your Focus
            </a>
          </motion.div>

          <motion.div
            className="text-center text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg font-light">
              No overwhelm. No chaos. Just Focus.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
