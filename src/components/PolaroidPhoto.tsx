import { motion } from "framer-motion";
import polaroidMary from "@/assets/polaroid-mary.png";
import clipRoseGold from "@/assets/clip-rosegold.png";

interface PolaroidPhotoProps {
  className?: string;
}

export default function PolaroidPhoto({ className = "" }: PolaroidPhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 6, y: 15 }}
      animate={{ opacity: 1, rotate: -3, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* Rose gold paper clip — positioned at bottom of polaroid to clip it to folder */}
      <motion.div
        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-16 h-28 md:w-22 md:h-36 lg:w-28 lg:h-40 z-30"
        style={{ transform: "rotate(12deg)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={clipRoseGold}
          alt="Clipe metálico rose gold"
          className="w-full h-full object-contain drop-shadow-lg"
          style={{
            filter: "drop-shadow(2px 4px 6px hsl(25 30% 15% / 0.35))",
          }}
        />
      </motion.div>

      {/* Polaroid photo — real image with transparent bg */}
      <div
        className="relative"
        style={{
          filter: "drop-shadow(0 10px 25px hsl(25 30% 15% / 0.35)) drop-shadow(0 4px 8px hsl(25 30% 15% / 0.2))",
        }}
      >
        <img
          src={polaroidMary}
          alt="Maryane Maia — foto polaroid"
          className="w-28 h-auto md:w-36 lg:w-40 object-contain"
        />
      </div>
    </motion.div>
  );
}
