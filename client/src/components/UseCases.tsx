import { motion } from "framer-motion";

const useCases = [
  {
    title: "Friend Trip Planning! 🏖️",
    description: "Planning a weekend getaway? Create a DoDropp list with photo tasks to share vacation spot ideas, file uploads for reservations, and text input tasks to gather everyone's availability!",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Friends on a road trip",
    tags: ["Photo Tasks", "File Sharing", "Text Inputs"],
    tagColor: "bg-primary/20 text-primary",
    emoji: "🚗"
  },
  {
    title: "Game Night Squad! 🎲",
    description: "Use DoDropp to organize weekly game nights with text input tasks for food preferences, photo tasks to share game options, and automated task assignments that rotate snack duty each week!",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Friends playing board games",
    tags: ["Text Responses", "Automated Rotation", "Photo Sharing"],
    tagColor: "bg-secondary/20 text-secondary",
    emoji: "🎮"
  },
  {
    title: "Book Club Organizer! 📚",
    description: "Keep your book club on the same page with file upload tasks for sharing PDFs, text input for discussion questions, and photo tasks for sharing reading nooks or favorite coffee shops!",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Book club meeting",
    tags: ["Document Sharing", "Discussion Questions", "Reading Lists"],
    tagColor: "bg-violet-100 text-violet-700",
    emoji: "📖"
  },
  {
    title: "Family Vacation Magic! ✨",
    description: "Create packing lists with photo tasks to show exactly which items to bring, file uploads for important travel documents, and text inputs to gather everyone's activity preferences!",
    image: "https://plus.unsplash.com/premium_photo-1663133679087-bc5deb50ab00?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    alt: "Family enjoying beach vacation with colorful umbrellas",
    tags: ["Visual Packing Lists", "Document Storage", "Activity Planning"],
    tagColor: "bg-accent/20 text-accent-foreground",
    emoji: "🧳"
  },
  {
    title: "Sports Team Organizer! ⚽",
    description: "Coordinate your team with photo tasks for field layouts, file uploads for permission slips, and automated rotation of who brings refreshments to each game!",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Recreational sports team",
    tags: ["Image Sharing", "Document Collection", "Automated Assignments"],
    tagColor: "bg-green-100 text-green-800",
    emoji: "🏆"
  }
];

export default function UseCases() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Creative Ways to Use DoDropp! 🎉
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how friend groups, families, and hobby clubs are thriving with automated checklists
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="relative">
                <img src={useCase.image} alt={useCase.alt} className="w-full h-60 object-cover" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {useCase.emoji}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, i) => (
                    <motion.span 
                      key={i} 
                      className={`px-3 py-1 ${useCase.tagColor} rounded-full text-sm`}
                      whileHover={{ y: -2, x: 2, scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-xl text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            What will you organize with DoDropp? ✨
          </motion.p>
          <motion.a 
            href="/pricing" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium transition shadow-md"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your First List Free
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
