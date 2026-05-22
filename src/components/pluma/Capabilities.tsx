import { Camera, Globe, Languages, HardDrive, Lightbulb, ShieldCheck, type LucideIcon } from "lucide-react";

type Item = { icon: LucideIcon; title: string; text: string };

const items: Item[] = [
  { icon: Camera, title: "Multicâmera", text: "Switching ao vivo com várias câmeras em direção integrada." },
  { icon: Globe, title: "Multi-plataforma", text: "Transmissão simultânea no YouTube, Instagram, LinkedIn e site próprio." },
  { icon: Languages, title: "Multi-idioma", text: "Faixas de áudio paralelas para tradução simultânea ou conteúdo bilíngue." },
  { icon: HardDrive, title: "Gravação master", text: "Você sai do evento com o material em qualidade de edição, pronto pra virar outros conteúdos." },
  { icon: Lightbulb, title: "Iluminação e som", text: "Setup pensado para o sentido do evento, não no piloto automático." },
  { icon: ShieldCheck, title: "Backup e redundância", text: "Internet, energia e equipamento com plano B montado antes do dia." },
];

export function Capabilities() {
  return (
    <section id="fazemos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          O que entregamos
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-xl border border-border bg-pluma-deep/40 p-8 transition-all duration-300 hover:border-pluma-sky/40 hover:bg-pluma-deep/60"
            >
              <Icon className="h-7 w-7 text-pluma-fluor transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-6 font-display text-xl font-medium text-pluma-offwhite">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-pluma-offwhite/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
