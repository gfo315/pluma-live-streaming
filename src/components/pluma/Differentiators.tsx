const blocks = [
  {
    title: "Direção muito além da técnica.",
    text: "Toda grande transmissão começa com uma direção bem definida. Antes do evento, mergulhamos no briefing para compreender seus objetivos, identificar os momentos mais importantes e planejar cada entrada, conteúdo e interação com o público.\n\nNo dia da transmissão, a direção é conduzida pela mesma equipe que participou desse planejamento. Essa continuidade garante decisões precisas em tempo real e a fidelidade ao conceito definido desde o início, transformando o briefing em uma experiência ao vivo executada com excelência.",
  },
  {
    title: "Orçamento sob medida, sem exageros.",
    text: "Cada evento exige soluções sob medida. Por isso, nossa recomendação nunca parte de um pacote padrão, mas dos objetivos, do formato e da experiência que se deseja proporcionar ao público.\n\nPropomos apenas o que realmente agrega valor ao projeto. Quando uma solução não se justifica, somos transparentes. Quando uma oportunidade pode elevar o resultado, fazemos a recomendação. Assim, cada decisão é orientada pela eficiência, pela estratégia e pelo melhor retorno para o seu investimento.",
  },
  {
    title: "Compromisso com a estética.",
    text: "Mais do que captar imagens, dirigimos a narrativa visual do seu evento. Cada enquadramento, movimento de câmera, escolha de lente, iluminação e ritmo de edição é pensado para valorizar a mensagem e manter o público envolvido.\n\nSão essas decisões, muitas vezes imperceptíveis, que transformam uma transmissão comum em uma experiência sofisticada, capaz de refletir a qualidade da sua marca e prender a atenção do início ao fim.",
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
              <p className="text-base leading-relaxed text-pluma-offwhite/80 md:col-span-7 md:text-lg text-justify">
                {b.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
