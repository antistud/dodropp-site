import { motion } from "framer-motion";

const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    title: "Magic Share Links ✨",
    description: "One click and your checklist is shareable with friends! No sign-ups needed for your squad to see what's up.",
    bgColor: "bg-primary/20",
    iconColor: "text-primary"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>,
    title: "Tasks That Do Themselves! 🤖",
    description: "Make your checklist items complete themselves with powerful automation rules. Set it once, then sit back and relax!",
    bgColor: "bg-secondary/20",
    iconColor: "text-secondary"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-10v10h10V12Z"/><path d="M12 12H2v10h10V12Z"/><path d="M22 2h-10v10h10V2Z"/></svg>,
    title: "Lists for Everything! 📝",
    description: "Separate lists for your soccer team, party planning, game night, weekend trips - all in one place!",
    bgColor: "bg-accent/20",
    iconColor: "text-accent-foreground"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.4 15-2.1-2.1m-3.3-3.2-2.1-2.2m-3.3-3.2-2.1-2.1M3.8 3.8l16.4 16.4" /><path d="m17.7 17.7-2.1-2.1m-3.3-3.3-2.2-2.1m-3.2-3.3-2.1-2.1M18.2 6.2l-1.4-1.4m-3.3-3.3 2.1 2.1" /></svg>,
    title: "Fun Tagging System 🏷️",
    description: "Tag things like #MovieNight or #BeachTrip to find all your related tasks super fast!",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: "See Your Progress! 📈",
    description: "Watch your group's to-do list shrink with cool tracking features - perfect for roommates splitting chores!",
    bgColor: "bg-green-100",
    iconColor: "text-green-500"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
    title: "Friendly Reminders! 🔔",
    description: "DoDropp nudges you about upcoming deadlines so your camping trip planning doesn't fall behind!",
    bgColor: "bg-purple-100",
    iconColor: "text-primary"
  }
];

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features <br />Without the Complexity!
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            DoDropp makes checklists effective - perfect for friend groups, party planning, trips, and everyday adventures!
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-xl border-2 border-primary/20 bg-white shadow-md hover:shadow-xl transition"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                rotate: Math.random() > 0.5 ? 1 : -1,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <span className={`${feature.iconColor} text-2xl`}>{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
