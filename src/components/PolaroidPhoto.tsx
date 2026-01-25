import { motion } from "framer-motion";
import maryanePhoto from "@/assets/maryane-portrait.jpg";

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
      {/* Realistic large metallic paper clip - SVG based for true realism */}
      <motion.div
        className="absolute -top-8 right-0 md:-top-10 md:right-1 w-14 h-20 md:w-18 md:h-24 z-30"
        style={{
          transform: "rotate(12deg)",
        }}
        initial={{ opacity: 0, y: -20, rotate: -15 }}
        animate={{ opacity: 1, y: 0, rotate: 12 }}
        transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
      >
        {/* Shadow of the clip projected onto the polaroid */}
        <svg
          viewBox="0 0 40 80"
          className="absolute inset-0 w-full h-full"
          style={{
            filter: "blur(3px)",
            transform: "translate(4px, 5px)",
            opacity: 0.25,
          }}
        >
          <path
            d="M20 5 C8 5 4 12 4 22 L4 58 C4 68 10 75 20 75 C30 75 36 68 36 58 L36 28 C36 20 32 16 26 16 C20 16 16 20 16 26 L16 52 C16 56 18 58 20 58 C22 58 24 56 24 52 L24 26"
            fill="none"
            stroke="hsl(25 20% 15%)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Main metallic clip */}
        <svg
          viewBox="0 0 40 80"
          className="relative w-full h-full z-10"
        >
          {/* Outer clip wire with metallic gradient */}
          <defs>
            <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(220 8% 75%)" />
              <stop offset="25%" stopColor="hsl(220 10% 88%)" />
              <stop offset="50%" stopColor="hsl(220 6% 70%)" />
              <stop offset="75%" stopColor="hsl(220 10% 85%)" />
              <stop offset="100%" stopColor="hsl(220 8% 72%)" />
            </linearGradient>
            <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(0 0% 100% / 0.6)" />
              <stop offset="50%" stopColor="hsl(0 0% 100% / 0)" />
              <stop offset="100%" stopColor="hsl(220 5% 40% / 0.3)" />
            </linearGradient>
          </defs>
          
          {/* Main wire path */}
          <path
            d="M20 5 C8 5 4 12 4 22 L4 58 C4 68 10 75 20 75 C30 75 36 68 36 58 L36 28 C36 20 32 16 26 16 C20 16 16 20 16 26 L16 52 C16 56 18 58 20 58 C22 58 24 56 24 52 L24 26"
            fill="none"
            stroke="url(#metalGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          
          {/* Highlight stroke for 3D effect */}
          <path
            d="M20 5 C8 5 4 12 4 22 L4 58 C4 68 10 75 20 75 C30 75 36 68 36 58 L36 28 C36 20 32 16 26 16 C20 16 16 20 16 26 L16 52 C16 56 18 58 20 58 C22 58 24 56 24 52 L24 26"
            fill="none"
            stroke="url(#metalHighlight)"
            strokeWidth="1.2"
            strokeLinecap="round"
            style={{ transform: "translate(-0.3px, -0.3px)" }}
          />
        </svg>
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
