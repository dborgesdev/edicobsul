import { motion } from "framer-motion";
import bgImg from "@/assets/hero-top.webp";

const Immersive = () => (
  <section className="relative h-[70vh] md:h-[60vh] flex items-center overflow-hidden">
    {/* Background com ancoragem na base */}
    <div className="absolute inset-0">
      <img 
        src={bgImg} 
        alt="Ambiente premium" 
        className="w-full h-full object-cover object-bottom" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent backdrop-blur-[2px]" />
    </div>

    {/* Conteúdo Alinhado à Esquerda */}
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
        >
          A elegância que o seu <br />
          estacionamento <span className="text-primary text-glow-primary">exige.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          A <span className="text-white font-medium">Edicob Sul</span> é especialista em coberturas para estacionamentos modernas, 
          duráveis e personalizadas para condomínios, empresas e comércios. Unimos engenharia de ponta, mão de obra especializada e 
          materiais de alta qualidade, garantindo segurança, estética superior e valorização imediata 
          com instalação rápida e acabamento profissional.
        </motion.p>
      </div>
    </div>
  </section>
);

export default Immersive;