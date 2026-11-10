import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Localizacao = () => (
  <section className="py-24 bg-surface relative overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Área de <span className="text-primary">Atendimento</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["Paraná", "Santa Catarina"].map((r) => (
          <span key={r} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xlfont-medium">
            {r}
          </span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass rounded-2xl p-8 border-glow text-center">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.190575268156!2d-49.21482650000001!3d-25.532028099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb607333a66d%3A0x5b4239a112baca58!2sedX3%20do%20Brasil%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1774883120859!5m2!1spt-BR!2sbr" 
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy" 
            title="Localização edX3 do Brasil"
            className="mb-6"
          >
          </iframe>
          <MapPin className="mx-auto text-primary mb-4" size={40} />
          <p className="text-lg font-medium mb-6">Rua Clevelândia, 152 - São José dos Pinhais - PR</p>
          <a
            href="https://maps.app.goo.gl/L4fRk9YZLmDzZJie9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border-glow text-primary hover:glow-primary transition-all duration-300 font-medium"
          >
            <MapPin size={18} />
            Ver no Google Maps
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Localizacao;
