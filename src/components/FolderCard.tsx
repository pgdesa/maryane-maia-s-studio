import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import folderTexture from "@/assets/folder-texture-base.jpg";

interface FolderCardProps {
  children: ReactNode;
  color: "sable" | "marine" | "piscine" | "chili" | "melon";
  index: number;
  id?: string;
}

const colorStyles = {
  sable: {
    bg: "hsl(35 45% 82%)",
    tab: "hsl(35 40% 78%)",
    text: "hsl(25 30% 15%)",
    border: "hsl(35 35% 70%)",
    overlay: "hsl(35 40% 75% / 0.85)",
  },
  marine: {
    bg: "hsl(210 45% 35%)",
    tab: "hsl(210 40% 30%)",
    text: "hsl(210 30% 95%)",
    border: "hsl(210 35% 28%)",
    overlay: "hsl(210 40% 32% / 0.9)",
  },
  piscine: {
    bg: "hsl(180 40% 45%)",
    tab: "hsl(180 35% 40%)",
    text: "hsl(180 20% 98%)",
    border: "hsl(180 30% 38%)",
    overlay: "hsl(180 35% 42% / 0.9)",
  },
  chili: {
    bg: "hsl(10 65% 45%)",
    tab: "hsl(10 60% 40%)",
    text: "hsl(10 20% 98%)",
    border: "hsl(10 55% 38%)",
    overlay: "hsl(10 60% 42% / 0.9)",
  },
  melon: {
    bg: "hsl(20 70% 75%)",
    tab: "hsl(20 65% 70%)",
    text: "hsl(20 40% 18%)",
    border: "hsl(20 55% 65%)",
    overlay: "hsl(20 65% 72% / 0.9)",
  },
};

export default function FolderCard({ children, color, index, id }: FolderCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax and depth effects
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 0, 0, -8]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);

  const styles = colorStyles[color];

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 md:py-28 px-4"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          y,
          rotateX,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-4xl relative"
      >
        {/* Folder tab */}
        <div
          className="absolute -top-5 md:-top-6 left-6 md:left-10 h-6 md:h-7 px-4 md:px-8 rounded-t-md"
          style={{
            backgroundColor: styles.tab,
            boxShadow: "0 -2px 10px -2px hsl(25 30% 15% / 0.15)",
          }}
        />

        {/* Main folder body */}
        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            backgroundColor: styles.bg,
            backgroundImage: color === "sable" ? `url(${folderTexture})` : undefined,
            backgroundSize: "cover",
            backgroundBlendMode: "soft-light",
            boxShadow: `
              0 20px 60px -15px hsl(25 30% 15% / 0.3),
              0 10px 25px -10px hsl(25 30% 15% / 0.2),
              inset 0 1px 0 ${styles.border}
            `,
            border: `1px solid ${styles.border}`,
          }}
        >
          {/* Color overlay for non-sable folders */}
          {color !== "sable" && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: styles.overlay }}
            />
          )}

          {/* Subtle paper texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              mixBlendMode: "multiply",
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 p-8 md:p-12 lg:p-16"
            style={{ color: styles.text }}
          >
            {children}
          </div>

          {/* Corner fold effect */}
          <div
            className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16"
            style={{
              background: `linear-gradient(135deg, transparent 50%, hsl(25 30% 15% / 0.08) 50%)`,
            }}
          />
        </div>

        {/* Stacked folder effect (shadow layers) */}
        {index > 0 && (
          <>
            <div
              className="absolute -bottom-2 left-2 right-2 h-4 rounded-b-sm -z-10"
              style={{
                backgroundColor: `hsl(35 35% ${75 - index * 3}%)`,
                boxShadow: "0 4px 15px -5px hsl(25 30% 15% / 0.2)",
              }}
            />
            <div
              className="absolute -bottom-4 left-4 right-4 h-4 rounded-b-sm -z-20"
              style={{
                backgroundColor: `hsl(35 30% ${70 - index * 3}%)`,
                boxShadow: "0 4px 15px -5px hsl(25 30% 15% / 0.15)",
              }}
            />
          </>
        )}
      </motion.div>
    </section>
  );
}
