import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MagazineSpread from "@/components/MagazineSpread";
import paperTexture from "@/assets/paper-texture-sable.jpg";

export default function QuemSouEu() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Textured background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundColor: "hsl(28 32% 91%)",
        }}
      />
      
      {/* Paper texture overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: "cover",
          opacity: 0.08,
          mixBlendMode: "multiply",
        }}
      />
      
      {/* Subtle grain noise */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />
      
      {/* Hero Section with Magazine */}
      <main className="relative z-10 pt-24 md:pt-28 pb-16 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[1200px] mx-auto"
        >
          <MagazineSpread />
        </motion.div>
      </main>
    </div>
  );
}
