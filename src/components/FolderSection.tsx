import { motion } from "framer-motion";
import FolderCard from "./FolderCard";

interface FolderData {
  id: string;
  title: string;
  subtitle?: string;
  color: "sable" | "marine" | "piscine" | "chili" | "melon";
  placeholder: string;
  ctaText: string;
}

const folders: FolderData[] = [
  {
    id: "trabalhos",
    title: "Atendimento Publicitário",
    subtitle: "e Mídia",
    color: "marine",
    placeholder: "Prévia de trabalhos em breve",
    ctaText: "Ver trabalhos",
  },
  {
    id: "assessoria",
    title: "Assessoria de Comunicação",
    color: "piscine",
    placeholder: "Estratégias e entregas em destaque",
    ctaText: "Explorar entregas",
  },
  {
    id: "reporter",
    title: "Repórter",
    color: "sable",
    placeholder: "Matérias e coberturas jornalísticas",
    ctaText: "Ver reportagens",
  },
  {
    id: "ugc",
    title: "UGC Creator",
    color: "chili",
    placeholder: "Conteúdos autênticos e criativos",
    ctaText: "Ver conteúdos",
  },
  {
    id: "xodo",
    title: "Meu Xodó",
    color: "melon",
    placeholder: "Projetos especiais do coração",
    ctaText: "Ver projetos especiais",
  },
];

export default function FolderSections() {
  return (
    <div className="relative">
      {folders.map((folder, index) => (
        <FolderCard
          key={folder.id}
          id={folder.id}
          color={folder.color}
          index={index + 1}
        >
          <div className="flex flex-col items-center text-center min-h-[320px] md:min-h-[380px] justify-center py-8">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl mb-2 drop-shadow-sm"
            >
              {folder.title}
            </motion.h2>

            {folder.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl mb-10 drop-shadow-sm"
              >
                {folder.subtitle}
              </motion.span>
            )}

            {!folder.subtitle && <div className="mb-10" />}

            {/* Placeholder */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-elegant text-xl md:text-2xl mb-10 max-w-md"
              style={{ opacity: 0.85 }}
            >
              {folder.placeholder}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-sm font-elegant text-xl font-semibold transition-all duration-300"
              style={{
                backgroundColor: folder.color === "sable" || folder.color === "melon"
                  ? "hsl(25 35% 22%)"
                  : "hsl(0 0% 100% / 0.98)",
                color: folder.color === "sable" || folder.color === "melon"
                  ? "hsl(35 30% 95%)"
                  : "hsl(25 30% 18%)",
                boxShadow: "0 6px 25px -5px hsl(25 30% 15% / 0.3)",
              }}
            >
              {folder.ctaText}
            </motion.button>

            {/* Decorative folder number */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.08 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-6 right-6 md:top-10 md:right-10 font-display text-[8rem] md:text-[12rem] leading-none select-none pointer-events-none"
              style={{ transform: "rotate(12deg)" }}
            >
              {String(index + 2).padStart(2, "0")}
            </motion.div>
          </div>
        </FolderCard>
      ))}
    </div>
  );
}
