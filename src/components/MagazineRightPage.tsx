import { motion } from "framer-motion";
import { Camera } from "lucide-react";

// Mosaic Tile component for responsive grid
const MosaicTile = ({ 
  label, 
  delay = 0, 
  rotate = 0, 
  className = "" 
}: { 
  label: string;
  delay?: number;
  rotate?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`relative w-full h-full ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {/* Photo frame */}
      <div 
        className="absolute inset-0 rounded-sm overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(30 20% 88%) 0%, hsl(30 20% 82%) 100%)",
          boxShadow: `
            0 3px 10px -2px hsl(25 30% 15% / 0.15),
            0 1px 3px -1px hsl(25 30% 15% / 0.1),
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
              className="mx-auto mb-0.5" 
              size={16}
              style={{ color: "hsl(var(--ink-soft))" }}
            />
            <span 
              className="font-elegant text-[9px] tracking-wide text-ink-soft"
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
    <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col">
      {/* Header quote - more compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-4"
      >
        <blockquote className="relative">
          <span 
            className="font-display text-4xl md:text-5xl leading-none opacity-40"
            style={{ color: "hsl(var(--folder-chili))" }}
          >
            "
          </span>
          <p 
            className="font-elegant text-lg md:text-xl lg:text-2xl italic leading-tight -mt-3 ml-3"
            style={{ color: "hsl(var(--folder-marine))" }}
          >
            Sempre em busca de novos desafios.
          </p>
          <span 
            className="font-display text-2xl leading-none opacity-40 ml-3"
            style={{ color: "hsl(var(--folder-chili))" }}
          >
            "
          </span>
        </blockquote>
      </motion.div>

      {/* Photo Mosaic Grid - responsive and compact */}
      <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-2 md:gap-3">
        {/* Main large photo - spans 2x2 */}
        <div className="col-span-2 row-span-2 relative">
          <MosaicTile 
            label="PRINCIPAL"
            delay={0.4}
            rotate={-1}
          />
          
          {/* Overlay small photo on top of main */}
          <div className="absolute bottom-2 right-2 w-12 h-14 md:w-14 md:h-16 z-10">
            <MosaicTile 
              label="5"
              delay={0.8}
              rotate={4}
            />
          </div>
        </div>

        {/* Side photo 1 */}
        <div className="col-span-1 row-span-1">
          <MosaicTile 
            label="FOTO 2"
            delay={0.5}
            rotate={2}
          />
        </div>

        {/* Side photo 2 */}
        <div className="col-span-1 row-span-1">
          <MosaicTile 
            label="FOTO 3"
            delay={0.6}
            rotate={-2}
          />
        </div>

        {/* Bottom photos */}
        <div className="col-span-1 row-span-1">
          <MosaicTile 
            label="FOTO 4"
            delay={0.7}
            rotate={1}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <MosaicTile 
            label="FOTO 6"
            delay={0.9}
            rotate={-1}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <MosaicTile 
            label="EXTRA"
            delay={1.0}
            rotate={2}
          />
        </div>
      </div>

      {/* Decorative tape/sticker elements - smaller */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute top-10 right-2 w-6 h-2 opacity-50"
        style={{
          background: "linear-gradient(90deg, hsl(var(--folder-melon) / 0.6) 0%, hsl(var(--folder-melon) / 0.4) 100%)",
          transform: "rotate(-15deg)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-20 right-12 w-5 h-1.5 opacity-40"
        style={{
          background: "linear-gradient(90deg, hsl(var(--folder-piscine) / 0.5) 0%, hsl(var(--folder-piscine) / 0.3) 100%)",
          transform: "rotate(8deg)",
        }}
      />
    </div>
  );
}
