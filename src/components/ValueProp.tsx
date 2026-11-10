import { motion } from "framer-motion";
import { Car, PencilRuler, Wrench, Award } from "lucide-react";

const items = [
  {
    icon: Car,
    title: "Soluções de Sombreamento",
    description: "Proteção avançada contra radiação UV, granizo e intempéries, preservando a integridade e o conforto térmico dos veículos."
  },
  {
    icon: PencilRuler,
    title: "Projetos Sob Medida",
    description: "Planejamento exclusivo que otimiza cada metro quadrado, integrando funcionalidade e estética à arquitetura do seu espaço valorizando seu imóvel."
  },
  {
    icon: Wrench,
    title: "Suporte e Renovação",
    description: "Manutenção preventiva e corretiva especializada para estender a vida útil e manter o padrão visual das estruturas existentes."
  },
  {
    icon: Award,
    title: "Engenharia de Performance",
    description: "Utilização de materiais certificados e acabamento premium, garantindo máxima durabilidade e resistência estrutural."
  },
];

const ValueProp = () => (
  <section className="py-24 bg-surface relative overflow-hidden">
    <div className="absolute inset-0 shimmer opacity-20" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Excelência em Cada <span className="text-primary text-glow-primary">Detalhe</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Unimos tecnologia e design para entregar infraestruturas de alto padrão que valorizam seu patrimônio.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass rounded-2xl p-8 flex flex-col items-center text-center group border-glow hover:glow-primary transition-all duration-500"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <item.icon size={28} />
            </div>
            <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProp;