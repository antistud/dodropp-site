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
            {/* A laptop mockup showing the DoDropp interface */}
            <div className="relative">
              {/* A modern web interface showing a checklist application */}
              <motion.img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
                alt="DoDropp interface on laptop" 
                className="rounded-2xl shadow-2xl border-4 border-accent" 
                whileHover={{ rotate: 1, scale: 1.02 }}
              />
              
              {/* Floating task card for visual effect */}
              <motion.div 
                className="absolute top-10 -right-10 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block border-2 border-secondary"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ rotate: -2, scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800">Weekend Road Trip! 🚗</h3>
                  <span className="px-2 py-1 bg-purple-100 text-primary rounded-full text-xs">Shared</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" checked readOnly className="w-4 h-4 text-primary rounded mr-2" />
                    <span className="text-gray-500 line-through">Create playlist</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" checked readOnly className="w-4 h-4 text-primary rounded mr-2" />
                    <span className="text-gray-500 line-through">Pack snacks</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-primary rounded mr-2" />
                    <span className="text-gray-800">Check tire pressure</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  Auto-assigned to Alex when gas is purchased ⛽
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
