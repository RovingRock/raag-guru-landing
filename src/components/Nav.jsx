import { brand, nav } from '../data/content';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label={`${brand.parent} presents ${brand.name}`}
        >
          <span
            aria-hidden="true"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 bg-cream font-serif text-xl font-semibold text-terracotta"
          >
            R
          </span>
          <span className="leading-tight">
            <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              {brand.parent} presents
            </span>
            <span className="block font-serif text-xl font-semibold text-ink md:text-2xl">
              {brand.name}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-ink/85 transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href={nav.cta.href} className="btn-primary !py-2.5 !px-6 text-sm">
            {nav.cta.label}
          </a>
        </nav>

        <a href={nav.cta.href} className="btn-primary !py-2 !px-4 text-sm md:hidden">
          Launch
        </a>
      </div>
    </header>
  );
}
