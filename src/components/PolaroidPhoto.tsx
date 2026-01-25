import { motion } from "framer-motion";
import maryanePhoto from "@/assets/maryane-portrait.jpg";
import paperClip from "@/assets/paper-clip.png";

interface PolaroidPhotoProps {
  className?: string;
}

export default function PolaroidPhoto({ className = "" }: PolaroidPhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 8, y: 20 }}
      animate={{ opacity: 1, rotate: 3, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* Paper clip positioned on top corner */}
      <motion.img
        src={paperClip}
        alt=""
        className="absolute -top-8 -right-2 w-14 h-14 z-20"
        style={{ transform: "rotate(-15deg)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />

      {/* Polaroid frame */}
      <div
        className="relative bg-white p-2 pb-8 md:p-3 md:pb-12"
        style={{
          boxShadow: "0 8px 30px -5px hsl(25 30% 15% / 0.3), 0 2px 10px -2px hsl(25 30% 15% / 0.2)",
        }}
      >
        {/* Photo */}
        <div className="relative overflow-hidden">
          <img
            src={maryanePhoto}
            alt="Maryane Maia"
            className="w-32 h-40 md:w-44 md:h-56 object-cover object-top"
            style={{
              filter: "saturate(1.05) contrast(1.02)",
            }}
          />
          {/* Subtle vintage overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, hsl(40 50% 90% / 0.1) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Paper texture on polaroid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </motion.div>
  );
}
