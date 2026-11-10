import { motion } from "framer-motion";
import { Award, Cpu, Eye, Zap, Gem, Building2 } from "lucide-react";

const cards = [
  { 
    title: "Experiência", 
    desc: "Know-how técnico consolidado desde 2011, com foco em rigor estrutural e perfeição executiva.", 
    icon: Award 
  },
  { 
    title: "Tecnologia", 
    desc: "Cálculo estrutural avançado para máxima resistência contra ventos e intempéries severas.", 
    icon: Cpu 
  },
  { 
    title: "Estética", 
    desc: "Design contemporâneo que se integra à arquitetura, elevando o valor venal do imóvel.", 
    icon: Eye 
  },
  { 
    title: "Agilidade", 
    desc: "Atendimento dinâmico e cronograma de instalação otimizado para minimizar interferências no local.", 
    icon: Zap 
  },
  { 
    title: "Material Premium", 
    desc: "Estruturas reforçadas e coberturas de alta durabilidade com proteção UV e acabamento de luxo.", 
    icon: Gem 
  },
  { 
    title: "Versatilidade", 
    desc: "Soluções personalizadas para residências, condomínios e grandes pátios corporativos.", 
    icon: Building2 
  },
];

const Diferenciais = () => (
  <section id="diferenciais" className="py-24 relative overflow-hidden bg-background">
    {/* Glow background sutil */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Por que a <span className="text-primary text-glow-primary">Edicob Sul</span>?
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass rounded-2xl p-8 border-glow group hover:glow-primary transition-all duration-500 relative overflow-hidden flex flex-col items-start"
          >
            {/* Decoração interna de brilho */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Diferenciais;