import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageBackground from "@/components/PageBackground";

type Props = { title?: string };

export default function EmConstrucao({ title = "Em construção" }: Props) {
  return (
    <div className="min-h-screen relative">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 pt-28 md:pt-32 pb-16 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <h1 className="font-display text-6xl md:text-7xl text-ink mb-6">
            {title}
          </h1>

          <p className="font-elegant text-lg md:text-xl text-ink-soft mb-8 leading-relaxed">
            Estamos preparando esta seção para manter a mesma estética editorial do portfólio.
          </p>

          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-sm font-elegant text-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "hsl(var(--ink))",
              color: "hsl(35 28% 94%)",
              boxShadow: "0 6px 20px -4px hsl(25 30% 15% / 0.3)",
            }}
          >
            Voltar para a página inicial
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
