import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, SparklesIcon } from "lucide-react";

const faqs = [
  {
    question: "🤔 What makes DoDropp so special compared to other checklist apps?",
    answer: "DoDropp is like a magical checklist that practically runs itself! ✨ While other apps are either too basic or way too complicated, DoDropp hits the sweet spot. You can share lists with your friends with a simple link (they don't even need to sign up!), and our powerful automation features make tasks appear, disappear, or assign themselves automatically - it's like having a checklist with superpowers!"
  },
  {
    question: "👥 Can my friends use my lists without signing up?",
    answer: "Absolutely! That's what makes DoDropp so awesome for friend groups! 🎯 When you create a list, you get a magic link to share with anyone. Your friends can check things off and add comments without creating an account or downloading anything. If they love it (and we bet they will!), they can sign up to create their own personalized lists!"
  },
  {
    question: "✨ What kind of powerful automation options can I set up?",
    answer: "With our Pro Magic plan, you can create all sorts of intelligent automations! 🪄 For example: schedule tasks to appear before your weekend camping trip, create task chains (when someone marks 'Buy snacks' complete, 'Bring napkins' automatically gets assigned to someone else), set up recurring reminders for your weekly game night, or even have tasks auto-complete when others are done. It's like training your checklist to be your personal assistant!"
  },
  {
    question: "👪 How many people can use a shared list?",
    answer: "Invite your whole crew! There's no limit to how many friends can use a shared list. 🎉 Whether it's your soccer team, roommates, family reunion planning committee, or book club - DoDropp can handle it all! With the Pro Magic plan, you also get privacy controls so you can decide who gets to see what or make changes."
  },
  {
    question: "💸 Can I switch between the free plan and Pro Magic whenever I want?",
    answer: "You bet! 🚀 Start with our free plan and upgrade to Pro Magic whenever you need those extra superpowers. If you decide you don't need all the magical features anymore, you can switch back to the free plan when your current billing period ends. Just remember, the free plan has a limit of 5 custom lists, so you might need to combine some lists or save your favorites if you have more than that!"
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <span>Questions? We've Got Answers!</span>
            <SparklesIcon className="h-8 w-8 text-secondary" />
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you want to know about DoDropp's magical checklists!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="border-2 border-primary/20 rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ 
                  scale: openIndex === index ? 1 : 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.button 
                  className="w-full px-6 py-4 text-left bg-white hover:bg-primary/5 flex justify-between items-center transition" 
                  onClick={() => toggleFaq(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ 
                      rotate: openIndex === index ? 180 : 0,
                      backgroundColor: openIndex === index ? "rgba(147, 51, 234, 0.1)" : "transparent",
                      borderRadius: "50%"
                    }}
                    transition={{ duration: 0.3 }}
                    className="p-1"
                  >
                    <ChevronDownIcon className={`h-5 w-5 ${openIndex === index ? "text-primary" : "text-gray-400"}`} />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="px-6 py-6 bg-gradient-to-br from-primary/5 to-white"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <motion.a 
              href="#" 
              className="inline-block px-6 py-2 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Chat With Us! 💬
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
