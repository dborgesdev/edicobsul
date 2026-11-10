import { useState } from "react";
import { motion } from "framer-motion";
import beforeImg from "@/assets/comparativo_before.webp";
import afterImg from "@/assets/comparativo_after.webp";

const Comparativo = () => {
  const [pos, setPos] = useState(50);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Transformação <span className="text-accent">Radical</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden h-[400px] md:h-[500px] cursor-col-resize select-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPos(((e.clientX - rect.left) / rect.width) * 100);
          }}
          onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const touch = e.touches[0];
            setPos(((touch.clientX - rect.left) / rect.width) * 100);
          }}
        >
          {/* After (full background) */}
          <img src={afterImg} alt="Depois - Conforto edx3" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          
          {/* Before (clipped) */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src={beforeImg} alt="Antes - Exposição Total" className="w-full h-full object-cover" loading="lazy" />
          </div>

          {/* Slider line */}
          <div className="absolute top-0 bottom-0 w-1 bg-foreground/80 shadow-lg" style={{ left: `${pos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-foreground flex items-center justify-center shadow-lg">
              <span className="text-background text-xs font-bold">↔</span>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-lg glass text-sm font-semibold text-secondary">
            Exposição Total
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-lg glass text-sm font-semibold text-primary">
            Conforto edX3
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparativo;
