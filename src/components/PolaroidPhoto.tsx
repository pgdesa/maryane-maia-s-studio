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
      animate={{ opacity: 1, rotate: -3, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* Realistic metallic paper clip - positioned to "grip" the polaroid */}
      <motion.div
        className="absolute -top-5 right-2 md:-top-6 md:right-3 w-8 h-12 md:w-10 md:h-14 z-30"
        style={{
          transform: "rotate(15deg)",
        }}
        initial={{ opacity: 0, y: -20, rotate: -20 }}
        animate={{ opacity: 1, y: 0, rotate: 15 }}
        transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
      >
        {/* Clip shadow on polaroid surface */}
        <div
          className="absolute inset-0"
          style={{
            background: "transparent",
            filter: "blur(4px)",
            transform: "translate(3px, 4px)",
          }}
        >
          <img
            src={paperClip}
            alt=""
            className="w-full h-full object-contain opacity-30"
          />
        </div>
        
        {/* Main clip with metallic enhancement */}
        <img
          src={paperClip}
          alt=""
          className="w-full h-full object-contain relative z-10"
          style={{
            filter: "drop-shadow(0 1px 2px hsl(25 30% 15% / 0.2)) contrast(1.05) brightness(1.02)",
          }}
        />
        
        {/* Subtle highlight reflection overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: "linear-gradient(135deg, hsl(0 0% 100% / 0.15) 0%, transparent 40%, transparent 60%, hsl(0 0% 100% / 0.08) 100%)",
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>

      {/* Polaroid frame with ultra-realistic shadow and texture */}
      <div
        className="relative bg-gradient-to-br from-white via-white to-gray-50"
        style={{
          padding: "6px 6px 24px 6px",
          boxShadow: `
            0 12px 35px -8px hsl(25 30% 15% / 0.35),
            0 6px 15px -4px hsl(25 30% 15% / 0.18),
            0 2px 5px -1px hsl(25 30% 15% / 0.12),
            0 0 0 1px hsl(25 20% 85% / 0.5)
          `,
          transform: "rotate(-3deg)",
        }}
      >
        {/* Edge highlight for 3D effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 1px 1px 0 hsl(0 0% 100% / 0.8), inset -1px -1px 0 hsl(25 20% 80% / 0.4)",
          }}
        />

        {/* Photo container with slight inset */}
        <div 
          className="relative overflow-hidden"
          style={{
            boxShadow: "inset 0 0 3px hsl(25 30% 15% / 0.1)",
          }}
        >
          <img
            src={maryanePhoto}
            alt="Maryane Maia"
            className="w-28 h-32 md:w-36 md:h-44 object-cover object-top"
            style={{
              filter: "saturate(1.08) contrast(1.02) brightness(1.01)",
            }}
          />
          
          {/* Subtle vintage warm overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, hsl(40 50% 95% / 0.15) 0%, transparent 50%)",
            }}
          />
          
          {/* Photo vignette for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 25px 3px hsl(25 30% 15% / 0.1)",
            }}
          />
        </div>

        {/* Polaroid white border texture - subtle paper grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            mixBlendMode: "multiply",
          }}
        />
        
        {/* Slight yellowing at bottom (aged polaroid look) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 70%, hsl(45 30% 92% / 0.4) 100%)",
          }}
        />
        
        {/* Corner wear simulation */}
        <div
          className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 50%, hsl(40 20% 88% / 0.5) 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}
