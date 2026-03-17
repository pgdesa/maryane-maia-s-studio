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
        className="w-full max-w-[900px] relative mx-auto flex items-center justify-center"
      >
        <div
          className="relative w-full"
          style={{
            filter: "drop-shadow(0 18px 40px hsl(25 30% 15% / 0.30)) drop-shadow(0 6px 12px hsl(25 30% 15% / 0.18))",
          }}
        >
          {/* Folder image — no color overlay */}
          <img
            src={folderManila}
            alt={title || "Pasta de arquivo"}
            className="w-full h-auto mx-auto block"
            loading="lazy"
            decoding="async"
          />

          {/* Content overlay — centered on folder */}
          <div
            className="absolute inset-0 flex items-center justify-center p-6 md:p-10 lg:p-12"
            style={{ color: "hsl(25 28% 16%)" }}
          >
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
});

export default FolderCard;
