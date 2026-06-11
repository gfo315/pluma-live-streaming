import guidoPhoto from "@/assets/guido.webp";

export function About() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <img
            src={guidoPhoto}
            alt="Guido, diretor de transmissão da Pluma"
            loading="lazy"
            className="aspect-square w-full max-w-[400px] rounded-xl border border-border object-cover"
          />
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
            Quem dirige
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-pluma-offwhite/80">
            A direção de transmissão da Pluma é assinada por Guido. Diretor audiovisual com formação em cinema e 10 anos de projetos entregues.{"\n"}É comprometido com atendimento individualizado para tomar decisões criativas e técnicas de imagem e áudio, que garantem o melhor resultado final.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-pluma-offwhite/80">
            A Pluma une essa direção autoral à estrutura de uma produtora audiovisual completa.
          </p>
        </div>
      </div>
    </section>
  );
}
