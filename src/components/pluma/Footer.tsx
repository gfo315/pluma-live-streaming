export function Footer() {
  return (
    <footer className="bg-pluma-cosmo border-t border-border px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-bold lowercase text-pluma-offwhite">
              pluma<sup className="text-xs font-medium">®</sup>
            </p>
            <p className="mt-3 text-sm text-pluma-offwhite/50 max-w-xs">
              Produtora audiovisual. Live streaming com direção cinematográfica.
            </p>
          </div>
          <address className="not-italic space-y-2 text-sm text-pluma-offwhite/70">
            <p>
              <a href="https://www.instagram.com/pluma.ag" target="_blank" rel="noopener noreferrer" className="pluma-underline hover:text-pluma-fluor">
                Instagram
              </a>
            </p>
            <p>WhatsApp: (21) 99894-9892</p>
            <p>CNPJ: 31.226.493/0001-06</p>
            <p>Rua Desembargador Izidro 145, Rio de Janeiro, RJ — CEP 20521-160</p>
          </address>
        </div>
        <p className="mt-12 border-t border-border pt-6 text-xs text-pluma-offwhite/40">
          © 2026 Pluma Agência e Produtora Audiovisual LTDA
        </p>
      </div>
    </footer>
  );
}
