import { motion } from "framer-motion";

const useCases = [
  {
    title: "Friend Trip Planning! 🏖️",
    description: "Planning a weekend getaway or road trip? Create a DoDropp list that auto-assigns everyone different tasks, from booking hotels to making the perfect playlist!",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Friends on a road trip",
    tags: ["Travel Planning", "Packing Lists", "Road Trip Essentials"],
    tagColor: "bg-primary/20 text-primary",
    emoji: "🚗"
  },
  {
    title: "Game Night Squad! 🎲",
    description: "Use DoDropp to organize your weekly game nights - from who's bringing which games to snack assignments that rotate automatically each week!",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Friends playing board games",
    tags: ["Game Rotation", "Snack Schedule", "Player Coordination"],
    tagColor: "bg-secondary/20 text-secondary",
    emoji: "🎮"
  },
  {
    title: "Family Vacation Magic! ✨",
    description: "Create packing lists for the whole family that adapt based on destination - beach gear appears automatically for coastal trips, and snow gear for mountain stays!",
    image: "https://images.unsplash.com/photo-1607582544916-f9d71a0a6ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Family on vacation",
    tags: ["Family Organization", "Trip Planning", "Packing Help"],
    tagColor: "bg-accent/20 text-accent-foreground",
    emoji: "🧳"
  },
  {
    title: "Sports Team Scheduler! ⚽",
    description: "Coordinate your recreational sports team with practice reminders, game schedules, and automatic equipment assignments for each player!",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Recreational sports team",
    tags: ["Practice Reminders", "Equipment Tracking", "Game Planning"],
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
