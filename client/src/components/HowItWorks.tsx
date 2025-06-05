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
    emoji: "🔗",
    title: "Share with Your Squad!",
    description: "Get a magical share link that works instantly - no apps to download, no accounts needed for your friends to participate!",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Friends sharing and collaborating",
    bgColor: "bg-secondary"
  },
  {
    number: 3,
    emoji: "✨",
    title: "Watch the Magic Happen!",
    description: "Tasks complete themselves with smart automation, photos get uploaded, files shared, and everyone stays perfectly coordinated!",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Automated task completion",
    bgColor: "bg-accent"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How DoDropp Works Its Magic! ✨
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Three simple steps to transform your group planning from chaos to coordination
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="lg:w-1/2">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={step.image} 
                    alt={step.alt} 
                    className="rounded-2xl shadow-2xl border-4 border-white"
                  />
                  <div className={`absolute -top-4 -left-4 w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                    {step.number}
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: index * 0.5
                  }}
                >
                  {step.emoji}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Ready to experience the magic?</h3>
          <motion.a 
            href="https://app.dodropp.com/" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium transition shadow-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your First List - Free! 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}