import { motion } from "framer-motion";

export default function BrandsBar() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 mb-8">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {["ACME Inc.", "Globex", "TechCore", "FutureCorp", "Initech"].map((brand, index) => (
            <motion.div
              key={index}
              className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-8 text-gray-400 font-bold text-xl">{brand}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
