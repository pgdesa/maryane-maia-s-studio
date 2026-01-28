import { motion } from "framer-motion";
import { Camera, Star, Heart } from "lucide-react";

// Photo placeholder component
const PhotoPlaceholder = ({ 
  className, 
  size = "medium",
  label = "FOTO",
  rotate = 0,
  delay = 0
}: { 
  className?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  rotate?: number;
  delay?: number;
}) => {
  const sizeClasses = {
    small: "w-24 h-24 md:w-28 md:h-28",
    medium: "w-32 h-40 md:w-36 md:h-44",
    large: "w-44 h-56 md:w-52 md:h-64",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`relative ${sizeClasses[size]} ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "center center",
      }}
    >
      {/* Photo frame with subtle border */}
      <div 
        className="absolute inset-0 rounded-sm overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(30 20% 88%) 0%, hsl(30 20% 82%) 100%)",
          boxShadow: `
            0 4px 12px -2px hsl(25 30% 15% / 0.15),
            0 2px 4px -1px hsl(25 30% 15% / 0.1),
            inset 0 0 0 1px hsl(35 30% 90% / 0.5)
          `,
        }}
      >
        {/* Inner photo area */}
        <div 
          className="absolute inset-1 rounded-sm flex items-center justify-center"
          style={{
            background: "linear-gradient(145deg, hsl(30 15% 78%) 0%, hsl(30 15% 72%) 100%)",
          }}
        >
          <div className="text-center opacity-50">
            <Camera 
              className="mx-auto mb-1" 
              size={size === "large" ? 28 : size === "medium" ? 22 : 16}
              style={{ color: "hsl(25 25% 45%)" }}
            />
            <span 
              className="font-elegant text-[10px] md:text-xs tracking-wide"
              style={{ color: "hsl(25 25% 45%)" }}
            >
              {label}
            </span>
          </div>
        </div>

        {/* Photo texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default function MagazineRightPage() {
  return (
    <div className="p-6 md:p-8 lg:p-10 min-h-[500px] lg:min-h-[600px] relative">
      {/* Header quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-6 lg:mb-8"
      >
        <blockquote className="relative">
          <span 
            className="font-display text-5xl md:text-6xl leading-none opacity-40"
            style={{ color: "hsl(var(--folder-chili))" }}
          >
            "
          </span>
          <p 
            className="font-elegant text-xl md:text-2xl lg:text-3xl italic leading-tight -mt-4 ml-4"
            style={{ color: "hsl(var(--folder-marine))" }}
          >
            Sempre em busca de novos desafios para crescer e aprender.
          </p>
          <span 
            className="font-display text-3xl leading-none opacity-40 ml-4"
            style={{ color: "hsl(var(--folder-chili))" }}
          >
            "
          </span>
        </blockquote>
      </motion.div>

      {/* Photo Mosaic Grid */}
      <div className="relative">
        {/* Main large photo */}
        <PhotoPlaceholder 
          size="large" 
          label="PRINCIPAL"
          rotate={-2}
          delay={0.4}
          className="absolute top-0 left-0 z-20"
        />

        {/* Medium photos */}
        <PhotoPlaceholder 
          size="medium" 
          label="FOTO 2"
          rotate={3}
          delay={0.5}
          className="absolute top-4 right-4 z-10"
        />

        <PhotoPlaceholder 
          size="medium" 
          label="FOTO 3"
          rotate={-1}
          delay={0.6}
          className="absolute top-32 md:top-36 left-28 md:left-36 z-30"
        />

        {/* Small photos */}
        <PhotoPlaceholder 
          size="small" 
          label="FOTO 4"
          rotate={4}
          delay={0.7}
          className="absolute bottom-20 right-8 z-20"
        />

        <PhotoPlaceholder 
          size="small" 
          label="FOTO 5"
          rotate={-3}
          delay={0.8}
          className="absolute bottom-4 left-8 z-10"
        />

        <PhotoPlaceholder 
          size="small" 
          label="FOTO 6"
          rotate={2}
          delay={0.9}
          className="absolute bottom-0 right-24 z-15"
        />

        {/* Spacer for layout */}
        <div className="h-[380px] md:h-[420px] lg:h-[460px]" />
      </div>

      {/* Decorative Editorial Elements */}
      <div className="absolute top-6 right-6 opacity-30">
        <Star size={14} style={{ color: "hsl(var(--folder-melon))" }} fill="currentColor" />
      </div>
      
      <div className="absolute top-20 right-20 opacity-25">
        <Heart size={12} style={{ color: "hsl(var(--folder-chili))" }} fill="currentColor" />
      </div>

      <div className="absolute bottom-16 left-4 opacity-25">
        <Star size={10} style={{ color: "hsl(var(--folder-piscine))" }} fill="currentColor" />
      </div>

      {/* Decorative tape/sticker element */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute top-12 right-2 w-8 h-3 opacity-60"
        style={{
          background: "linear-gradient(90deg, hsl(var(--folder-melon) / 0.6) 0%, hsl(var(--folder-melon) / 0.4) 100%)",
          transform: "rotate(-15deg)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-28 right-16 w-6 h-2 opacity-50"
        style={{
          background: "linear-gradient(90deg, hsl(var(--folder-piscine) / 0.5) 0%, hsl(var(--folder-piscine) / 0.3) 100%)",
          transform: "rotate(8deg)",
        }}
      />
    </div>
  );
}
