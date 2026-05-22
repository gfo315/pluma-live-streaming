import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--pluma-cosmo)]/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <a href="#top" className="font-display text-2xl font-bold lowercase tracking-tight text-pluma-offwhite">
          pluma<sup className="text-sm font-medium">®</sup>
        </a>
        <div className="flex items-center gap-6 md:gap-10">
          <ul className="hidden items-center gap-8 text-sm text-pluma-offwhite/80 md:flex">
            <li><a href="#fazemos" className="pluma-underline transition-colors hover:text-pluma-fluor">O que fazemos</a></li>
            <li><a href="#processo" className="pluma-underline transition-colors hover:text-pluma-fluor">Como funciona</a></li>
            <li><a href="#contato" className="pluma-underline transition-colors hover:text-pluma-fluor">Contato</a></li>
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-pluma-sky px-4 py-2 text-sm font-medium text-pluma-offwhite transition-all duration-300 hover:bg-pluma-sky/90 hover:shadow-lg hover:shadow-pluma-sky/20"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
