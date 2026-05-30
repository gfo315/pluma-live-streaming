const items = [
  { title: "Eventos corporativos", text: "Lançamentos, convenções, palestras internas. A gente entrega uma transmissão que sustenta a imagem da empresa." },
  { title: "Eventos culturais", text: "Shows, festivais, ativações em espaços culturais. Captação que vira material de arquivo, não só transmissão descartável." },
  { title: "Conteúdo institucional ao vivo", text: "Webinars, talks, lives recorrentes. Identidade visual consistente entre uma transmissão e outra." },
  { title: "Lançamentos de marca", text: "De mercado imobiliário ao mercado de moda ou acessórios, estamos preparados para o momento em que a sua marca se apresenta pro mundo. " },
];

export function ForWhom() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          Para quem é
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-xl bg-pluma-deep/40 p-8 transition-all duration-300 hover:bg-pluma-deep/60 md:p-10"
            >
              <h3 className="font-display text-2xl font-medium text-pluma-offwhite">{it.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-pluma-offwhite/70">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
