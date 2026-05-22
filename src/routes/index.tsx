import { createFileRoute } from "@tanstack/react-router";
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

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://live.pluma.ag/#organization",
      name: "Pluma Agência e Produtora Audiovisual",
      alternateName: "Pluma",
      url: "https://live.pluma.ag",
      logo: "https://live.pluma.ag/logo.png",
      image: "https://live.pluma.ag/og-image.jpg",
      description:
        "Produtora audiovisual especializada em live streaming com direção cinematográfica. Atendimento boutique para eventos corporativos, culturais e institucionais no Rio de Janeiro e São Paulo.",
      telephone: "+5521998949892",
      email: "contato@pluma.ag",
      taxID: "31.226.493/0001-06",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Desembargador Izidro 145",
        addressLocality: "Rio de Janeiro",
        addressRegion: "RJ",
        postalCode: "20521-160",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Rio de Janeiro" },
        { "@type": "City", name: "São Paulo" },
      ],
      sameAs: ["https://www.instagram.com/pluma.std"],
      knowsAbout: [
        "Live streaming",
        "Transmissão ao vivo multicâmera",
        "Direção de transmissão",
        "Produção audiovisual",
        "Eventos corporativos",
        "Eventos culturais",
        "Streaming multi-plataforma",
        "Tradução simultânea audiovisual",
      ],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Live Streaming com Direção Cinematográfica",
          serviceType: "Transmissão ao vivo audiovisual",
          description:
            "Serviço de live streaming com direção integrada, captação multicâmera, transmissão simultânea em múltiplas plataformas, suporte multi-idioma e gravação master.",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://live.pluma.ag/#service",
      name: "Live Streaming Pluma",
      provider: { "@id": "https://live.pluma.ag/#organization" },
      areaServed: [
        { "@type": "City", name: "Rio de Janeiro" },
        { "@type": "City", name: "São Paulo" },
      ],
      serviceType: "Live streaming audiovisual",
      description:
        "Live streaming com direção cinematográfica. Captação multicâmera, transmissão multi-plataforma simultânea no YouTube, Instagram e LinkedIn, suporte multi-idioma, gravação em qualidade master, internet redundante e equipe técnica liderada por diretor de transmissão com 5 a 10 anos de experiência.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tipos de eventos atendidos",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live streaming para eventos corporativos" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live streaming para eventos culturais" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live streaming para webinars e conteúdo institucional" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live streaming para lançamentos de marca" } },
        ],
      },
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "A Pluma atende fora do Rio de Janeiro?", acceptedAnswer: { "@type": "Answer", text: "Sim. A Pluma opera no Rio de Janeiro e em São Paulo. Para eventos em outras capitais brasileiras, o orçamento inclui deslocamento da direção e equipe técnica." } },
    { "@type": "Question", name: "Quanto tempo de antecedência é necessário pra fechar um live streaming com a Pluma?", acceptedAnswer: { "@type": "Answer", text: "O ideal é de duas a quatro semanas de antecedência, principalmente para eventos que envolvem mais de duas câmeras ou tradução simultânea. Eventos de última hora são analisados caso a caso." } },
    { "@type": "Question", name: "A Pluma fornece internet para a transmissão?", acceptedAnswer: { "@type": "Answer", text: "Sim. Para eventos críticos, a Pluma leva internet redundante com link principal e backup, garantindo que a transmissão não caia durante o evento ao vivo." } },
    { "@type": "Question", name: "O cliente recebe a gravação do evento depois?", acceptedAnswer: { "@type": "Answer", text: "Sim. A Pluma entrega os arquivos master da gravação no fim do evento ou em até 48 horas, dependendo do caso." } },
    { "@type": "Question", name: "A Pluma cobre eventos com múltiplos dias de programação?", acceptedAnswer: { "@type": "Answer", text: "Sim. Convenções, festivais e eventos com programação contínua estão dentro do escopo de atuação da Pluma." } },
    { "@type": "Question", name: "Qual o ticket médio de um live streaming na Pluma?", acceptedAnswer: { "@type": "Answer", text: "O valor varia conforme o escopo do evento. Lives mais simples começam em uma faixa, eventos com várias câmeras e estrutura completa em outra. O orçamento é feito sob medida após conversa inicial pelo WhatsApp." } },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pluma | Live Streaming com Direção Cinematográfica — Rio de Janeiro e São Paulo" },
      { name: "description", content: "Live streaming com olhar de cinema. A Pluma transmite seu evento ao vivo com direção, decupagem e cuidado estético. Atendimento boutique no Rio de Janeiro e São Paulo." },
      { name: "keywords", content: "live streaming, transmissão ao vivo, produtora audiovisual, Rio de Janeiro, São Paulo, direção de transmissão, multicâmera, eventos corporativos, eventos culturais" },
      { property: "og:title", content: "Pluma | Live Streaming com Direção Cinematográfica" },
      { property: "og:description", content: "Transmissão ao vivo com direção, decupagem e cuidado estético. Sem cara de Zoom. Sem equipe genérica." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://live.pluma.ag" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://live.pluma.ag" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Playfair+Display:ital@1&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ORG_SCHEMA) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_SCHEMA) },
    ],
  }),
});

function Index() {
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
