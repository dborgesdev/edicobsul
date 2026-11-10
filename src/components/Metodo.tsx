import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Consultoria Técnica", desc: "Análise do local e projeto." },
  { n: "02", title: "Fabricação Própria", desc: "Qualidade controlada em cada solda." },
  { n: "03", title: "Instalação Master", desc: "Finalização impecável em tempo recorde." },
];

const Metodo = () => (
  <section className="py-24 bg-surface relative overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Nossa <span className="text-accent">Jornada</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-primary via-accent to-secondary opacity-30" />

        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="text-center relative"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full glass border-glow mb-6 relative z-10">
              <span className="font-display text-3xl font-bold text-primary">{step.n}</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Metodo;
