import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import PolaroidPhoto from "./PolaroidPhoto";
import folderTexture from "@/assets/folder-texture-base.jpg";
import paperTexture from "@/assets/paper-texture-sable.jpg";

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
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative"
      style={{ perspective: "1400px" }}
    >
      <motion.div
        style={{ y, opacity, scale, rotateX }}
        className="w-full max-w-[960px] relative mx-auto"
      >
        {/* Stacked papers behind folder (depth layers) */}
        <div
          className="absolute -bottom-3 left-6 right-6 h-6 rounded-b-sm -z-30"
          style={{
            backgroundColor: "hsl(35 30% 78%)",
            boxShadow: "0 4px 12px -4px hsl(25 30% 15% / 0.15)",
          }}
        />
        <div
          className="absolute -bottom-6 left-10 right-10 h-6 rounded-b-sm -z-40"
          style={{
            backgroundColor: "hsl(35 25% 74%)",
            boxShadow: "0 4px 12px -4px hsl(25 30% 15% / 0.12)",
          }}
        />

        {/* Folder tab */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -top-5 left-4 md:left-8 h-5 md:h-6 px-6 md:px-10 rounded-t-md z-10"
          style={{
            backgroundColor: "hsl(35 38% 76%)",
            boxShadow: "0 -1px 6px -2px hsl(25 30% 15% / 0.12)",
          }}
        />

        {/* Main folder body */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-sm overflow-hidden"
          style={{
            backgroundImage: `url(${folderTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: `
              0 25px 60px -15px hsl(25 30% 15% / 0.35),
              0 12px 25px -10px hsl(25 30% 15% / 0.2),
              0 4px 10px -4px hsl(25 30% 15% / 0.15),
              inset 0 1px 0 hsl(35 50% 92% / 0.5)
            `,
            border: "1px solid hsl(35 32% 72%)",
          }}
        >
          {/* Base folder color with texture blend */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: "hsl(35 42% 83% / 0.88)",
              backgroundBlendMode: "multiply",
            }}
          />

          {/* Paper texture overlay for realism */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${paperTexture})`,
              backgroundSize: "cover",
              opacity: 0.12,
              mixBlendMode: "multiply",
            }}
          />

          {/* Inner grid paper effect (top-left corner like reference) */}
          <div
            className="absolute top-0 left-0 w-1/3 h-1/3 pointer-events-none opacity-[0.2]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(350 35% 72% / 0.4) 1px, transparent 1px),
                linear-gradient(90deg, hsl(350 35% 72% / 0.4) 1px, transparent 1px)
              `,
              backgroundSize: "16px 16px",
              borderRight: "1px solid hsl(350 30% 75% / 0.25)",
              borderBottom: "1px solid hsl(350 30% 75% / 0.25)",
            }}
          />

          {/* Noise texture for ultra-realism */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              mixBlendMode: "multiply",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10 lg:p-12 min-h-[400px] md:min-h-[440px]">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              {/* Text content */}
              <div className="flex-1 text-center md:text-left pt-8 md:pt-16">
                {/* Decorative butterflies */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute top-14 left-6 md:left-12 text-2xl md:text-3xl"
                  style={{ filter: "grayscale(0.4) sepia(0.2)", opacity: 0.35 }}
                >
                  🦋
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute top-24 left-16 md:left-28 text-lg md:text-xl"
                  style={{ filter: "grayscale(0.4) sepia(0.2)", opacity: 0.28 }}
                >
                  🦋
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-display text-6xl md:text-7xl lg:text-8xl mb-3"
                  style={{ 
                    color: "hsl(25 28% 18%)",
                    textShadow: "1px 2px 3px hsl(25 30% 15% / 0.08)"
                  }}
                >
                  Portfólio
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="font-elegant text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "hsl(25 22% 22%)" }}
                >
                  Maryane Maia
                </motion.p>
              </div>

              {/* Polaroid photo - positioned top right */}
              <div className="md:absolute md:top-4 md:right-4 lg:top-6 lg:right-6">
                <PolaroidPhoto />
              </div>
            </div>
          </div>

          {/* Corner fold effect */}
          <div
            className="absolute bottom-0 right-0 w-10 h-10 md:w-14 md:h-14"
            style={{
              background: `linear-gradient(135deg, transparent 50%, hsl(25 30% 15% / 0.06) 50%)`,
            }}
          />

          {/* Edge shadow for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 -2px 8px -4px hsl(25 30% 15% / 0.15)",
            }}
          />
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
          className="font-elegant text-sm tracking-wide"
          style={{ color: "hsl(25 20% 40%)" }}
        >
          Role para explorar as pastas
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: "hsl(25 20% 45%)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
