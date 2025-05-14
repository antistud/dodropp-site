import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

const faqs = [
  {
    question: "What makes DoDropp different from other task management tools?",
    answer: "DoDropp combines the simplicity of shareable checklists with the power of automation. Unlike other tools that are either too complex or too basic, DoDropp finds the perfect balance. You can share lists with anyone via a simple link (no sign-up required for viewers), and our automation features let you create rules that make your checklists practically run themselves."
  },
  {
    question: "Can I share my lists with people who don't have a DoDropp account?",
    answer: "Absolutely! That's one of DoDropp's best features. When you create a list, you get a shareable link that you can send to anyone. They can view and interact with your checklist without creating an account. If they want to create their own lists or access more features, they can sign up for their own account."
  },
  {
    question: "What kind of automation rules can I create?",
    answer: "With our Pro plan, you can create a variety of automation rules, such as: schedule tasks to appear on specific dates or days of the week, create task dependencies (When Task A is completed, create or activate Task B), auto-assign tasks to team members based on conditions, set up recurring tasks (daily, weekly, monthly), create rules that automatically mark tasks as complete based on other actions."
  },
  {
    question: "Is there a limit to how many people can use a shared list?",
    answer: "No, there's no limit to how many people can access and use a shared list. Whether you're coordinating with a small team or a large organization, DoDropp can handle it. With the Pro plan, you also get access controls that let you decide who can view, edit, or administer each list."
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes! You can upgrade from Free to Pro whenever you need more lists or automation features. If you no longer need the Pro features, you can downgrade to the Free plan at the end of your current billing period. Keep in mind that if you have more than 5 lists when downgrading, you'll need to archive or delete lists to get down to the Free plan limit."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button 
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition" 
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="px-6 py-4 bg-gray-50"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
