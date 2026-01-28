import { motion } from "framer-motion";
import MagazineLeftPage from "./MagazineLeftPage";
import MagazineRightPage from "./MagazineRightPage";

export default function MagazineSpread() {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative"
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Magazine container with realistic shadows */}
      <div
        className="relative mx-auto"
        style={{
          transform: "rotateX(2deg) rotateY(-1deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Contact shadow (on the surface) */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[95%] h-8 rounded-[50%] blur-xl"
          style={{
            background: "radial-gradient(ellipse, hsl(25 30% 15% / 0.25) 0%, transparent 70%)",
          }}
        />
        
        {/* Main shadow */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-16 rounded-[50%] blur-2xl"
          style={{
            background: "radial-gradient(ellipse, hsl(25 30% 15% / 0.15) 0%, transparent 60%)",
          }}
        />

        {/* Magazine spread */}
        <div 
          className="relative rounded-sm overflow-hidden"
          style={{
            boxShadow: `
              0 25px 50px -12px hsl(25 30% 15% / 0.25),
              0 12px 24px -8px hsl(25 30% 15% / 0.15),
              inset 0 1px 0 hsl(35 40% 98% / 0.5)
            `,
          }}
        >
          {/* Paper texture base */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E")`,
              mixBlendMode: "multiply",
            }}
          />

          {/* Two-page spread layout */}
          <div className="flex flex-col lg:flex-row relative">
            {/* Left Page */}
            <div 
              className="flex-1 relative"
              style={{
                background: "linear-gradient(135deg, hsl(35 45% 96%) 0%, hsl(30 40% 94%) 50%, hsl(35 45% 95%) 100%)",
              }}
            >
              <MagazineLeftPage />
              
              {/* Inner edge shadow (left page) */}
              <div 
                className="hidden lg:block absolute top-0 right-0 w-8 h-full pointer-events-none"
                style={{
                  background: "linear-gradient(to left, hsl(25 30% 15% / 0.08) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Center fold/crease */}
            <div className="hidden lg:block relative w-3 flex-shrink-0">
              {/* Fold line */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, 
                    hsl(25 30% 15% / 0.1) 0%, 
                    hsl(25 30% 15% / 0.15) 20%,
                    hsl(35 40% 98% / 0.3) 50%,
                    hsl(25 30% 15% / 0.15) 80%,
                    hsl(25 30% 15% / 0.1) 100%
                  )`,
                }}
              />
              {/* Stitching effect */}
              <div 
                className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-px"
                style={{
                  background: "repeating-linear-gradient(to bottom, hsl(25 30% 15% / 0.2) 0px, hsl(25 30% 15% / 0.2) 4px, transparent 4px, transparent 8px)",
                }}
              />
            </div>

            {/* Right Page */}
            <div 
              className="flex-1 relative"
              style={{
                background: "linear-gradient(225deg, hsl(35 45% 96%) 0%, hsl(30 40% 94%) 50%, hsl(35 45% 95%) 100%)",
              }}
            >
              <MagazineRightPage />
              
              {/* Inner edge shadow (right page) */}
              <div 
                className="hidden lg:block absolute top-0 left-0 w-8 h-full pointer-events-none"
                style={{
                  background: "linear-gradient(to right, hsl(25 30% 15% / 0.08) 0%, transparent 100%)",
                }}
              />
            </div>
          </div>

          {/* Page numbers */}
          <div className="absolute bottom-3 left-6 text-xs font-body opacity-40" style={{ color: "hsl(25 30% 25%)" }}>
            14
          </div>
          <div className="absolute bottom-3 right-6 text-xs font-body opacity-40" style={{ color: "hsl(25 30% 25%)" }}>
            15
          </div>

          {/* Top edge highlight */}
          <div 
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: "linear-gradient(to right, transparent 0%, hsl(35 40% 98% / 0.6) 20%, hsl(35 40% 98% / 0.6) 80%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
