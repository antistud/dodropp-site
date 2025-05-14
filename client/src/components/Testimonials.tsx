import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "DoDropp has completely transformed how our marketing team manages campaigns. The automation features save us hours every week.",
    name: "Jessica Davis",
    title: "Marketing Director, TechCorp",
    avatar: "JD",
    avatarBg: "bg-blue-500"
  },
  {
    quote: "I use DoDropp to coordinate our soccer team's practice schedules and game preparations. Being able to share a simple link with everyone is amazing.",
    name: "Mike Kelsey",
    title: "Soccer Coach",
    avatar: "MK",
    avatarBg: "bg-green-500"
  },
  {
    quote: "As an event planner, I maintain dozens of checklists for different clients. DoDropp's Pro plan gives me unlimited lists with powerful automation.",
    name: "Sarah Lopez",
    title: "Event Coordinator",
    avatar: "SL",
    avatarBg: "bg-purple-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Loved by Thousands
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our users are saying about DoDropp
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-bold mr-3`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
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
