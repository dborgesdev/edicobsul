import { motion } from "framer-motion";
import servico01 from "@/assets/servico_01.webp";
import servico02 from "@/assets/servico_02.webp";
import servico03 from "@/assets/servico_03.webp";
import servico04 from "@/assets/servico_04.webp";

const items = [
  { title: "Condomínios", img: servico01, size: "large" as const },
  { title: "Empresas", img: servico02, size: "small" as const },
  { title: "Residências", img: servico03, size: "small" as const },
  { title: "Supermercados", img: servico04, size: "medium" as const },
];

const Servicos = () => (
  <section id="servicos" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Projetos de <span className="text-primary">Alto Nível</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
              item.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : item.size === "medium"
                  ? "md:col-span-2"
                  : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
            </div>
            <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-2xl transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Servicos;
