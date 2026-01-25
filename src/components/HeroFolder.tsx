import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import PolaroidPhoto from "./PolaroidPhoto";
import folderTexture from "@/assets/folder-texture-base.jpg";

export default function HeroFolder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 15]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 relative"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{ y, opacity, scale, rotateX }}
        className="w-full max-w-4xl relative"
      >
        {/* Folder tab */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute -top-5 md:-top-6 left-6 md:left-10 h-6 md:h-7 px-4 md:px-8 rounded-t-md"
          style={{
            backgroundColor: "hsl(35 40% 78%)",
            boxShadow: "0 -2px 10px -2px hsl(25 30% 15% / 0.15)",
          }}
        />

        {/* Main folder body */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-sm overflow-hidden"
          style={{
            backgroundColor: "hsl(35 45% 82%)",
            backgroundImage: `url(${folderTexture})`,
            backgroundSize: "cover",
            backgroundBlendMode: "soft-light",
            boxShadow: `
              0 25px 80px -20px hsl(25 30% 15% / 0.35),
              0 15px 35px -15px hsl(25 30% 15% / 0.25),
              inset 0 1px 0 hsl(35 50% 90%)
            `,
            border: "1px solid hsl(35 35% 75%)",
          }}
        >
          {/* Subtle paper texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              mixBlendMode: "multiply",
            }}
          />

          {/* Inner grid paper effect (like reference) */}
          <div
            className="absolute top-0 left-0 right-1/2 bottom-1/2 pointer-events-none opacity-[0.15]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(350 30% 70% / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(350 30% 70% / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 min-h-[500px] md:min-h-[550px]">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                {/* Decorative butterflies (like reference) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute top-16 left-8 md:left-16 text-3xl opacity-30"
                  style={{ filter: "grayscale(0.5)" }}
                >
                  🦋
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-28 left-20 md:left-32 text-xl opacity-25"
                  style={{ filter: "grayscale(0.5)" }}
                >
                  🦋
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-display text-7xl md:text-8xl lg:text-9xl mb-4 mt-20 md:mt-28"
                  style={{ color: "hsl(25 30% 20%)" }}
                >
                  Portfólio
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="font-elegant text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider uppercase"
                  style={{ color: "hsl(25 25% 25%)" }}
                >
                  Maryane Maia
                </motion.p>
              </div>

              {/* Polaroid photo */}
              <div className="md:absolute md:top-8 md:right-8 lg:right-12">
                <PolaroidPhoto />
              </div>
            </div>
          </div>

          {/* Corner fold effect */}
          <div
            className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20"
            style={{
              background: `linear-gradient(135deg, transparent 50%, hsl(25 30% 15% / 0.08) 50%)`,
            }}
          />
        </motion.div>

        {/* Stacked folder effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -bottom-2 left-2 right-2 h-4 rounded-b-sm -z-10"
          style={{
            backgroundColor: "hsl(35 35% 72%)",
            boxShadow: "0 4px 15px -5px hsl(25 30% 15% / 0.2)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute -bottom-4 left-4 right-4 h-4 rounded-b-sm -z-20"
          style={{
            backgroundColor: "hsl(35 30% 68%)",
            boxShadow: "0 4px 15px -5px hsl(25 30% 15% / 0.15)",
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-elegant text-sm text-muted-foreground">
          Role para explorar as pastas
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
