import { testimonials, testimonialsSection, sectionCta } from '../data/content';
import useReveal from '../hooks/useReveal';

export default function Testimonials() {
  const ref = useReveal({ stagger: 80 });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="bg-cream/50 py-24 md:py-32 lg:py-40"
      aria-labelledby="testimonials-title"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal-child eyebrow text-sm">{testimonialsSection.eyebrow}</p>
          <h2
            id="testimonials-title"
            className="reveal-child mt-4 font-serif text-section md:text-section-lg text-ink"
          >
            {testimonialsSection.title}
          </h2>
          <p className="reveal-child mt-6 text-xl text-ink md:text-2xl">
            {testimonialsSection.subhead}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <article key={t.name} className="reveal-child card-cream flex h-full flex-col">
              <blockquote className="font-serif italic text-lg leading-relaxed text-ink md:text-xl">
                <span aria-hidden="true" className="mr-1 text-terracotta">“</span>
                {t.quote}
                <span aria-hidden="true" className="ml-1 text-terracotta">”</span>
              </blockquote>

              <div className="mt-7 border-t border-gold/15 pt-5">
                <div className="font-serif text-lg font-semibold text-ink">{t.name}</div>
                <div className="mt-0.5 text-base text-ink/85">{t.title}</div>
                <div className="text-base text-ink/75">{t.subtitle}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  {t.location}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-child mt-16 flex flex-col items-center gap-3 text-center md:mt-20">
          <a href={sectionCta.href} className="btn-primary text-lg">
            {sectionCta.label}
            <span aria-hidden="true" className="ml-2">→</span>
          </a>
          <p className="text-lg font-semibold text-ink md:text-xl">{sectionCta.helper}</p>
        </div>
      </div>
    </section>
  );
}
