import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Shared Checklists <br />
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                That Practically Run Themselves
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              DoDropp combines the simplicity of link sharing with the power of automated task management. Create, automate and share your checklists with anyone, anywhere.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}>
                <Link href="/pricing">
                  <a className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition shadow-lg">
                    Start for Free
                  </a>
                </Link>
              </motion.div>
              <Link href="#how-it-works">
                <a className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:border-primary hover:text-primary transition flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg> 
                  See How It Works
                </a>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {/* Avatars representing users */}
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-bold">JD</div>
                <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white font-bold">TM</div>
                <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white font-bold">KP</div>
                <div className="w-10 h-10 rounded-full bg-yellow-500 border-2 border-white flex items-center justify-center text-white font-bold">RS</div>
              </div>
              <div className="text-gray-600">
                <strong>1,000+</strong> teams already using DoDropp
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
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
                alt="DoDropp interface on laptop" 
                className="rounded-xl shadow-2xl border border-gray-200" 
              />
              
              {/* Floating task card for visual effect */}
              <motion.div 
                className="absolute top-10 -right-10 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800">Marketing Launch</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Shared</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" checked readOnly className="w-4 h-4 text-primary rounded mr-2" />
                    <span className="text-gray-500 line-through">Create campaign assets</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" checked readOnly className="w-4 h-4 text-primary rounded mr-2" />
                    <span className="text-gray-500 line-through">Schedule social posts</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-primary rounded mr-2" />
                    <span className="text-gray-800">Review analytics</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  Auto-assigned to Sarah when website goes live
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
