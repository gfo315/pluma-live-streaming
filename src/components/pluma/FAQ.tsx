import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Atendem fora do Rio de Janeiro?", a: "Sim. Operamos no Rio de Janeiro e em São Paulo. Para eventos em outras capitais, o orçamento inclui deslocamento da direção e equipe técnica." },
  { q: "Quanto tempo de antecedência precisam pra fechar um evento?", a: "O ideal é de duas a quatro semanas, principalmente pra eventos que envolvem mais de duas câmeras ou tradução. Eventos de última hora a gente analisa caso a caso." },
  { q: "Vocês fornecem internet?", a: "Sim. Para eventos críticos, levamos internet redundante (link principal mais backup) pra garantir que a transmissão não cai." },
  { q: "O cliente recebe a gravação depois?", a: "Sim. Entregamos os arquivos master da gravação no fim do evento ou em até 48 horas, conforme o caso." },
  { q: "Fazem cobertura de múltiplos dias?", a: "Sim. Convenções, festivais e eventos com programação contínua são parte do que fazemos." },
  { q: "Qual o ticket médio?", a: "Varia conforme o escopo. Lives mais simples começam em uma faixa, eventos com várias câmeras e estrutura completa em outra. A melhor forma de saber é contar o evento pelo WhatsApp." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-pluma-cosmo px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          Perguntas frequentes
        </h2>
        <div className="mt-14 divide-y divide-border border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-pluma-fluor"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display text-lg font-medium text-pluma-offwhite md:text-xl">{f.q}</h3>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-pluma-fluor" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-pluma-fluor" strokeWidth={1.5} />
                  )}
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="pr-12 text-base leading-relaxed text-pluma-offwhite/70">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
