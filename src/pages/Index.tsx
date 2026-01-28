import Navbar from "@/components/Navbar";
import HeroFolder from "@/components/HeroFolder";
import FolderSections from "@/components/FolderSection";
import PageBackground from "@/components/PageBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <PageBackground />
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
