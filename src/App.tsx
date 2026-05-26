import { Header } from "@/components/pluma/Header";
import { Hero } from "@/components/pluma/Hero";
import { Opening } from "@/components/pluma/Opening";
import { Capabilities } from "@/components/pluma/Capabilities";
import { Differentiators } from "@/components/pluma/Differentiators";
import { ForWhom } from "@/components/pluma/ForWhom";
import { Process } from "@/components/pluma/Process";
import { About } from "@/components/pluma/About";
import { FAQ } from "@/components/pluma/FAQ";
import { FinalCTA } from "@/components/pluma/FinalCTA";
import { Footer } from "@/components/pluma/Footer";
import { WhatsAppFloat } from "@/components/pluma/WhatsAppFloat";

export function App() {
  return (
    <div className="min-h-screen bg-pluma-cosmo text-pluma-offwhite">
      <Header />
      <main>
        <Hero />
        <Opening />
        <Capabilities />
        <Differentiators />
        <ForWhom />
        <Process />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
