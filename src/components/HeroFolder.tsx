import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import folderHero from "@/assets/folder-hero.png";

export default function HeroFolder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-x-hidden px-4 pb-12 pt-20 md:pb-16 md:pt-24"
      style={{ perspective: "1600px" }}
    >
      <motion.div
        style={{ y, opacity, scale, rotateX }}
        className="relative mx-auto flex w-full justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex w-full justify-center"
          style={{
            filter: "drop-shadow(0 20px 50px hsl(25 30% 15% / 0.35)) drop-shadow(0 8px 16px hsl(25 30% 15% / 0.2))",
          }}
        >
          <img
            src={folderHero}
            alt="Pasta de portfólio Maryane Maia"
            className="block h-auto max-h-[calc(100svh-9rem)] w-auto max-w-[94vw] md:max-h-[calc(100svh-10rem)] xl:max-h-[calc(100svh-9.5rem)]"
            loading="eager"
            decoding="async"
          />

          <div
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-[10%]"
            style={{ paddingTop: "16%" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-[clamp(2.6rem,7vw,7rem)] text-center leading-[0.92] text-foreground drop-shadow-sm"
            >
              <span className="block">Portfólio</span>
              <span className="block mt-1 md:mt-2">Maryane Maia</span>
            </motion.h1>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 md:bottom-6"
      >
        <span className="font-elegant text-sm tracking-wide text-primary-foreground/80">
          Role para explorar os arquivos
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-primary-foreground/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
