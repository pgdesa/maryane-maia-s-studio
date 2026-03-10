import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode, forwardRef } from "react";
import folderManila from "@/assets/folder-manila.png";

interface FolderCardProps {
  children: ReactNode;
  color: "sable" | "marine" | "piscine" | "chili" | "melon";
  index: number;
  id?: string;
  title?: string;
}

const colorOverlays: Record<string, string> = {
  sable: "hsl(35 42% 78% / 0.15)",
  marine: "hsl(210 50% 35% / 0.55)",
  piscine: "hsl(178 45% 42% / 0.50)",
  chili: "hsl(12 55% 42% / 0.50)",
  melon: "hsl(22 65% 72% / 0.35)",
};

const textColors: Record<string, string> = {
  sable: "hsl(25 28% 16%)",
  marine: "hsl(210 25% 96%)",
  piscine: "hsl(178 18% 98%)",
  chili: "hsl(12 18% 98%)",
  melon: "hsl(22 35% 18%)",
};

const FolderCard = forwardRef<HTMLDivElement, FolderCardProps>(function FolderCard({ children, color, index, id, title }, forwardedRef) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [5, 0, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.95, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);

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
        {/* Real manila folder with color overlay */}
        <div
          className="relative"
          style={{
            filter: "drop-shadow(0 18px 40px hsl(25 30% 15% / 0.30)) drop-shadow(0 6px 12px hsl(25 30% 15% / 0.18))",
          }}
        >
          {/* Folder image */}
          <img
            src={folderManila}
            alt={title || "Pasta de arquivo"}
            className="w-full h-auto"
          />

          {/* Color overlay */}
          <div
            className="absolute inset-0 pointer-events-none rounded-sm"
            style={{
              backgroundColor: colorOverlays[color],
              mixBlendMode: "multiply",
            }}
          />

          {/* Content overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center p-6 md:p-10 lg:p-12"
            style={{ color: textColors[color] }}
          >
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
});

export default FolderCard;
