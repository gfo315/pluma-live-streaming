import { Camera, Globe, Languages, HardDrive, ShieldCheck, ShoppingBag, type LucideIcon } from "lucide-react";

type Item = { icon: LucideIcon; title: string; text: string; badge?: string };

const items: Item[] = [
  { icon: Camera, title: "Multicâmera", text: "Switching ao vivo com várias câmeras em direção integrada." },
  { icon: Globe, title: "Multi-plataforma", text: "Transmissão simultânea no YouTube, Instagram, LinkedIn e site próprio." },
  { icon: Languages, title: "Multi-idioma", text: "Faixas de áudio paralelas para tradução simultânea ou conteúdo bilíngue." },
  { icon: HardDrive, title: "Gravação master", text: "Você sai do evento com o material em qualidade de edição, pronto pra virar outros conteúdos." },
  { icon: ShieldCheck, title: "Backup e redundância", text: "Internet, energia e equipamento com plano B montado antes do dia." },
  {
    icon: ShoppingBag,
    title: "Vendas de E-Commerce via Chat",
    text: "Configuração de sistema automatizado integrado com seu e-commerce para checkout a partir do chat do Instagram ou TikTok.",
    badge: "NOVO",
  },
];

export function Capabilities() {
  return (
    <section id="fazemos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          O que entregamos
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text, badge }) => (
            <article
              key={title}
              className="group relative rounded-xl border border-border bg-pluma-deep/40 p-8 transition-all duration-300 hover:border-pluma-sky/40 hover:bg-pluma-deep/60"
            >
              {badge && (
                <span className="absolute right-4 top-4 rounded-full border border-pluma-fluor/40 bg-pluma-fluor/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-pluma-fluor">
                  {badge}
                </span>
              )}
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
