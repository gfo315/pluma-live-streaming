import { WHATSAPP_URL } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center overflow-hidden md:min-h-screen"
    >
      {/* Animated gradient placeholder for future hero video [REEL_PLUMA_HERO.mp4] */}
      <div className="pluma-hero-gradient absolute inset-0" aria-hidden="true" />
      {/* Future video overlay (40% opacity over video when added) */}
      <div className="absolute inset-0 bg-pluma-cosmo/40" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 lg:px-10">
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-pluma-offwhite md:text-7xl lg:text-8xl">
          Live streaming com<br />
          <span className="font-serif italic text-pluma-fluor">estrutura cinematográfica.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pluma-offwhite/80 md:text-xl">
          {" "}
        </p>

        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-pluma-sky px-8 py-4 text-base font-medium text-pluma-offwhite transition-all duration-300 hover:bg-pluma-sky/90 hover:shadow-xl hover:shadow-pluma-sky/30"
          >
            Falar no WhatsApp
          </a>
          <a href="#processo" className="pluma-underline text-base text-pluma-offwhite/90 hover:text-pluma-fluor">
            Ver como trabalhamos
          </a>
        </div>
      </div>
    </section>
  );
}
