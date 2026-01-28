import { motion } from "framer-motion";
import MagazineLeftPage from "./MagazineLeftPage";
import MagazineRightPage from "./MagazineRightPage";

export default function MagazineSpread() {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative h-full max-h-[calc(100svh-160px)]"
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Magazine container with realistic shadows */}
      <div
        className="relative mx-auto h-full"
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
          className="relative rounded-sm overflow-hidden h-full"
          style={{
            boxShadow: `
              0 25px 50px -12px hsl(25 30% 15% / 0.25),
              0 12px 24px -8px hsl(25 30% 15% / 0.15),
              inset 0 1px 0 hsl(35 40% 98% / 0.5)
            `,
          }}
        >
          {/* Couchê paper shine overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: `
                linear-gradient(125deg, transparent 30%, hsl(0 0% 100% / 0.08) 50%, transparent 70%),
                radial-gradient(ellipse at 20% 15%, hsl(0 0% 100% / 0.12) 0%, transparent 40%)
              `,
            }}
          />

          {/* Two-page spread layout */}
          <div className="flex flex-col lg:flex-row relative h-full">
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
          <div className="absolute bottom-2 left-4 text-[10px] font-body opacity-40 text-ink">
            14
          </div>
          <div className="absolute bottom-2 right-4 text-[10px] font-body opacity-40 text-ink">
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
