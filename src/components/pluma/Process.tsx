const steps = [
  { n: "01", title: "Conversa inicial", text: "Você manda mensagem no WhatsApp contando o evento. A gente responde com perguntas, não com orçamento de tabela." },
  { n: "02", title: "Proposta sob medida", text: "Depois de entender o evento, montamos uma proposta com o que faz sentido. Sem encher de item pra inflar valor." },
  { n: "03", title: "Planejamento técnico e criativo", text: "Antes do dia, alinhamos câmeras, plataformas, decupagem, e plano de contingência. Você sabe o que vai acontecer antes de acontecer." },
  { n: "04", title: "Transmissão e entrega", text: "Dirigimos a live ao vivo. No fim, você recebe os arquivos de gravação pra usar como quiser." },
];

export function Process() {
  return (
    <section id="processo" className="bg-pluma-cosmo px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          Como funciona
        </h2>
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="font-display text-5xl font-bold text-pluma-fluor md:text-6xl">{s.n}</span>
              <h3 className="mt-5 font-display text-xl font-medium text-pluma-offwhite">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-pluma-offwhite/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
