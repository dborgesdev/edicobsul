import { motion } from "framer-motion";

const Branding = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 gradient-hero opacity-50" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="font-display text-2xl md:text-4xl font-bold leading-relaxed mb-8">
          "Não entregamos apenas sombras, entregamos{" "}
          <span className="text-primary">tranquilidade</span> e{" "}
          <span className="text-accent">valor</span>."
        </p>
        <span className="text-muted-foreground font-display text-lg">— Edicob Sul</span>
      </motion.div>
    </div>
  </section>
);

export default Branding;
