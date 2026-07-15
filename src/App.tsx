import { Route, Routes } from "react-router-dom";
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
import { LocaleLayout } from "@/components/pluma/LocaleLayout";
import { RootRedirect } from "@/components/pluma/RootRedirect";
import { LandingSEO } from "@/components/pluma/LandingSEO";
import { PrivacyPage } from "@/components/pluma/PrivacyPage";

function LandingPage() {
  return (
    <div className="min-h-screen bg-pluma-cosmo text-pluma-offwhite">
      <LandingSEO />
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

export function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route element={<LocaleLayout />}>
        <Route path="/pt" element={<LandingPage />} />
        <Route path="/pt/politica-de-privacidade" element={<PrivacyPage lang="pt" />} />
        <Route path="/en" element={<LandingPage />} />
        <Route path="/en/privacy-policy" element={<PrivacyPage lang="en" />} />
      </Route>
      <Route path="*" element={<RootRedirect />} />
    </Routes>
  );
}
