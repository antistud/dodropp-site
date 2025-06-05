import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-64 pb-32 px-6 bg-gradient-to-b from-slate-50 to-white">
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

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-4 font-light">
            DoDropp is an AI-powered checklist for people who overcommit.
          </p>
          <motion.div
            className="text-center text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg font-light mb-16">
              Find calm with all the projects and goals you've committed to.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ y: -10, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/src/assets/my_lists_cards.PNG" 
                alt="DoDropp lists overview showing multiple organized projects" 
                className="rounded-2xl shadow-xl border-4 border-white/50 group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                Multiple Lists
              </div>
            </motion.div>
            
            <motion.div 
              className="relative group"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/src/assets/list_page.PNG" 
                alt="DoDropp task management with smart organization" 
                className="rounded-2xl shadow-xl border-4 border-white/50 group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute -bottom-3 -right-3 bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                Smart Tasks
              </div>
            </motion.div>
            
            <motion.div 
              className="relative group"
              whileHover={{ y: -10, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/src/assets/focus_timer.PNG" 
                alt="DoDropp focus timer for ADHD-friendly work sessions" 
                className="rounded-2xl shadow-xl border-4 border-white/50 group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute -bottom-3 -right-3 bg-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                Focus Mode
              </div>
            </motion.div>
          </motion.div>

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
              No chaos. Just Calm, Start For Free.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
