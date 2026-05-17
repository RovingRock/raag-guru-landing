import { brand, footer } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-white py-12 md:py-16">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-full border border-gold/50 bg-cream font-serif text-base font-semibold text-terracotta"
          >
            R
          </span>
          <span className="font-serif text-base text-ink">
            {brand.parent}
          </span>
        </div>

        <p className="max-w-md font-serif italic text-lg text-ink/85">
          {footer.tagline}
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base">
          {footer.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-medium text-ink/80 transition hover:text-terracotta"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-ink/65">{footer.copyright}</p>
      </div>
    </footer>
  );
}
