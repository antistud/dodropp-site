import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Supercharged Checklists <br />
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                That Make Group Planning Effortless!
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Share one link. Add photos, files, and text responses. Watch tasks complete themselves. ✨
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -5, rotate: -1, scale: 1.03, boxShadow: "0 15px 30px -5px rgba(147, 51, 234, 0.5)" }}>
                <a href="https://app.dodropp.com/" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition shadow-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>
                  Create Your First List - Free! 🚀
                </a>
              </motion.div>
              <motion.div whileHover={{ y: -3, rotate: 1, scale: 1.02 }}>
                <Link href="#how-it-works">
                  <a className="px-8 py-3 border-2 border-secondary text-secondary rounded-full font-medium hover:bg-secondary/10 transition flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg> 
                    See the Magic ✨
                  </a>
                </Link>
              </motion.div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {/* Avatars representing users */}
                <div className="w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white font-bold">JD</div>
                <div className="w-10 h-10 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-white font-bold">TM</div>
                <div className="w-10 h-10 rounded-full bg-accent border-2 border-white flex items-center justify-center text-white font-bold">KP</div>
                <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-white font-bold">RS</div>
              </div>
              <div className="text-gray-600">
                Perfect for friend groups, families, and clubs!
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Floating task card showcase */}
            <div className="relative flex justify-center items-center h-full">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-xl max-w-sm border-2 border-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ rotate: -1, scale: 1.03 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-gray-800">Weekend Road Trip! 🚗</h3>
                  <span className="px-2 py-1 bg-purple-100 text-primary rounded-full text-xs">Shared</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input type="checkbox" checked readOnly className="w-5 h-5 text-primary rounded mr-3" />
                    <span className="text-gray-500 line-through text-lg">Create road trip playlist 🎵</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" checked readOnly className="w-5 h-5 text-primary rounded mr-3" />
                    <span className="text-gray-500 line-through text-lg">Pack snacks and drinks 🥨</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-primary rounded mr-3" />
                    <span className="text-gray-800 text-lg">Check tire pressure ✓</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-primary rounded mr-3" />
                    <span className="text-gray-800 text-lg">Fill up gas tank ⛽</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-primary rounded mr-3" />
                    <span className="text-gray-800 text-lg">Charge phone battery 🔋</span>
                  </div>
                </div>
                <div className="text-sm text-primary font-medium mt-4 bg-primary/5 p-2 rounded">
                  Auto-assigned to Alex when gas is purchased ✨
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
