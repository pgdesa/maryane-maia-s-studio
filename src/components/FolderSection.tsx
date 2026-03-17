import { motion } from "framer-motion";
import FolderCard from "./FolderCard";

interface FolderData {
  id: string;
  title: string;
  subtitle?: string;
  color: "sable" | "marine" | "piscine" | "chili" | "melon";
  tabTitle: string;
  placeholder: string;
  ctaText: string;
}

const folders: FolderData[] = [
  {
    id: "trabalhos",
    title: "Atendimento Publicitário",
    subtitle: "e Mídia",
    color: "marine",
    tabTitle: "Publicidade",
    placeholder: "",
    ctaText: "Veja trabalhos",
  },
  {
    id: "assessoria",
    title: "Assessoria de Comunicação",
    color: "piscine",
    tabTitle: "Comunicação",
    placeholder: "Estratégias e entregas em destaque",
    ctaText: "Explorar",
  },
  {
    id: "reporter",
    title: "Repórter",
    color: "sable",
    tabTitle: "Jornalismo",
    placeholder: "Matérias e coberturas jornalísticas",
    ctaText: "Ver reportagens",
  },
  {
    id: "ugc",
    title: "UGC Creator",
    color: "chili",
    tabTitle: "Conteúdo",
    placeholder: "Conteúdos autênticos e criativos",
    ctaText: "Ver conteúdos",
  },
  {
    id: "xodo",
    title: "Meu Xodó",
    color: "melon",
    tabTitle: "Especiais",
    placeholder: "Projetos especiais do coração",
    ctaText: "Ver agora",
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
          title={folder.tabTitle}
        >
          <div className="flex flex-col items-center text-center min-h-[260px] md:min-h-[300px] justify-center py-6">
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

            {/* Placeholder - only show if not empty */}
            {folder.placeholder && (
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="font-elegant text-lg md:text-xl mb-8 max-w-md opacity-90"
              >
                {folder.placeholder}
              </motion.p>
            )}

            {/* CTA Button with enhanced styling */}
            <motion.button
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.22 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-sm font-elegant text-lg font-semibold transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: "hsl(25 32% 18%)",
                color: "hsl(35 28% 94%)",
                boxShadow: `
                  0 6px 20px -4px hsl(25 30% 15% / 0.3),
                  0 2px 6px -2px hsl(25 30% 15% / 0.15),
                  inset 0 1px 0 hsl(0 0% 100% / 0.1)
                `,
              }}
            >
              {folder.ctaText}
            </motion.button>

            {/* Decorative folder number - subtle watermark */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.04 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 font-display text-[5rem] md:text-[7rem] leading-none select-none pointer-events-none"
              style={{ transform: "rotate(8deg)" }}
            >
              {String(index + 2).padStart(2, "0")}
            </motion.div>
          </div>
        </FolderCard>
      ))}
    </div>
  );
}
