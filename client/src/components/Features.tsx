import { motion } from "framer-motion";

const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m1 12 6 0m6 0 6 0"/></svg>,
    title: "One Thing at a Time",
    description: "Break overwhelming tasks into peaceful, manageable steps that feel achievable.",
    bgColor: "bg-slate-50",
    iconColor: "text-indigo-600"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: "Visual Organization",
    description: "See your progress clearly with calm, uncluttered layouts designed for focus.",
    bgColor: "bg-slate-50",
    iconColor: "text-purple-600"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect width="4" height="4" x="10" y="21"/><path d="M12 17v4"/><path d="M8 21l8 0"/></svg>,
    title: "Gentle Automation",
    description: "Let tasks complete themselves quietly in the background while you maintain your flow.",
    bgColor: "bg-slate-50",
    iconColor: "text-emerald-600"
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-light text-slate-800 mb-6">
            Designed for Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-medium">
              Peace of Mind
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Every feature thoughtfully crafted to reduce overwhelm and enhance clarity.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <motion.div 
                className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={feature.iconColor}>
                  {feature.icon}
                </div>
              </motion.div>
              
              <h3 className="text-xl font-medium text-slate-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed font-light">
                {feature.description}
              </p>
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
          <p className="text-lg text-slate-500 font-light">
            "Simple tools for complex minds"
          </p>
        </motion.div>
      </div>
    </section>
  );
}