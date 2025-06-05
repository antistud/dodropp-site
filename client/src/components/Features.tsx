import { motion } from "framer-motion";

const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.4 15-2.1-2.1m-3.3-3.2-2.1-2.2m-3.3-3.2-2.1-2.1M3.8 3.8l16.4 16.4"/><path d="m17.7 17.7-2.1-2.1m-3.3-3.3-2.2-2.1m-3.2-3.3-2.1-2.1M18.2 6.2l-1.4-1.4m-3.3-3.3 2.1 2.1"/></svg>,
    title: "Magic Automation Powers ✨",
    description: "Tasks complete themselves like magic! Set it once, then watch your productivity soar while you stay zen.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    title: "Effortless Sharing 🚀",
    description: "One magical link shares your progress with others. No apps to download, no accounts needed - just seamless coordination when you need it.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m1 12 6 0m6 0 6 0"/></svg>,
    title: "Focus-Friendly Design 🧘",
    description: "Beautiful, uncluttered interface that helps ADHD minds stay on track. One thing at a time, without the overwhelm.",
    bgColor: "bg-emerald-50",
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
            Make Work Feel Less{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-medium">
              Worky ✨
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Supercharge your productivity while staying calm, focused, and actually enjoying what you do.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              {index === 0 && (
                <div className="absolute top-4 right-4 opacity-10">
                  <img 
                    src="/src/assets/task_generator.PNG" 
                    alt="Task generator interface" 
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </div>
              )}
              {index === 1 && (
                <div className="absolute top-4 right-4 opacity-10">
                  <img 
                    src="/src/assets/share_lists.PNG" 
                    alt="Share functionality interface" 
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </div>
              )}
              {index === 2 && (
                <div className="absolute top-4 right-4 opacity-10">
                  <img 
                    src="/src/assets/focus_timer.PNG" 
                    alt="Focus timer interface" 
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </div>
              )}
              
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
            "Magical powers for minds that think differently"
          </p>
        </motion.div>
      </div>
    </section>
  );
}