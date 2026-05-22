const blocks = [
  {
    title: "Direção, não operação.",
    text: "Quem dirige a sua live também conversou com você. Antes do evento, sentamos pra entender o que precisa acontecer. Que mensagem o seu público precisa receber. Que momentos não podem ser perdidos. Que material pode virar conteúdo depois. No dia, quem está no switcher é a mesma pessoa que pensou a transmissão com você. Não é alguém que recebeu um briefing por WhatsApp duas horas antes.",
  },
  {
    title: "Critério em vez de catálogo.",
    text: "A gente sugere o que faz sentido. E o que não faz. Nem todo evento precisa de seis câmeras. Nem todo evento precisa de tradução simultânea. Nem todo evento precisa do orçamento mais caro. Quando você nos procura, a gente escuta a demanda e responde com o que realmente agrega. Se algo da sua proposta original não vale o investimento, a gente fala. Se algo que você não pediu pode mudar o resultado, a gente sugere.",
  },
  {
    title: "Estética como parte do trabalho.",
    text: "Direção de imagem, não só captação. Composição de plano, escolha de lente, temperatura de cor, ritmo de corte. As decisões que um diretor de fotografia toma num filme, a gente toma ao vivo, em tempo real. A diferença aparece em coisas que parecem pequenas: o enquadramento que sustenta a fala do palestrante sem cansar, o corte que respeita o tempo do silêncio, a luz que faz o produto parecer o que ele é. No fim, é o que separa uma live que prende quem está assistindo de uma que vira ruído de fundo.",
  },
];

export function Differentiators() {
  return (
    <section className="bg-gradient-to-b from-pluma-cosmo via-pluma-deep/30 to-pluma-cosmo px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          O que nos diferencia
        </h2>
        <div className="mt-16 space-y-20">
          {blocks.map((b) => (
            <article key={b.title} className="grid gap-8 border-t border-border pt-12 md:grid-cols-12 md:gap-12">
              <h3 className="font-display text-3xl font-medium leading-tight text-pluma-sky md:col-span-5 md:text-4xl">
                {b.title}
              </h3>
              <p className="text-base leading-relaxed text-pluma-offwhite/80 md:col-span-7 md:text-lg">
                {b.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
