import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import folderTexture from "@/assets/folder-texture-base.jpg";
import paperTexture from "@/assets/paper-texture-sable.jpg";

interface FolderCardProps {
  children: ReactNode;
  color: "sable" | "marine" | "piscine" | "chili" | "melon";
  index: number;
  id?: string;
}

const colorStyles = {
  sable: {
    bg: "hsl(35 42% 80%)",
    tab: "hsl(35 38% 75%)",
    text: "hsl(25 28% 16%)",
    border: "hsl(35 32% 68%)",
    overlay: "hsl(35 38% 78% / 0.75)",
    textLight: false,
  },
  marine: {
    bg: "hsl(210 42% 38%)",
    tab: "hsl(210 38% 32%)",
    text: "hsl(210 25% 96%)",
    border: "hsl(210 32% 30%)",
    overlay: "hsl(210 38% 35% / 0.88)",
    textLight: true,
  },
  piscine: {
    bg: "hsl(178 38% 48%)",
    tab: "hsl(178 34% 42%)",
    text: "hsl(178 18% 98%)",
    border: "hsl(178 28% 40%)",
    overlay: "hsl(178 34% 45% / 0.88)",
    textLight: true,
  },
  chili: {
    bg: "hsl(12 58% 48%)",
    tab: "hsl(12 52% 42%)",
    text: "hsl(12 18% 98%)",
    border: "hsl(12 48% 40%)",
    overlay: "hsl(12 54% 45% / 0.88)",
    textLight: true,
  },
  melon: {
    bg: "hsl(22 65% 78%)",
    tab: "hsl(22 58% 72%)",
    text: "hsl(22 35% 18%)",
    border: "hsl(22 48% 65%)",
    overlay: "hsl(22 60% 75% / 0.82)",
    textLight: false,
  },
};

export default function FolderCard({ children, color, index, id }: FolderCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax and depth effects - smoother transitions
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const rotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [6, 0, 0, -6]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.96, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.75, 1, 1, 0.75]);

  const styles = colorStyles[color];

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 md:py-20 px-4"
      style={{ perspective: "1400px" }}
    >
      <motion.div
        style={{
          y,
          rotateX,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-[960px] relative mx-auto"
      >
        {/* Stacked papers behind (depth) */}
        <div
          className="absolute -bottom-2 left-4 right-4 h-5 rounded-b-sm -z-10"
          style={{
            backgroundColor: color === "sable" 
              ? `hsl(35 30% ${72 - index * 2}%)` 
              : `hsl(${color === "marine" ? "210" : color === "piscine" ? "178" : color === "chili" ? "12" : "22"} 25% ${48 - index * 2}%)`,
            boxShadow: "0 3px 10px -4px hsl(25 30% 15% / 0.18)",
          }}
        />
        <div
          className="absolute -bottom-4 left-7 right-7 h-5 rounded-b-sm -z-20"
          style={{
            backgroundColor: color === "sable" 
              ? `hsl(35 25% ${68 - index * 2}%)` 
              : `hsl(${color === "marine" ? "210" : color === "piscine" ? "178" : color === "chili" ? "12" : "22"} 20% ${44 - index * 2}%)`,
            boxShadow: "0 3px 10px -4px hsl(25 30% 15% / 0.14)",
          }}
        />

        {/* Folder tab */}
        <div
          className="absolute -top-4 md:-top-5 left-4 md:left-8 h-4 md:h-5 px-5 md:px-8 rounded-t-md z-10"
          style={{
            backgroundColor: styles.tab,
            boxShadow: "0 -1px 5px -2px hsl(25 30% 15% / 0.1)",
          }}
        />

        {/* Main folder body */}
        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            backgroundColor: styles.bg,
            backgroundImage: color === "sable" ? `url(${folderTexture})` : undefined,
            backgroundSize: "cover",
            boxShadow: `
              0 22px 55px -12px hsl(25 30% 15% / 0.32),
              0 10px 22px -8px hsl(25 30% 15% / 0.18),
              0 4px 10px -4px hsl(25 30% 15% / 0.12),
              inset 0 1px 0 ${styles.border}
            `,
            border: `1px solid ${styles.border}`,
          }}
        >
          {/* Color overlay with texture blend */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: styles.overlay }}
          />

          {/* Paper texture for realism */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${paperTexture})`,
              backgroundSize: "cover",
              opacity: color === "sable" ? 0.15 : 0.08,
              mixBlendMode: "multiply",
            }}
          />

          {/* Noise grain */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              mixBlendMode: "multiply",
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 p-6 md:p-10 lg:p-12"
            style={{ color: styles.text }}
          >
            {children}
          </div>

          {/* Corner fold */}
          <div
            className="absolute bottom-0 right-0 w-10 h-10 md:w-12 md:h-12"
            style={{
              background: `linear-gradient(135deg, transparent 50%, hsl(25 30% 15% / 0.06) 50%)`,
            }}
          />

          {/* Inner edge shadow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 -2px 8px -4px hsl(25 30% 15% / 0.12)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
