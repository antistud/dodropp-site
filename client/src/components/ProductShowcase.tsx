import { motion } from "framer-motion";

const showcaseItems = [
  {
    title: "Multiple Lists, Zero Stress",
    description: "Organize different projects with beautiful progress tracking that keeps you motivated.",
    accent: "bg-emerald-500",
    icon: "📋"
  },
  {
    title: "Smart Task Management", 
    description: "Intelligent task organization with tags, subtasks, and completion tracking that adapts to how you work.",
    accent: "bg-purple-500",
    icon: "🎯"
  },
  {
    title: "Focus Timer Magic",
    description: "Built-in focus sessions that help ADHD minds stay on track without feeling overwhelmed.",
    accent: "bg-indigo-500",
    icon: "⏰"
  },
  {
    title: "AI Task Generation",
    description: "Generate tasks from templates or create custom workflows that match your unique thinking style.",
    accent: "bg-pink-500",
    icon: "🤖"
  },
  {
    title: "Effortless Sharing",
    description: "Share your progress with one magical link - no apps to download, no complex setups.",
    accent: "bg-blue-500",
    icon: "🔗"
  },
  {
    title: "Detailed Task Views",
    description: "Rich task details with subtasks, photos, and time tracking that grow with your needs.",
    accent: "bg-orange-500",
    icon: "📝"
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-light text-slate-800 mb-6">
            See the{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-medium">
              Magic ✨
            </span>
            {" "}in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Real screenshots from real users who've transformed their productivity while staying calm and focused.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div 
              key={index}
              className="group relative p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="text-center">
                <div className={`w-20 h-20 ${item.accent} rounded-full flex items-center justify-center mx-auto mb-6 text-3xl`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{item.description}</p>
              </div>
              <div className={`absolute -top-3 -right-3 w-6 h-6 ${item.accent} rounded-full animate-pulse`} />
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
          <p className="text-slate-500 font-light mb-8">
            "Finally, a tool that works with my brain, not against it"
          </p>
          <motion.a 
            href="https://app.dodropp.com/" 
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Try It Free - See Your Own Magic
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}