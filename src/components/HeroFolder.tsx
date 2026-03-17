import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import folderHero from "@/assets/folder-hero.png";

export default function HeroFolder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 md:py-20 px-4"
      style={{ perspective: "1600px" }}
    >
      <motion.div
        style={{ y, opacity, scale, rotateX, transformStyle: "preserve-3d" }}
        className="w-full max-w-[900px] relative mx-auto flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full"
          style={{
            filter: "drop-shadow(0 18px 40px hsl(25 30% 15% / 0.30)) drop-shadow(0 6px 12px hsl(25 30% 15% / 0.18))",
          }}
        >
          <img
            src={folderHero}
            alt="Pasta de portfólio Maryane Maia"
            className="w-full h-auto mx-auto block"
            loading="eager"
            decoding="async"
          />

          {/* Content overlay — same structure as FolderCard */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 lg:p-12"
            style={{ color: "hsl(25 28% 16%)" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-center leading-tight drop-shadow-sm"
            >
              <span className="block">Portfólio</span>
              <span className="block mt-1 md:mt-2">Maryane Maia</span>
            </motion.h1>

            {/* "Role para baixo" inside the folder */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-8 md:mt-12 flex flex-col items-center gap-1.5"
            >
              <span className="font-elegant text-sm md:text-base tracking-wide opacity-70">
                Role para explorar os arquivos
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5 opacity-60" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
