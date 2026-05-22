export function About() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <div
            className="aspect-square w-full max-w-[400px] rounded-xl bg-gradient-to-br from-pluma-deep to-pluma-lead flex items-center justify-center border border-border"
            role="img"
            aria-label="Foto de Guido, diretor de transmissão da Pluma"
          >
            <span className="font-mono text-sm text-pluma-offwhite/40">[FOTO_GUIDO]</span>
          </div>
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
            Quem dirige
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-pluma-offwhite/80">
            A direção de transmissão da Pluma é assinada por Guido. Diretor audiovisual com formação cinematográfica e entre 5 e 10 anos dirigindo transmissões ao vivo no Rio de Janeiro e São Paulo. Especializado em decisões técnicas de imagem e áudio que mudam o resultado final, sem precisar de equipe inflada.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-pluma-offwhite/80">
            A Pluma une essa direção autoral à estrutura de uma produtora audiovisual completa. <span className="font-serif italic text-pluma-fluor">Quem te atende é quem dirige. Quem dirige é quem pensa o evento com você.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
