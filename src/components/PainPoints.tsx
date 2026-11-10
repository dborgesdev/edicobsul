import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Danos na pintura por raios UV",
  "Desconforto térmico insuportável",
  "Desvalorização do seu espaço",
];

const PainPoints = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 leading-tight">
          Seu veículo merece mais que o{" "}
          <span className="text-secondary">sol escaldante.</span>
        </h2>

        <div className="space-y-4 mb-12">
          {problems.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex items-center gap-4 glass rounded-xl px-6 py-4 border-glow text-left"
            >
              <AlertTriangle className="text-secondary shrink-0" size={20} />
              <span className="text-muted-foreground">{p}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-display text-2xl font-bold text-accent"
        >
          Nós resolvemos com sofisticação.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default PainPoints;
