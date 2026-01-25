import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroFolder from "@/components/HeroFolder";
import FolderSections from "@/components/FolderSection";
import paperBgWarm from "@/assets/paper-bg-warm.jpg";

const Index = () => {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${paperBgWarm})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Paper texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Subtle vignette effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 40%, hsl(25 30% 15% / 0.08) 100%)`,
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <HeroFolder />
        <FolderSections />

        {/* Footer area placeholder */}
        <section
          id="contato"
          className="min-h-[50vh] flex items-center justify-center py-20"
        >
          <div className="text-center">
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-foreground">
              Fale Comigo
            </h2>
            <p className="font-elegant text-lg text-muted-foreground">
              Em breve formulário de contato
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
