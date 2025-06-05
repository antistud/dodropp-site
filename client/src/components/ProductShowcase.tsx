import { motion } from "framer-motion";

const showcaseItems = [
  {
    image: "/src/assets/my_lists_cards.PNG",
    title: "Multiple Lists, Zero Stress",
    description: "Organize different projects with beautiful progress tracking that keeps you motivated.",
    accent: "bg-emerald-500"
  },
  {
    image: "/src/assets/list_page.PNG",
    title: "Smart Task Management", 
    description: "Intelligent task organization with tags, subtasks, and completion tracking that adapts to how you work.",
    accent: "bg-purple-500"
  },
  {
    image: "/src/assets/focus_timer.PNG",
    title: "Focus Timer Magic",
    description: "Built-in focus sessions that help ADHD minds stay on track without feeling overwhelmed.",
    accent: "bg-indigo-500"
  },
  {
    image: "/src/assets/task_generator.PNG",
    title: "AI Task Generation",
    description: "Generate tasks from templates or create custom workflows that match your unique thinking style.",
    accent: "bg-pink-500"
  },
  {
    image: "/src/assets/share_lists.PNG",
    title: "Effortless Sharing",
    description: "Share your progress with one magical link - no apps to download, no complex setups.",
    accent: "bg-blue-500"
  },
  {
    image: "/src/assets/task_page.PNG",
    title: "Detailed Task Views",
    description: "Rich task details with subtasks, photos, and time tracking that grow with your needs.",
    accent: "bg-orange-500"
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
        
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {showcaseItems.map((item, index) => (
              <motion.div 
                key={index}
                className="group relative flex-shrink-0 w-56 snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-white/50 group-hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium text-sm mb-1">{item.title}</h3>
                    <p className="text-white/90 text-xs font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className={`absolute -top-1 -right-1 w-4 h-4 ${item.accent} rounded-full animate-pulse`} />
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {showcaseItems.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-slate-300"
              />
            ))}
          </div>
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