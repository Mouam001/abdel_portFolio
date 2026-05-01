import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Shield } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Expériences", href: "#experience" },
    { name: "Projets", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A86B] to-[#008f5c] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-[#00A86B] opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
            </div>
            <a href="#" className="flex flex-col">
              <span className="text-[#1e293b] font-bold text-lg leading-tight">
                AbdelWahab Ben Said
              </span>
              <span className="text-[#64748b] text-xs">
                Ingénieur Sécurité | DevSecOps
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative text-[#475569] hover:text-[#00A86B] transition-colors duration-300 font-medium text-sm group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A86B] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[#00A86B] text-white rounded-xl hover:bg-[#008f5c] transition-all duration-300 font-medium text-sm shadow-lg shadow-[#00A86B]/20 hover:shadow-xl hover:shadow-[#00A86B]/30"
            >
              Me contacter
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#475569] hover:text-[#00A86B] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-[#e2e8f0] bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-[#475569] hover:text-[#00A86B] transition-colors duration-300 font-medium py-2 border-b border-[#f1f5f9] last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block w-full px-6 py-3 bg-[#00A86B] text-white rounded-xl hover:bg-[#008f5c] transition-all duration-300 font-medium text-center shadow-lg shadow-[#00A86B]/20"
              >
                Me contacter
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
