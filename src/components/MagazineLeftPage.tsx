import { motion } from "framer-motion";

export default function MagazineLeftPage() {
  return (
    <div className="p-6 md:p-8 lg:p-10 min-h-[500px] lg:min-h-[600px] flex flex-col">
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-6"
      >
        {/* Decorative line */}
        <div 
          className="w-12 h-1 mb-4 rounded-full"
          style={{ backgroundColor: "hsl(var(--folder-chili))" }}
        />
        
        {/* Main Title */}
        <h1 
          className="font-display text-5xl md:text-6xl lg:text-7xl leading-none mb-3"
          style={{ color: "hsl(var(--folder-chili))" }}
        >
          Quem sou eu?
        </h1>
        
        {/* Subtitle */}
        <p 
          className="font-elegant text-sm md:text-base lg:text-lg tracking-wide uppercase"
          style={{ color: "hsl(var(--folder-marine))" }}
        >
          Maryane Maia — Comunicadora, Publicitária e Relações Públicas
        </p>
      </motion.div>

      {/* Body Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex-1"
      >
        {/* First paragraph with Drop Cap */}
        <div className="font-body text-sm md:text-base leading-relaxed mb-6" style={{ color: "hsl(25 30% 20%)" }}>
          <span 
            className="float-left font-display text-5xl md:text-6xl leading-none mr-2 mt-1"
            style={{ color: "hsl(var(--folder-chili))" }}
          >
            M
          </span>
          <span>
            aryane Maia, 27 anos, nascida em 05/02/1999, formada em Publicidade e Propaganda e em Comunicação Social - Relações Públicas. Trabalho com comunicação há cerca de 8 anos, passando por diversas experiências maravilhosas e enriquecedoras.
          </span>
        </div>

        <p className="font-body text-sm md:text-base leading-relaxed mb-6" style={{ color: "hsl(25 30% 20%)" }}>
          Minha vontade de aprender e me desafiar me leva a viver histórias cada dia mais interessantes. Amo trabalhar e viver, e quero sempre estar pronta para o próximo desafio.
        </p>

        {/* Divider line */}
        <div 
          className="w-16 h-px my-6"
          style={{ backgroundColor: "hsl(var(--folder-piscine) / 0.5)" }}
        />

        <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: "hsl(25 30% 20%)" }}>
          Acredito veementemente que por meio da comunicação podemos mudar o mundo, e quero por meio desse site fazer entender o porquê.
        </p>
      </motion.div>

      {/* Pull Quote */}
      <motion.blockquote
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 pl-4 relative"
        style={{
          borderLeft: "3px solid hsl(var(--folder-chili))",
        }}
      >
        {/* Opening quote mark */}
        <span 
          className="absolute -top-4 -left-2 font-display text-6xl leading-none opacity-30"
          style={{ color: "hsl(var(--folder-chili))" }}
        >
          "
        </span>
        
        <p 
          className="font-elegant text-lg md:text-xl lg:text-2xl italic leading-snug"
          style={{ color: "hsl(var(--folder-marine))" }}
        >
          Acredito que a comunicação tem o poder de transformar o mundo e conectar as pessoas.
        </p>
        
        {/* Closing quote mark */}
        <span 
          className="font-display text-4xl leading-none opacity-30 ml-1"
          style={{ color: "hsl(var(--folder-chili))" }}
        >
          "
        </span>
      </motion.blockquote>

      {/* Small decorative elements */}
      <div className="mt-6 flex items-center gap-2 opacity-40">
        <div 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "hsl(var(--folder-melon))" }}
        />
        <div 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "hsl(var(--folder-piscine))" }}
        />
        <div 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "hsl(var(--folder-chili))" }}
        />
      </div>
    </div>
  );
}
