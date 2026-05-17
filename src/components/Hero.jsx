import { hero } from '../data/content';
import DeviceMockup from './DeviceMockup';
import useReveal from '../hooks/useReveal';

export default function Hero() {
  const ref = useReveal({ stagger: 120 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-cream/60 via-white to-white pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[-10%] w-[60%] opacity-[0.08]"
        viewBox="0 0 600 300"
        fill="none"
      >
        <path d="M0 200 Q150 50 300 200 T600 200" stroke="#9A7B50" strokeWidth="1.5" />
        <path d="M0 150 Q150 0 300 150 T600 150" stroke="#C05F2F" strokeWidth="1" />
      </svg>

      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="reveal-child eyebrow text-sm">{hero.eyebrow}</p>

          <h1 className="reveal-child mt-5 font-serif text-hero md:text-section-lg lg:text-hero-lg text-ink">
            {hero.headline}
          </h1>

          <p className="reveal-child mt-7 max-w-prose text-xl leading-relaxed text-ink md:text-2xl">
            {hero.subhead}
          </p>

          <div className="reveal-child mt-9">
            <a href={hero.primaryCta.href} className="btn-primary text-lg">
              <span aria-hidden="true" className="mr-2 invisible">→</span>
              {hero.primaryCta.label}
              <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>

          <p className="reveal-child mt-6 text-lg font-semibold text-ink md:text-xl">{hero.trust}</p>
        </div>

        <div className="reveal-child lg:col-span-5">
          <DeviceMockup device="phone" variant="gameplay" className="lg:rotate-[2deg]" />
        </div>
      </div>
    </section>
  );
}
