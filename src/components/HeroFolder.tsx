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
      style={{ perspective: "1600px" }}
    >
      <motion.div
        style={{ y, opacity, scale, rotateX }}
        className="w-full max-w-[900px] relative mx-auto"
      >
        {/* Multiple stacked papers behind folder for 3D depth */}
        <div
          className="absolute -bottom-1 left-4 right-4 h-3 rounded-b-sm -z-10"
          style={{
            backgroundColor: "hsl(35 35% 76%)",
            boxShadow: "0 2px 6px -2px hsl(25 30% 15% / 0.12)",
          }}
        />
        <div
          className="absolute -bottom-2.5 left-6 right-6 h-3 rounded-b-sm -z-20"
          style={{
            backgroundColor: "hsl(35 30% 72%)",
            boxShadow: "0 2px 6px -2px hsl(25 30% 15% / 0.1)",
          }}
        />
        <div
          className="absolute -bottom-4 left-8 right-8 h-3 rounded-b-sm -z-30"
          style={{
            backgroundColor: "hsl(35 25% 68%)",
            boxShadow: "0 3px 8px -3px hsl(25 30% 15% / 0.08)",
          }}
        />

        {/* Folder tab - realistic with gradient and texture */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -top-5 md:-top-6 left-6 md:left-10 h-5 md:h-6 px-6 md:px-10 rounded-t-md z-10"
          style={{
            backgroundColor: "hsl(35 38% 74%)",
            backgroundImage: "linear-gradient(180deg, hsl(35 45% 82%) 0%, hsl(35 38% 74%) 40%, hsl(35 35% 70%) 100%)",
            boxShadow: `
              0 -2px 6px -2px hsl(25 30% 15% / 0.08),
              inset 0 1px 0 hsl(35 50% 88%),
              inset 0 -1px 2px hsl(35 30% 55% / 0.15)
            `,
            border: "1px solid hsl(35 32% 68%)",
            borderBottom: "none",
          }}
        >
          {/* Tab texture */}
          <div
            className="absolute inset-0 rounded-t-md pointer-events-none"
            style={{
              backgroundImage: `url(${paperTexture})`,
              backgroundSize: "cover",
              opacity: 0.1,
              mixBlendMode: "multiply",
            }}
          />
          
          {/* Tab label */}
          <span
            className="relative z-10 flex items-center justify-center h-full font-elegant text-[10px] md:text-xs font-medium tracking-wide uppercase whitespace-nowrap"
            style={{ 
              color: "hsl(25 30% 25% / 0.7)",
              textShadow: "0 1px 0 hsl(0 0% 100% / 0.4)",
            }}
          >
            Portfólio
          </span>
        </motion.div>

        {/* Main folder body with 3D depth and realism */}
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
              0 28px 65px -18px hsl(25 30% 15% / 0.4),
              0 14px 30px -12px hsl(25 30% 15% / 0.24),
              0 6px 14px -6px hsl(25 30% 15% / 0.16),
              0 2px 5px -2px hsl(25 30% 15% / 0.1),
              inset 0 1px 0 hsl(0 0% 100% / 0.15)
            `,
            border: "1px solid hsl(35 32% 68%)",
          }}
        >
          {/* Base folder color with texture blend */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: "hsl(35 42% 80% / 0.85)",
              backgroundBlendMode: "multiply",
            }}
          />

          {/* Paper texture overlay for ultra-realism */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${paperTexture})`,
              backgroundSize: "cover",
              opacity: 0.15,
              mixBlendMode: "multiply",
            }}
          />

          {/* Inner grid paper effect (top-left corner) */}
          <div
            className="absolute top-0 left-0 w-1/4 h-1/4 pointer-events-none opacity-[0.15]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(350 35% 72% / 0.4) 1px, transparent 1px),
                linear-gradient(90deg, hsl(350 35% 72% / 0.4) 1px, transparent 1px)
              `,
              backgroundSize: "14px 14px",
              borderRight: "1px solid hsl(350 30% 75% / 0.2)",
              borderBottom: "1px solid hsl(350 30% 75% / 0.2)",
            }}
          />

          {/* Subtle grain noise for paper feel */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              mixBlendMode: "multiply",
            }}
          />

          {/* Top edge highlight for 3D volume */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 5%, hsl(35 50% 88%) 20%, hsl(35 50% 88%) 80%, transparent 95%)",
              opacity: 0.5,
            }}
          />

          {/* Left edge highlight */}
          <div
            className="absolute top-0 left-0 bottom-0 w-[2px] pointer-events-none"
            style={{
              background: "linear-gradient(180deg, hsl(35 50% 88%) 0%, transparent 60%)",
              opacity: 0.4,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10 lg:p-12 min-h-[380px] md:min-h-[420px]">
            {/* Polaroid photo - positioned top right */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-20">
              <PolaroidPhoto />
            </div>

            {/* Centered title */}
            <div className="flex flex-col items-center justify-center h-full min-h-[320px] md:min-h-[360px]">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center leading-tight"
                style={{ 
                  color: "hsl(25 30% 16%)",
                  textShadow: "1px 2px 4px hsl(25 30% 15% / 0.1)"
                }}
              >
                <span className="block">Portfólio</span>
                <span className="block mt-1 md:mt-2">Maryane Maia</span>
              </motion.h1>
            </div>
          </div>

          {/* Corner fold with gradient */}
          <div
            className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10"
            style={{
              background: "linear-gradient(135deg, transparent 45%, hsl(25 30% 15% / 0.05) 50%, hsl(25 30% 15% / 0.08) 100%)",
            }}
          />

          {/* Opposite corner subtle wear */}
          <div
            className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8"
            style={{
              background: "linear-gradient(315deg, transparent 60%, hsl(0 0% 100% / 0.05) 100%)",
            }}
          />

          {/* Inner edge shadows for depth (ambient occlusion) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: `
                inset 0 -3px 10px -5px hsl(35 30% 50% / 0.15),
                inset -3px 0 10px -5px hsl(35 30% 50% / 0.12),
                inset 3px 0 10px -5px hsl(0 0% 100% / 0.08)
              `,
            }}
          />
          
          {/* Bottom line for "sitting on surface" effect */}
          <div
            className="absolute bottom-0 left-2 right-2 h-[1px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(35 32% 65%), transparent)",
              opacity: 0.5,
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
