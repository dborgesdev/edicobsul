import { motion } from "framer-motion";
import heroImg from "@/assets/hero_principal.webp";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Sombreiros premium Edicob Sul"
        className="w-full h-full object-cover object-bottom"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 gradient-hero" />
    </div>

    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

    <div className="container mx-auto px-6 relative z-10 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-6 border-glow"
        >
          ✦ Líder em Sombreiros Premium
        </motion.span>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
          Solução completa em{" "}
          <span className="text-primary text-glow-primary">cobertura para estacionamentos</span>{" "}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          Projetos, fabricação e instalação de sombreiros com design moderno, alta resistência e durabilidade incomparável. 
          Feitos sob medida para valorizar sua residência, comércio ou empresa.
        </p>

        <motion.a
          href="https://wa.me/5541996351134?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-cta font-display font-bold text-lg text-foreground shadow-lg shadow-primary/25 transition-shadow hover:shadow-xl hover:shadow-primary/40"
        >
          Fale Conosco
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
        </motion.a>
      </motion.div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
