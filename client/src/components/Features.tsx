import { motion } from "framer-motion";

const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    title: "Shareable Links",
    description: "Create a checklist and share it with anyone using a simple link. No sign-ups required for viewers.",
    bgColor: "bg-blue-100",
    iconColor: "text-primary"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>,
    title: "Smart Automation",
    description: "Set rules to automatically create, assign, or complete tasks based on triggers and schedules.",
    bgColor: "bg-purple-100",
    iconColor: "text-secondary"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-10v10h10V12Z"/><path d="M12 12H2v10h10V12Z"/><path d="M22 2h-10v10h10V2Z"/></svg>,
    title: "Multiple Lists",
    description: "Organize tasks into different lists for teams, projects, or categories and manage them all in one place.",
    bgColor: "bg-green-100",
    iconColor: "text-accent"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-10v10h10V12Z"/><path d="M12 12H2v10h10V12Z"/><path d="M22 2h-10v10h10V2Z"/></svg>,
    title: "Task Tagging",
    description: "Tag tasks and filter by tags to quickly find what you're looking for across all your lists.",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: "Progress Tracking",
    description: "See completion progress at a glance and get insights into your team's productivity.",
    bgColor: "bg-red-100",
    iconColor: "text-red-500"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
    title: "Smart Notifications",
    description: "Get notified when tasks are assigned to you, completed, or when deadlines are approaching.",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-500"
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
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            All The Features You Need,<br />None That You Don't
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            DoDropp combines the simplicity of a checklist with powerful automation to help teams stay on track without the complexity.
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
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <span className={`${feature.iconColor} text-xl`}>{feature.icon}</span>
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
