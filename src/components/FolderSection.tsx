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
          <div className="flex flex-col items-center text-center min-h-[280px] md:min-h-[320px] justify-center py-6">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl mb-1.5 drop-shadow-sm"
            >
              {folder.title}
            </motion.h2>

            {folder.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="font-display text-4xl md:text-5xl mb-8 drop-shadow-sm"
              >
                {folder.subtitle}
              </motion.span>
            )}

            {!folder.subtitle && <div className="mb-8" />}

            {/* Placeholder */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="font-elegant text-lg md:text-xl mb-8 max-w-md opacity-90"
            >
              {folder.placeholder}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.22 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-sm font-elegant text-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: folder.color === "sable" || folder.color === "melon"
                  ? "hsl(25 32% 20%)"
                  : "hsl(0 0% 99%)",
                color: folder.color === "sable" || folder.color === "melon"
                  ? "hsl(35 28% 94%)"
                  : "hsl(25 28% 16%)",
                boxShadow: "0 5px 20px -4px hsl(25 30% 15% / 0.28)",
              }}
            >
              {folder.ctaText}
            </motion.button>

            {/* Decorative folder number */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.06 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 font-display text-[6rem] md:text-[9rem] leading-none select-none pointer-events-none"
              style={{ transform: "rotate(10deg)" }}
            >
              {String(index + 2).padStart(2, "0")}
            </motion.div>
          </div>
        </FolderCard>
      ))}
    </div>
  );
}
