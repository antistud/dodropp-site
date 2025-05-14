import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    emoji: "✏️",
    title: "Create Amazing Lists!",
    description: "Make lists for everything - camping trips, movie nights, birthday parties - and add all the tasks you need to remember!",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Creating a digital checklist",
    bgColor: "bg-primary"
  },
  {
    number: 2,
    emoji: "🪄",
    title: "Add Some Magic!",
    description: "Sprinkle in some automation - like auto-assigning snack duty to different friends each week or reminding everyone to bring swimsuits when beach day is checked!",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Adding automation magic",
    bgColor: "bg-secondary"
  },
  {
    number: 3,
    emoji: "🔗",
    title: "Share With Friends!",
    description: "Send one simple link to your whole squad! No need for everyone to download apps or create accounts - they can just click and start checking things off!",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Sharing with friends",
    bgColor: "bg-accent"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How Does The Magic Work? ✨
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            It's super easy to create, automate, and share your checklists with your friends and family!
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
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className={`w-20 h-20 ${step.bgColor} rounded-2xl text-white flex flex-col items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg`}
                whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-3xl">{step.emoji}</div>
                <div className="text-sm font-normal mt-1">Step {step.number}</div>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              <motion.div 
                className="mt-6 rounded-xl overflow-hidden shadow-lg border-2 border-primary/20"
                whileHover={{ 
                  y: -8, 
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <img src={step.image} alt={step.alt} className="w-full h-auto" />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://app.dodropp.com/" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium shadow-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Try It Now - It's Free! 🎉
          </motion.a>
          
          <motion.a 
            href="/how-it-works" 
            className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            See Detailed Guide
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
