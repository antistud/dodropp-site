
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { useEffect } from "react";

// Reuse the features from the Features component
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 8h.01M12 3c-1.86 0-3.2.11-4.03.43a4.5 4.5 0 0 0-2.53 2.53C5.1 6.8 5 8.14 5 10c0 1.86.11 3.2.43 4.03a4.5 4.5 0 0 0 2.53 2.53c.83.33 2.17.44 4.03.44 1.86 0 3.2-.11 4.03-.43a4.5 4.5 0 0 0 2.53-2.53c.33-.83.44-2.17.44-4.03 0-1.86-.11-3.2-.43-4.03a4.5 4.5 0 0 0-2.53-2.53C15.2 3.11 13.86 3 12 3z"/><path d="M19 15v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"/><path d="M12 16v3"/><path d="m9 18 3 3 3-3"/></svg>,
    title: "Snap & Share Photos! 📸",
    description: "Add photos to your tasks to show exactly what you need or capture completed tasks with visual proof!",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-10v10h10V12Z"/><path d="M12 12H2v10h10V12Z"/><path d="M22 2h-10v10h10V2Z"/></svg>,
    title: "Lists for Everything! 📝",
    description: "Separate lists for your soccer team, party planning, game night, weekend trips - all in one place!",
    bgColor: "bg-accent/20",
    iconColor: "text-accent-foreground"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"/><path d="M14 2v6h6"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>,
    title: "Custom Text Responses! 💬",
    description: "Create text input tasks that collect responses from your group - perfect for gathering ideas or preferences!",
    bgColor: "bg-violet-100",
    iconColor: "text-violet-500"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.4 15-2.1-2.1m-3.3-3.2-2.1-2.2m-3.3-3.2-2.1-2.1M3.8 3.8l16.4 16.4" /><path d="m17.7 17.7-2.1-2.1m-3.3-3.3-2.2-2.1m-3.2-3.3-2.1-2.1M18.2 6.2l-1.4-1.4m-3.3-3.3 2.1 2.1" /></svg>,
    title: "Smart Tagging System 🏷️",
    description: "Tag things like #MovieNight or #BeachTrip to find all your related tasks super fast!",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3 3-3-3"/><path d="m15 5-3-3-3 3"/><path d="m5 15-3 3 3 3"/><path d="m19 15 3 3-3 3"/><path d="m3 7 3-3 3 3"/><path d="m15 7 3-3 3 3"/></svg>,
    title: "File Upload Tasks! 📁",
    description: "Share documents, spreadsheets, and files right within your tasks - great for event planning or group projects!",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: "See Your Progress! 📈",
    description: "Watch your group's to-do list shrink with interactive tracking features - perfect for roommates splitting chores!",
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

// Animation variants
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

export default function FeaturesPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover All DoDropp Features
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to create, share, and manage checklists with your friends and family.
          </motion.p>
        </div>
      </section>
      
      {/* Features Grid Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-xl border-2 border-primary/10 bg-white shadow-md hover:shadow-xl transition"
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
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="mt-2">
                  <motion.div 
                    className="inline-block text-primary font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Learn more →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Featured Details */}
          <div className="max-w-4xl mx-auto mt-16 mb-8">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              How Our Features Make Your Life Easier
            </motion.h2>
            
            <motion.div 
              className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Why DoDropp is Different</h3>
              <p className="text-gray-700 mb-4">
                Unlike traditional to-do apps focused on individuals, DoDropp is built for social activities and group coordination. 
                Our unique approach combines the simplicity of checklists with powerful collaboration features that make planning with friends fun!
              </p>
              <ul className="space-y-2 ml-6 list-disc text-gray-700">
                <li>No account required to view or complete shared tasks</li>
                <li>Built for mobile-first experience - perfect for on-the-go coordination</li>
                <li>Smart automation that eliminates repetitive work</li>
                <li>Visual feedback that makes completing tasks satisfying</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Get Started CTA */}
      <CallToAction />
    </>
  );
}
