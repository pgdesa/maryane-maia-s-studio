import { motion } from "framer-motion";
import maryanePhoto from "@/assets/maryane-portrait.jpg";
import paperClip from "@/assets/paper-clip.png";

interface PolaroidPhotoProps {
  className?: string;
}

export default function PolaroidPhoto({ className = "" }: PolaroidPhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 6, y: 15 }}
      animate={{ opacity: 1, rotate: -2, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* Paper clip positioned on top corner - metallic look */}
      <motion.img
        src={paperClip}
        alt=""
        className="absolute -top-6 -right-1 w-10 h-10 md:w-12 md:h-12 z-20"
        style={{ 
          transform: "rotate(-12deg)",
          filter: "drop-shadow(1px 2px 3px hsl(25 30% 15% / 0.25))"
        }}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      />

      {/* Polaroid frame with realistic shadow */}
      <div
        className="relative bg-white p-1.5 pb-6 md:p-2 md:pb-8"
        style={{
          boxShadow: `
            0 8px 24px -4px hsl(25 30% 15% / 0.3),
            0 3px 8px -2px hsl(25 30% 15% / 0.15),
            0 1px 3px 0 hsl(25 30% 15% / 0.1)
          `,
          transform: "rotate(-2deg)",
        }}
      >
        {/* Photo container */}
        <div className="relative overflow-hidden">
          <img
            src={maryanePhoto}
            alt="Maryane Maia"
            className="w-28 h-32 md:w-36 md:h-44 object-cover object-top"
            style={{
              filter: "saturate(1.05) contrast(1.03) brightness(1.02)",
            }}
          />
          
          {/* Subtle vintage overlay on photo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, hsl(40 45% 92% / 0.12) 0%, transparent 60%)",
            }}
          />
          
          {/* Very subtle vignette on photo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 20px 2px hsl(25 30% 15% / 0.08)",
            }}
          />
        </div>

        {/* Subtle paper texture on polaroid white border */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Polaroid border slight aging effect */}
        <div
          className="absolute inset-0 pointer-events-none rounded-sm"
          style={{
            background: "linear-gradient(180deg, transparent 85%, hsl(40 30% 85% / 0.3) 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}
