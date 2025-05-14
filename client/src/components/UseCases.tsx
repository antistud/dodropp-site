import { motion } from "framer-motion";

const useCases = [
  {
    title: "Marketing Teams",
    description: "Marketing teams use DoDropp to coordinate campaign launches, track content calendars, and ensure nothing falls through the cracks.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Marketing team collaboration",
    tags: ["Campaign Management", "Content Calendar", "Social Media"],
    tagColor: "bg-blue-100 text-blue-800"
  },
  {
    title: "Event Planners",
    description: "Event planners create checklists for each event and share them with vendors, venues, and clients to ensure everything runs smoothly.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Event planning team",
    tags: ["Vendor Coordination", "Timeline Planning", "Day-of Checklist"],
    tagColor: "bg-purple-100 text-purple-800"
  }
];

export default function UseCases() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            One Tool, Endless Possibilities
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how different teams are using DoDropp to stay organized
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img src={useCase.image} alt={useCase.alt} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 ${useCase.tagColor} rounded-full text-sm`}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
