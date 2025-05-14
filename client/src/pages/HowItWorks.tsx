import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckIcon } from "lucide-react";

export default function HowItWorksPage() {
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Step data
  const steps = [
    {
      number: 1,
      title: "Create Your List",
      description: "Start by creating a new list for your activity, whether it's planning a trip, organizing a game night, or coordinating a study group.",
      details: [
        "Give your list a catchy name",
        "Choose a colorful theme",
        "Set deadlines if needed",
        "Add a description of your goal"
      ],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Creating a checklist on laptop",
      accentColor: "bg-primary text-white"
    },
    {
      number: 2,
      title: "Add Different Task Types",
      description: "DoDropp supports various task types to make your lists more interactive and useful for group planning.",
      details: [
        "Standard checkbox tasks",
        "Photo upload tasks to share visual information",
        "Text input tasks to gather responses",
        "File upload tasks for documents and resources"
      ],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Various task types shown on a tablet",
      accentColor: "bg-secondary text-white"
    },
    {
      number: 3,
      title: "Set Up Smart Automations",
      description: "Make your list work for you with powerful automation rules that handle routine tasks automatically.",
      details: [
        "Schedule tasks to appear on specific dates",
        "Create task chains that trigger when other tasks are completed",
        "Set up recurring tasks that repeat automatically",
        "Assign tasks to team members based on conditions"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Setting up automation rules",
      accentColor: "bg-violet-600 text-white"
    },
    {
      number: 4,
      title: "Share With Your Group",
      description: "Invite friends, family, or teammates to collaborate on your list - no sign-up required for basic participation.",
      details: [
        "Generate a unique sharing link",
        "Set permissions for who can view or edit",
        "Optionally require login for edit access",
        "Track who's viewed or completed tasks"
      ],
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Friends collaborating on tasks",
      accentColor: "bg-amber-500 text-white"
    },
    {
      number: 5,
      title: "Watch It All Come Together",
      description: "Sit back and enjoy as your list keeps everyone organized, with tasks that update automatically as your activity progresses.",
      details: [
        "View real-time progress updates",
        "Get notified when tasks are completed",
        "Track overall completion percentage",
        "Celebrate your group's accomplishments"
      ],
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Group celebrating completed tasks",
      accentColor: "bg-green-600 text-white"
    }
  ];

  // Example scenarios
  const examples = [
    {
      title: "Weekend Camping Trip",
      description: "Create a list with gear assignments, food responsibilities, and location photos. Automatically remind everyone 3 days before departure to confirm their items.",
      icon: "🏕️",
      bgcolor: "bg-green-100",
      color: "text-green-700"
    },
    {
      title: "Book Club Meetings",
      description: "Set up recurring monthly meeting tasks, file uploads for reading materials, and text inputs to gather discussion questions from all members.",
      icon: "📚",
      bgcolor: "bg-blue-100",
      color: "text-blue-700"
    },
    {
      title: "Birthday Party Planning",
      description: "Coordinate decorations, food, and gifts with photo tasks showing theme ideas and automated reminders as the date approaches.",
      icon: "🎂",
      bgcolor: "bg-pink-100",
      color: "text-pink-700"
    },
    {
      title: "Home Renovation",
      description: "Track your DIY project with before/after photo tasks, shopping lists that automatically update based on project phase, and file uploads for instruction manuals.",
      icon: "🔨",
      bgcolor: "bg-amber-100",
      color: "text-amber-700"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How <span className="text-primary">DoDropp</span> Works
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Turn ordinary checklists into powerful collaboration tools with just a few clicks
          </motion.p>
        </div>
      </section>
      
      {/* Step-by-Step Guide */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-24`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <div className="md:w-1/2 relative">
                <div className={`absolute -top-4 -left-4 w-12 h-12 ${step.accentColor} rounded-full flex items-center justify-center text-xl font-bold z-10`}>
                  {step.number}
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={step.image} 
                    alt={step.alt} 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                
                <motion.ul 
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {step.details.map((detail, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <span className={`h-6 w-6 ${step.accentColor} rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0`}>
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Real World Examples */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              DoDropp in Action
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              See how real groups use our powerful task types and automation
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`w-14 h-14 ${example.bgcolor} rounded-full flex items-center justify-center text-3xl mb-4`}>
                  {example.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${example.color}`}>{example.title}</h3>
                <p className="text-gray-600">{example.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary via-purple-500 to-secondary text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Create your first list today and see how DoDropp transforms your group planning
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <a 
              href="#" 
              className="inline-block px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition shadow-xl"
            >
              Create Your First List - Free!
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}