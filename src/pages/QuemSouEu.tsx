import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MagazineSpread from "@/components/MagazineSpread";
import PageBackground from "@/components/PageBackground";

export default function QuemSouEu() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <PageBackground />
      <Navbar />
      
      {/* Hero Section with Magazine */}
      <main className="relative z-10 pt-24 md:pt-28 pb-8 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[1200px] mx-auto h-full max-h-[calc(100svh-160px)]"
        >
          <MagazineSpread />
        </motion.div>
      </main>
    </div>
  );
}
