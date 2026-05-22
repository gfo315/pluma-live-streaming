import { WHATSAPP_URL } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-pluma-deep via-pluma-cosmo to-pluma-cosmo px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-pluma-offwhite md:text-6xl">
          Tem um evento ao vivo <span className="font-serif italic text-pluma-fluor">pra acontecer?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-pluma-offwhite/80">
          Conta pra gente o que você está planejando. Respondemos em até algumas horas em dia útil, com perguntas pra entender o evento antes de qualquer orçamento.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block rounded-lg bg-pluma-sky px-10 py-5 text-lg font-medium text-pluma-offwhite transition-all duration-300 hover:bg-pluma-sky/90 hover:shadow-2xl hover:shadow-pluma-sky/30"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
