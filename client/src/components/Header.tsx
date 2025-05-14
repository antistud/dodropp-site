import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

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
    <header className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 ${scrolled ? "shadow-md py-3" : "py-4"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  DoDropp
                </span>
              </a>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features">
              <a className="text-gray-600 hover:text-primary font-medium transition">Features</a>
            </Link>
            <Link href="/#how-it-works">
              <a className="text-gray-600 hover:text-primary font-medium transition">How It Works</a>
            </Link>
            <Link href="/pricing">
              <a className={`text-gray-600 hover:text-primary font-medium transition ${location === "/pricing" ? "text-primary" : ""}`}>Pricing</a>
            </Link>
            <Link href="/#faq">
              <a className="text-gray-600 hover:text-primary font-medium transition">FAQ</a>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:inline-block text-gray-600 hover:text-primary font-medium transition">
              Login
            </a>
            <Link href="/pricing">
              <motion.a 
                className="px-5 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition shadow-md"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
              >
                Get Started
              </motion.a>
            </Link>
            <button 
              className="md:hidden text-gray-700" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 border-t border-gray-100"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              <Link href="/#features">
                <a className="text-gray-600 hover:text-primary font-medium transition" onClick={() => setMobileMenuOpen(false)}>
                  Features
                </a>
              </Link>
              <Link href="/#how-it-works">
                <a className="text-gray-600 hover:text-primary font-medium transition" onClick={() => setMobileMenuOpen(false)}>
                  How It Works
                </a>
              </Link>
              <Link href="/pricing">
                <a className="text-gray-600 hover:text-primary font-medium transition" onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </a>
              </Link>
              <Link href="/#faq">
                <a className="text-gray-600 hover:text-primary font-medium transition" onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </a>
              </Link>
              <a href="#" className="text-gray-600 hover:text-primary font-medium transition">
                Login
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
