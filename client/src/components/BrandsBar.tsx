import { motion } from "framer-motion";

export default function BrandsBar() {
  // Community groups instead of corporate brands
  const communities = [
    { name: "Book Clubs", emoji: "📚" },
    { name: "Game Night Groups", emoji: "🎲" },
    { name: "Soccer Teams", emoji: "⚽" },
    { name: "Family Reunions", emoji: "👪" },
    { name: "Travel Buddies", emoji: "✈️" },
    { name: "Study Groups", emoji: "🎓" }
  ];
  
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-600 mb-8 text-lg">Used by amazing groups everywhere!</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              className="transition"
              whileHover={{ 
                scale: 1.1, 
                rotate: index % 2 === 0 ? 3 : -3,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="px-5 py-2 bg-white rounded-full shadow-md border-2 border-primary/20 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-2xl">{community.emoji}</span>
                <span className="text-gray-700 font-medium">{community.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
