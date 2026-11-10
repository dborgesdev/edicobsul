import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProp from "@/components/ValueProp";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import Diferenciais from "@/components/Diferenciais";
import Metodo from "@/components/Metodo";
import Servicos from "@/components/Servicos";
import Comparativo from "@/components/Comparativo";
import Immersive from "@/components/Immersive";
import Branding from "@/components/Branding";
import Localizacao from "@/components/Localizacao";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Header />
    <HeroSection />
    <ValueProp />
    <PainPoints />
    <Solutions />
    <Immersive />
    <Diferenciais />
    <Branding />
    <Metodo />
    <Servicos />
    <Comparativo />
    <Localizacao />
    <CtaFinal />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
