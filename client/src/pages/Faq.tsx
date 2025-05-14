import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, HelpCircleIcon, SparklesIcon } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FaqPage() {
  const categories = [
    { name: "General", icon: "🌟", color: "bg-primary/20 text-primary" },
    { name: "Account & Pricing", icon: "💰", color: "bg-amber-100 text-amber-700" },
    { name: "Features", icon: "✨", color: "bg-violet-100 text-violet-700" },
    { name: "Task Types", icon: "📝", color: "bg-blue-100 text-blue-700" },
    { name: "Sharing & Collaboration", icon: "👥", color: "bg-green-100 text-green-700" },
    { name: "Technical", icon: "🔧", color: "bg-gray-100 text-gray-700" }
  ];
  
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ data grouped by category
  const faqsByCategory = {
    "General": [
      {
        question: "What makes DoDropp different from other checklist apps?",
        answer: "DoDropp is designed specifically for group collaboration with a focus on automation and flexibility. While other apps are either too basic or overly complex, DoDropp hits the sweet spot with features like magical share links (no sign-up needed for participants), powerful automation rules, and multiple task types including photos, files, and text responses. It's perfect for friend groups, families, and hobby clubs who need something more than basic checklists but don't want complex project management software."
      },
      {
        question: "Is DoDropp suitable for professional teams and businesses?",
        answer: "While DoDropp can certainly be used by small professional teams, it's primarily designed for social groups, friends, and families organizing activities together. Our interface and features are optimized for casual users rather than corporate environments. For enterprise-level project management, you might need more specialized software with advanced reporting and compliance features."
      },
      {
        question: "Do I need to download an app to use DoDropp?",
        answer: "No downloads needed! DoDropp is a web-based platform that works in any modern browser on your computer, tablet, or smartphone. This makes it super easy to access your lists from anywhere without installing anything. Just bookmark the website and you're good to go!"
      },
      {
        question: "How many people can use a shared DoDropp list?",
        answer: "There's no limit to how many people can use a shared list! Whether you're organizing a small book club with 5 friends or planning a neighborhood block party with 50 families, DoDropp can handle it. With our Pro Magic plan, you also get privacy controls so you can decide who gets to see what or make changes."
      }
    ],
    "Account & Pricing": [
      {
        question: "How much does DoDropp cost?",
        answer: "DoDropp offers a free plan that includes up to 5 custom lists, unlimited tasks per list, basic task types, and simple sharing. For more advanced features, our Pro Magic plan is just $3/month and includes unlimited lists, all task types (photos, files, text inputs), powerful automation rules, and custom sharing permissions to control who can view or edit your lists."
      },
      {
        question: "Can I try the Pro features before subscribing?",
        answer: "The free plan gives you a good taste of what DoDropp can do! While some advanced features like automation rules, special task types, and custom permissions are Pro-only, you can still create lists, share them, and organize basic tasks. This lets you experience the core functionality before deciding if the Pro Magic plan is right for your needs."
      },
      {
        question: "How do I switch between free and Pro plans?",
        answer: "You can upgrade to Pro Magic anytime from your account settings. If you decide you don't need all the magical features anymore, you can switch back to the free plan when your current billing period ends. Just remember, the free plan has a limit of 5 custom lists, so you might need to combine some lists or save your favorites if you have more than that."
      },
      {
        question: "Do I need to create an account to use shared lists?",
        answer: "Not at all! That's one of the magical things about DoDropp. When someone shares a list with you via our special share links, you can view and check off items without creating an account. However, if you want to create your own lists or use advanced features, you'll need to sign up (it only takes 30 seconds)."
      }
    ],
    "Features": [
      {
        question: "What are automation rules and how do they work?",
        answer: "Automation rules are like magic spells for your tasks! They allow tasks to appear, disappear, or get assigned automatically based on triggers you set. For example, you could make a 'Buy sunscreen' task appear automatically when someone checks off 'Book beach house' on your vacation planning list. Or create a recurring game night task that rotates snack duty to a different friend each week. These rules save you tons of time and keep everyone on the same page without constant reminders."
      },
      {
        question: "Can I organize my lists into categories or groups?",
        answer: "Absolutely! You can create collections to group related lists together. For example, you might have a 'Summer 2025' collection containing separate lists for 'Beach Trip', 'Backyard BBQ', and 'Camping Weekend'. Collections make it easy to keep everything organized as you create more lists for different activities and events."
      },
      {
        question: "Does DoDropp have reminders or notifications?",
        answer: "Yes! DoDropp can send optional notifications for upcoming deadlines, newly assigned tasks, and when someone completes an item on a shared list. You can customize your notification preferences to receive them via email, browser notifications, or both. Pro Magic users get additional options for scheduled reminders and custom notification rules."
      },
      {
        question: "Can I customize the appearance of my lists?",
        answer: "Definitely! You can choose from various colorful themes, add custom banners, and even use emojis in list and task names to make everything more visually appealing and easier to identify at a glance. Pro Magic users get access to additional themes and customization options."
      }
    ],
    "Task Types": [
      {
        question: "What different types of tasks can I create with DoDropp?",
        answer: "DoDropp goes way beyond basic checkboxes! You can create: 1) Standard checkbox tasks, 2) Photo upload tasks where people can snap and share images, 3) Text response tasks to gather ideas or preferences, 4) File upload tasks to share documents or spreadsheets, and 5) Automated tasks that trigger based on conditions. Each task type is designed to make group planning more interactive and useful, helping you collect exactly the information you need from your group while saving time with smart automation."
      },
      {
        question: "How do photo tasks work?",
        answer: "Photo tasks let your group share visual information easily. For example, for a home renovation project, someone could upload before/after photos of each room. Or for a camping trip, everyone could share pictures of gear they're bringing. Users can upload images directly from their device or take photos on the spot with their phone's camera. On the free plan, you can have up to 5 photo tasks per list, while Pro Magic users get unlimited photo tasks."
      },
      {
        question: "What's the purpose of text input tasks?",
        answer: "Text input tasks are perfect for gathering specific information from your group. Instead of a simple checkbox, people can enter responses like food preferences for a potluck, song suggestions for a playlist, or discussion questions for your book club. The responses are neatly organized and visible to everyone with access to the list, making it easy to collect and view everyone's input in one place."
      },
      {
        question: "How large can uploaded files be?",
        answer: "On the Pro Magic plan, each file upload task can accept files up to 100MB in size. This is plenty for most documents, spreadsheets, presentations, and high-quality photos. The free plan does not include file upload tasks. All uploaded files are securely stored and only accessible to people with permission to view your list."
      }
    ],
    "Sharing & Collaboration": [
      {
        question: "How do I share a list with my friends?",
        answer: "Sharing is super simple! Just click the 'Share' button on any list, and DoDropp generates a magic link you can send via text, email, or any messaging app. When your friends click the link, they can immediately see and interact with your list - no account creation or app downloads required! For Pro Magic users, there are additional options to set custom permissions or require a password for sensitive lists."
      },
      {
        question: "Can I control who can edit vs. just view my lists?",
        answer: "Yes, with the Pro Magic plan, you get granular permission controls. You can decide who can view, edit, or manage each list. For example, you might allow everyone to view your party planning list, but only let certain people add or edit tasks. The free plan includes basic sharing with standard permissions for all participants."
      },
      {
        question: "Do my friends need DoDropp accounts to use shared lists?",
        answer: "Not at all! Anyone with your share link can view and interact with your list without creating an account. However, if they want to create their own lists or receive notifications, they'll need to sign up. This hybrid approach makes it super convenient for casual participants while still offering more features for regular users."
      },
      {
        question: "Can multiple people edit a list at the same time?",
        answer: "Absolutely! DoDropp supports real-time collaboration, so multiple people can work on the same list simultaneously. You'll see updates from others as they happen, and there's never any conflict or overwrites when several people are checking things off or adding new items at the same time."
      }
    ],
    "Technical": [
      {
        question: "Is my data in DoDropp secure?",
        answer: "We take security seriously at DoDropp. All data is encrypted both in transit and at rest, and we use industry-standard security practices to protect your information. We never sell your data to third parties or use it for advertising. Our share links include randomized tokens that are practically impossible to guess, ensuring only the people you choose can access your lists."
      },
      {
        question: "Can I export my data from DoDropp?",
        answer: "Currently, DoDropp doesn't offer a built-in export feature. We're prioritizing core functionality first to ensure the best possible user experience. However, we're planning to add data export capabilities in a future update, which will allow you to download your lists as CSV files for use in Excel or Google Sheets. This feature is on our roadmap as we continue to develop and expand the platform based on user feedback."
      },
      {
        question: "What browsers and devices does DoDropp support?",
        answer: "DoDropp works on all modern browsers including Chrome, Firefox, Safari, and Edge. It's fully responsive and functions perfectly on smartphones, tablets, and computers of any size. We regularly test on the latest versions of all major browsers and operating systems to ensure compatibility."
      },
      {
        question: "Is there an API for integrating with other tools?",
        answer: "We're currently developing an API for Pro Magic users that will allow integration with calendar apps, messaging platforms, and other productivity tools. If you have specific integration needs, please contact our support team, as we're always interested in hearing about how we can make DoDropp work better with your favorite tools."
      }
    ]
  };

  // Get FAQs for the active category
  const activeFaqs = faqsByCategory[activeCategory as keyof typeof faqsByCategory];
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about DoDropp and how it can transform your group planning
          </motion.p>
        </div>
      </section>
      
      {/* Category Selection */}
      <section className="py-8 px-6 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeCategory === category.name 
                    ? category.color + ' shadow-md' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
                onClick={() => {
                  setActiveCategory(category.name);
                  setOpenIndex(null);
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Questions & Answers */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeFaqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  className={`w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none ${
                    openIndex === index ? 'bg-primary/5' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => toggleQuestion(index)}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-1 flex-shrink-0 text-lg ${categories.find(c => c.name === activeCategory)?.color}`}>
                      {categories.find(c => c.name === activeCategory)?.icon}
                    </span>
                    <span className="font-medium text-lg">{faq.question}</span>
                  </div>
                  <ChevronDownIcon 
                    className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 border-t border-gray-100 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Still Have Questions */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Still Have Questions?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We're here to help! Reach out to our friendly support team.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a 
              href="mailto:support@dodropp.com" 
              className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition flex items-center justify-center gap-2"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              Email Support
            </motion.a>
            <motion.a 
              href="https://app.dodropp.com/" 
              className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <SparklesIcon className="h-5 w-5" />
              Try DoDropp Free
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}