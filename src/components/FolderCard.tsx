import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import folderTexture from "@/assets/folder-texture-base.jpg";
import paperTexture from "@/assets/paper-texture-sable.jpg";

interface FolderCardProps {
  children: ReactNode;
  color: "sable" | "marine" | "piscine" | "chili" | "melon";
  index: number;
  id?: string;
  title?: string;
}

const colorStyles = {
  sable: {
    bg: "hsl(35 42% 78%)",
    tab: "hsl(35 38% 72%)",
    tabHighlight: "hsl(35 45% 82%)",
    text: "hsl(25 28% 16%)",
    border: "hsl(35 32% 65%)",
    overlay: "hsl(35 38% 75% / 0.72)",
    innerShadow: "hsl(35 30% 50% / 0.15)",
    textLight: false,
  },
  marine: {
    bg: "hsl(210 42% 36%)",
    tab: "hsl(210 38% 30%)",
    tabHighlight: "hsl(210 45% 42%)",
    text: "hsl(210 25% 96%)",
    border: "hsl(210 32% 28%)",
    overlay: "hsl(210 38% 33% / 0.82)",
    innerShadow: "hsl(210 40% 20% / 0.2)",
    textLight: true,
  },
  piscine: {
    bg: "hsl(178 38% 45%)",
    tab: "hsl(178 34% 38%)",
    tabHighlight: "hsl(178 42% 52%)",
    text: "hsl(178 18% 98%)",
    border: "hsl(178 28% 36%)",
    overlay: "hsl(178 34% 42% / 0.82)",
    innerShadow: "hsl(178 35% 25% / 0.18)",
    textLight: true,
  },
  chili: {
    bg: "hsl(12 55% 45%)",
    tab: "hsl(12 50% 38%)",
    tabHighlight: "hsl(12 58% 52%)",
    text: "hsl(12 18% 98%)",
    border: "hsl(12 45% 36%)",
    overlay: "hsl(12 52% 42% / 0.82)",
    innerShadow: "hsl(12 50% 25% / 0.2)",
    textLight: true,
  },
  melon: {
    bg: "hsl(22 62% 75%)",
    tab: "hsl(22 55% 68%)",
    tabHighlight: "hsl(22 65% 82%)",
    text: "hsl(22 35% 18%)",
    border: "hsl(22 48% 62%)",
    overlay: "hsl(22 58% 72% / 0.78)",
    innerShadow: "hsl(22 45% 50% / 0.12)",
    textLight: false,
  },
};

export default function FolderCard({ children, color, index, id, title }: FolderCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax and depth effects - smoother transitions
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [5, 0, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.95, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);

  const styles = colorStyles[color];

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 md:py-20 px-4"
      style={{ perspective: "1600px" }}
    >
      <motion.div
        style={{
          y,
          rotateX,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-[900px] relative mx-auto"
      >
        {/* Multiple stacked papers behind for depth - creating 3D layering effect */}
        <div
          className="absolute -bottom-1 left-3 right-3 h-3 rounded-b-sm -z-10"
          style={{
            backgroundColor: `color-mix(in hsl, ${styles.bg} 92%, hsl(25 20% 30%))`,
            boxShadow: "0 2px 6px -2px hsl(25 30% 15% / 0.12)",
          }}
        />
        <div
          className="absolute -bottom-2.5 left-5 right-5 h-3 rounded-b-sm -z-20"
          style={{
            backgroundColor: `color-mix(in hsl, ${styles.bg} 85%, hsl(25 20% 30%))`,
            boxShadow: "0 2px 6px -2px hsl(25 30% 15% / 0.1)",
          }}
        />
        <div
          className="absolute -bottom-4 left-7 right-7 h-3 rounded-b-sm -z-30"
          style={{
            backgroundColor: `color-mix(in hsl, ${styles.bg} 78%, hsl(25 20% 30%))`,
            boxShadow: "0 2px 6px -2px hsl(25 30% 15% / 0.08)",
          }}
        />

        {/* Folder tab - realistic with contour, shadow and label area */}
        <div
          className="absolute -top-5 md:-top-6 left-6 md:left-10 h-5 md:h-6 px-6 md:px-10 rounded-t-md z-10"
          style={{
            backgroundColor: styles.tab,
            backgroundImage: `
              linear-gradient(180deg, ${styles.tabHighlight} 0%, ${styles.tab} 40%, ${styles.tab} 100%)
            `,
            boxShadow: `
              0 -2px 6px -2px hsl(25 30% 15% / 0.08),
              inset 0 1px 0 ${styles.tabHighlight},
              inset 0 -1px 2px ${styles.innerShadow}
            `,
            border: `1px solid ${styles.border}`,
            borderBottom: "none",
          }}
        >
          {/* Tab texture overlay */}
          <div
            className="absolute inset-0 rounded-t-md pointer-events-none"
            style={{
              backgroundImage: `url(${paperTexture})`,
              backgroundSize: "cover",
              opacity: 0.08,
              mixBlendMode: "multiply",
            }}
          />
          
          {/* Tab label text */}
          {title && (
            <span
              className="relative z-10 flex items-center justify-center h-full font-elegant text-[10px] md:text-xs font-medium tracking-wide uppercase whitespace-nowrap"
              style={{ 
                color: styles.textLight ? "hsl(0 0% 100% / 0.85)" : "hsl(25 30% 20% / 0.8)",
                textShadow: styles.textLight 
                  ? "0 1px 2px hsl(25 30% 10% / 0.3)" 
                  : "0 1px 0 hsl(0 0% 100% / 0.3)",
              }}
            >
              {title}
            </span>
          )}
        </div>

        {/* Main folder body with 3D depth */}
        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            backgroundColor: styles.bg,
            backgroundImage: `url(${folderTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: `
              0 25px 60px -15px hsl(25 30% 15% / 0.38),
              0 12px 28px -10px hsl(25 30% 15% / 0.22),
              0 5px 12px -5px hsl(25 30% 15% / 0.15),
              0 2px 4px -2px hsl(25 30% 15% / 0.1),
              inset 0 1px 0 hsl(0 0% 100% / 0.12)
            `,
            border: `1px solid ${styles.border}`,
          }}
        >
          {/* Color overlay with texture blend for colored paper effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ 
              backgroundColor: styles.overlay,
              backgroundBlendMode: "multiply",
            }}
          />

          {/* Paper texture for ultra-realism */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${paperTexture})`,
              backgroundSize: "cover",
              opacity: color === "sable" ? 0.18 : 0.1,
              mixBlendMode: "multiply",
            }}
          />

          {/* Subtle grain noise for paper feel */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              mixBlendMode: "multiply",
            }}
          />

          {/* Top edge highlight for 3D volume */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent 5%, ${styles.tabHighlight} 20%, ${styles.tabHighlight} 80%, transparent 95%)`,
              opacity: 0.5,
            }}
          />

          {/* Left edge highlight */}
          <div
            className="absolute top-0 left-0 bottom-0 w-[2px] pointer-events-none"
            style={{
              background: `linear-gradient(180deg, ${styles.tabHighlight} 0%, transparent 60%)`,
              opacity: 0.4,
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 p-6 md:p-10 lg:p-12"
            style={{ color: styles.text }}
          >
            {children}
          </div>

          {/* Corner fold with gradient for realism */}
          <div
            className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10"
            style={{
              background: `linear-gradient(135deg, transparent 45%, hsl(25 30% 15% / 0.05) 50%, hsl(25 30% 15% / 0.08) 100%)`,
            }}
          />
          
          {/* Opposite corner subtle wear */}
          <div
            className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8"
            style={{
              background: `linear-gradient(315deg, transparent 60%, hsl(0 0% 100% / 0.04) 100%)`,
            }}
          />

          {/* Inner edge shadows for depth (ambient occlusion) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: `
                inset 0 -3px 10px -5px ${styles.innerShadow},
                inset -3px 0 10px -5px ${styles.innerShadow},
                inset 3px 0 10px -5px hsl(0 0% 100% / 0.05)
              `,
            }}
          />
          
          {/* Bottom shadow line for "sitting on surface" effect */}
          <div
            className="absolute bottom-0 left-2 right-2 h-[1px] pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${styles.border}, transparent)`,
              opacity: 0.6,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
