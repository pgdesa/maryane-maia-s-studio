import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Quem sou eu", href: "/quem-sou-eu" },
  { label: "Meus Trabalhos", href: "/meus-trabalhos" },
  { label: "Artigos", href: "/artigos" },
  { label: "Fale Comigo", href: "/fale-comigo" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Fechar menu mobile ao trocar rota
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        backgroundColor: "hsl(28 32% 40% / 0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid hsl(30 25% 50% / 0.3)"
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="font-display text-2xl md:text-3xl font-bold tracking-wide hover:opacity-85 transition-opacity cursor-pointer"
            style={{ 
              color: "hsl(35 40% 90%)",
              textShadow: "1px 1px 3px hsl(25 30% 10% / 0.4)"
            }}
            }}
          >
            Maryane Maia
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-elegant text-base lg:text-lg font-medium transition-all duration-300 relative group"
                style={{ color: "hsl(35 30% 88%)" }}
              >
                {link.label}
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ backgroundColor: "hsl(35 40% 85%)" }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-colors text-ink-soft"
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
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      to={link.href}
                      className="font-elegant text-lg font-medium py-1.5 block text-ink-soft"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
