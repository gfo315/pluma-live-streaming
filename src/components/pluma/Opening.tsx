import backstage1 from "@/assets/backstage-1.jpg";
import backstage3 from "@/assets/backstage-3.jpg";
import backstage4 from "@/assets/backstage-4.jpg";

export function Opening() {
  return (
    <section className="bg-pluma-cosmo px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16 lg:gap-20">
        <div className="md:col-span-6 md:sticky md:top-24 md:self-start">
          <p className="font-display text-3xl font-medium leading-tight text-pluma-offwhite md:text-4xl lg:text-5xl">
            Acreditamos que a sua live merece atenção a detalhes.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-pluma-offwhite/70 md:text-xl">
            Transmitindo ao vivo, não dá pra refazer a tomada e nem corrigir em pós. O público vai assistir a sua produção em tempo real.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-pluma-offwhite/70 md:text-xl">
            Por isso, a gente considera todos os detalhes e variáveis da sua demanda. Transmitimos com intenção e com direção. Com uma decupagem de tempos e movimentos pensada com antecedência, para controlar todas as possíveis variáveis.
          </p>
        </div>

        <div className="md:col-span-6">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img
              src={backstage1}
              alt="Direção de live streaming no switcher com múltiplas câmeras"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <img
              src={backstage3}
              alt="Operação de switcher durante transmissão ao vivo"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <img
              src={backstage4}
              alt="Sala de controle com mosaico de câmeras"
              loading="lazy"
              width={1280}
              height={1024}
              className="col-span-2 aspect-[16/10] w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
