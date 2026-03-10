import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import PolaroidPhoto from "./PolaroidPhoto";
import folderManila from "@/assets/folder-manila.png";

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
      className="min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-12 px-4 relative"
      style={{ perspective: "1600px" }}
    >
      <motion.div
        style={{ y, opacity, scale, rotateX }}
        className="w-full max-w-[900px] relative mx-auto"
      >
        {/* Main folder — real manila folder image */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
          style={{
            filter: "drop-shadow(0 20px 50px hsl(25 30% 15% / 0.35)) drop-shadow(0 8px 16px hsl(25 30% 15% / 0.2))",
          }}
        >
          {/* Folder image */}
          <img
            src={folderManila}
            alt="Pasta de portfólio"
            className="w-full h-auto"
          />

          {/* Title overlay — centered on folder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center leading-tight"
              style={{
                color: "hsl(25 35% 28%)",
                textShadow: "1px 2px 4px hsl(25 30% 15% / 0.08)",
              }}
            >
              <span className="block">Portfólio</span>
              <span className="block mt-1 md:mt-2">Maryane Maia</span>
            </motion.h1>
          </div>

          {/* Polaroid photo — top right of folder */}
          <div className="absolute top-2 right-4 md:top-4 md:right-8 lg:top-6 lg:right-12 z-20">
            <PolaroidPhoto />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span 
          className="font-elegant text-sm tracking-wide opacity-80"
          style={{ color: "hsl(35 30% 85%)" }}
        >
          Role para explorar os arquivos
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-70" style={{ color: "hsl(35 30% 85%)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
