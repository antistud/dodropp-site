import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "DoDropp turned our weekly game night planning from chaos to fun! The auto-assignments mean no more arguing about who's bringing what snacks! 🎮",
    name: "Jamie Chen",
    title: "D&D Group Leader",
    avatar: "JC",
    avatarBg: "bg-primary"
  },
  {
    quote: "Our soccer team's practice schedule is so much easier with DoDropp! I just share one link with everyone, and the tasks automatically remind players what to bring. No more forgotten cleats!",
    name: "Mike Kelly",
    title: "Weekend Soccer Captain",
    avatar: "MK",
    avatarBg: "bg-secondary"
  },
  {
    quote: "I use DoDropp for planning all our family trips! The automatic packing lists that adapt based on destination are MAGICAL. My kids even compete to check off their items first! ✨",
    name: "Sara Lopez",
    title: "Family Adventures Coordinator",
    avatar: "SL",
    avatarBg: "bg-accent"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Friends & Family Love It! 💜
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how DoDropp is making everyday adventures more fun
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-xl border-2 border-primary/10 bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      stroke="none"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 2,
                        delay: i * 0.2
                      }}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </motion.svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-bold mr-3 shadow-md`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-medium text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
