import { motion } from "framer-motion";
import ambienteImg from "@/assets/ambiente_01.webp";

const Solutions = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden group"
        >
          <img
            src={ambienteImg}
            alt="Soluções sob medida edx3"
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Soluções Sob Medida
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Estruturas de{" "}
            <span className="text-primary">alto desempenho</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estruturas metálicas reforçadas com acabamento automotivo e telas de alta densidade.
            Cada projeto é calculado para máxima resistência e elegância.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Solutions;
