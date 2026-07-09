import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = { q: string; a: string; note?: string };

const groups: { title: string; items: FAQItem[] }[] = [
  {
    title: "Logística e processo",
    items: [
      {
        q: "Atendem fora do Rio de Janeiro?",
        a: "Sim. Operamos no Rio de Janeiro e em São Paulo. Para eventos em outras capitais, o orçamento inclui deslocamento da direção e equipe técnica.",
      },
      {
        q: "Quanto tempo de antecedência precisam pra fechar um evento?",
        a: "O ideal é de duas a quatro semanas, principalmente pra eventos que envolvem mais de duas câmeras ou tradução. Eventos de última hora a gente analisa caso a caso.",
        note: "O ideal é contratar o serviço com pelo menos 15 dias de antecedência, para que possamos planejar todos os detalhes da operação. No entanto, também atendemos demandas com prazos reduzidos — em alguns casos, até 48 horas antes do evento — sempre sujeitos à disponibilidade da equipe e da estrutura necessária.",
      },
      {
        q: "Fazem cobertura de múltiplos dias?",
        a: "Sim. Convenções, festivais e eventos com programação contínua são parte do que fazemos.",
      },
      {
        q: "Vocês fazem só transmissão ou também produzem o evento presencial?",
        a: "A Pluma é produtora audiovisual focada em transmissão e captação, e trazemos parceiros de confiança para produzir o evento físico: cenografia, catering, hospitalidade, RSVP, etc.",
      },
    ],
  },
  {
    title: "Técnica e entrega",
    items: [
      {
        q: "Vocês fornecem internet?",
        a: "Sim. Para eventos críticos, levamos internet redundante (link principal mais backup) pra garantir que a transmissão não cai.",
      },
      {
        q: "O cliente recebe a gravação depois?",
        a: "Sim. Entregamos os arquivos master da gravação no fim do evento ou em até 48 horas, conforme o caso.",
      },
      {
        q: "Posso usar a gravação pra cortar em conteúdo depois?",
        a: "Sim, e é justamente um dos motivos da gente entregar a gravação em qualidade master. Muitos clientes usam a captação ao vivo como matéria-prima pra teasers, cortes pra redes sociais, e até peças institucionais. A Pluma também pode fazer essa edição pós-evento como serviço adicional, se for do interesse.",
      },
      {
        q: "Vocês operam com transmissões privadas ou só públicas?",
        a: "Os dois. Transmitimos em plataformas públicas (YouTube, Instagram, LinkedIn) e em ambientes privados (Vimeo OTT, plataformas corporativas, sites com login, eventos restritos por convite). Para conteúdo confidencial, configuramos o stream com a segurança necessária.",
      },
      {
        q: "E se o evento atrasar ou estender o horário?",
        a: "A proposta cobre uma duração estimada com margem de tolerância. Se o evento se estender significativamente além do previsto no dia, há uma hora adicional combinada previamente. A ideia é que você não tenha surpresa: tudo isso fica explícito na proposta antes de fechar. Nossa prioridade é garantir a entrega que você precisa, independente das naturais mudanças pelo caminho.",
      },
      {
        q: "Posso contratar só a captação, sem transmissão ao vivo?",
        a: "Sim. Se você quer apenas o registro em qualidade audiovisual pra usar depois, sem stream ao vivo, fazemos a captação multicâmera e entregamos o material editado ou bruto, como preferir. É um serviço comum pra eventos onde a transmissão não é necessária mas o conteúdo precisa virar peça depois.",
      },
    ],
  },
  {
    title: "Investimento",
    items: [
      {
        q: "Qual o ticket médio?",
        a: "Varia conforme o escopo. Para agilizar o orçamento, nos informe o local, duração e tipo de evento, bem como tudo o que deverá ser transmitido, e em quantas plataformas. Também conversaremos sobre disponibilidade de infraestrutura e quantidade de entregas pós-live. Caso você já tenha um valor em mente, também pode nos informar para alinhar expectativas e propor uma estrutura proporcional.",
      },
      {
        q: "O que está incluído no orçamento?",
        a: "A proposta inclui equipe técnica completa (direção, operadores e assistentes conforme o porte, com comunicação sem fio), equipamentos (câmeras, áudio, switcher, encoder), iluminação, internet redundante, configuração das plataformas de streaming, e os arquivos de gravação master ao fim do evento. Itens que variam conforme o evento, como cenografia, teleprompter, tradução simultânea ou deslocamento para outras cidades, são listados separadamente na proposta pra você ter clareza do que está pagando.",
      },
      {
        q: "Como funciona o pagamento?",
        a: "Trabalhamos com 50% de sinal na confirmação do projeto e 50% até o dia do evento. Para clientes recorrentes ou eventos de maior porte, é possível negociar diferentes condições. Emitimos nota fiscal em nome da Pluma.",
      },
      {
        q: "Vocês têm portfólio de transmissões pra eu ver?",
        a: "Temos. Como nem toda transmissão pode ser compartilhada publicamente (por confidencialidade do cliente ou por contrato), o portfólio de live streaming é apresentado em conversa, conforme o tipo de evento que você está planejando. Se você nos contar o que está pensando, conseguimos mostrar exemplos próximos.",
      },
    ],
  },
];

export function FAQ() {
  const [open, setOpen] = useState<string | null>("0-0");
  return (
    <section id="faq" className="bg-pluma-cosmo px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          Perguntas frequentes
        </h2>

        <div className="mt-14 space-y-14">
          {groups.map((group, gi) => (
            <div key={group.title}>
              <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-pluma-offwhite/40">
                {group.title}
              </h3>
              <div className="divide-y divide-border border-t border-border">
                {group.items.map((f, i) => {
                  const id = `${gi}-${i}`;
                  const isOpen = open === id;
                  return (
                    <div key={f.q}>
                      <button
                        onClick={() => setOpen(isOpen ? null : id)}
                        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-pluma-fluor"
                        aria-expanded={isOpen}
                      >
                        <div className="flex flex-col gap-2">
                          <h4 className="font-display text-lg font-medium text-pluma-offwhite md:text-xl">
                            {f.q}
                          </h4>
                          {f.note && (
                            <p className="text-sm leading-relaxed text-pluma-offwhite/60">
                              {f.note}
                            </p>
                          )}
                        </div>
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
                          <p className="pr-12 text-base leading-relaxed text-pluma-offwhite/70">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
