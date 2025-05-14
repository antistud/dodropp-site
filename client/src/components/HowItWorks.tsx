import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Create & Customize",
    description: "Build your checklist, add tasks, set due dates, and customize with tags and categories.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Creating a checklist",
    bgColor: "bg-primary"
  },
  {
    number: 2,
    title: "Automate & Optimize",
    description: "Set up automation rules to create recurring tasks, auto-assign work, or trigger actions when tasks are completed.",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Automating tasks",
    bgColor: "bg-secondary"
  },
  {
    number: 3,
    title: "Share & Collaborate",
    description: "Share your checklist with a simple link and collaborate with your team, friends, or family in real-time.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Sharing and collaborating",
    bgColor: "bg-accent"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How DoDropp Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how easy it is to create, automate, and share your checklists with anyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 ${step.bgColor} rounded-full text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              <motion.div 
                className="mt-6 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <img src={step.image} alt={step.alt} className="w-full h-auto" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
