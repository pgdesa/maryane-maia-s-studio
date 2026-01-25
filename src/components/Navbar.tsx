import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import paperTexture from "@/assets/paper-texture-sable.jpg";

const navLinks = [
  { label: "Quem sou eu", href: "#quem-sou-eu" },
  { label: "Meus Trabalhos", href: "#trabalhos" },
  { label: "Artigos", href: "#artigos" },
  { label: "Fale Comigo", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        backgroundColor: "hsl(28 32% 91% / 0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid hsl(30 25% 82% / 0.5)"
      }}
    >
      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: "cover",
          mixBlendMode: "multiply",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="font-display text-2xl md:text-3xl font-bold tracking-wide hover:opacity-85 transition-opacity cursor-pointer"
            style={{ 
              color: "hsl(45 70% 48%)",
              textShadow: "1px 1px 2px hsl(25 30% 15% / 0.15)"
            }}
          >
            Mary Maia
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="font-elegant text-base lg:text-lg font-medium transition-all duration-300 relative group"
                style={{ color: "hsl(25 25% 22%)" }}
              >
                {link.label}
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ backgroundColor: "hsl(25 30% 30%)" }}
                />
              </a>
            ))}
            
            {/* Signature - Maryane Maia with Chili color */}
            <span 
              className="font-elegant text-sm lg:text-base font-semibold tracking-wide ml-4 lg:ml-6 pl-4 lg:pl-6"
              style={{ 
                color: "hsl(12 55% 45%)",
                borderLeft: "1px solid hsl(30 25% 75% / 0.6)"
              }}
            >
              Maryane Maia
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-colors"
            style={{ color: "hsl(25 25% 25%)" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => setIsOpen(false)}
                    className="font-elegant text-lg font-medium py-1.5"
                    style={{ color: "hsl(25 25% 22%)" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
