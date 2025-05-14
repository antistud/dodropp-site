import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? "shadow-lg py-2 bg-white/90" : "py-4 bg-white/80"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.a 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <SparklesIcon className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                DoDropp
              </span>
            </motion.a>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "✨ Features", href: "/#features" },
              { name: "🪄 How It Works", href: "/how-it-works" },
              { name: "💸 Pricing", href: "/pricing" },
              { name: "❓ FAQ", href: "/faq" }
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.a 
                  className={`text-gray-700 hover:text-primary font-medium transition ${location === item.href.replace(/^\/#/, '/') ? "text-primary" : ""}`}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {item.name}
                </motion.a>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.a 
              href="#" 
              className="hidden md:inline-block text-primary/80 hover:text-primary font-medium transition border-b-2 border-transparent hover:border-primary"
              whileHover={{ y: -2 }}
            >
              Login
            </motion.a>
            <Link href="/pricing">
              <motion.a 
                className="px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium transition shadow-md"
                whileHover={{ 
                  y: -4, 
                  scale: 1.05,
                  boxShadow: "0 15px 25px -5px rgba(147, 51, 234, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free! 🚀
              </motion.a>
            </Link>
            <motion.button 
              className="md:hidden text-primary" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 border-t border-primary/10 bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4 px-4">
              {[
                { name: "✨ Features", href: "/#features" },
                { name: "🪄 How It Works", href: "/how-it-works" },
                { name: "💸 Pricing", href: "/pricing" },
                { name: "❓ FAQ", href: "/faq" }
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <motion.a 
                    className={`text-gray-700 hover:text-primary font-medium transition ${location === item.href.replace(/^\/#/, '/') ? "text-primary" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                </Link>
              ))}
              <motion.a 
                href="#" 
                className="text-primary/80 hover:text-primary font-medium transition"
                whileHover={{ x: 5 }}
              >
                Login
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
