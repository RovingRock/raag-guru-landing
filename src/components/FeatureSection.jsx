import DeviceMockup from './DeviceMockup';
import useReveal from '../hooks/useReveal';
import { sectionCta } from '../data/content';

// Single alternating feature block.
// direction = 'left' (mockup on left) | 'right' (mockup on right)
export default function FeatureSection({ feature }) {
  const ref = useReveal({ stagger: 120 });
  const mockupOnLeft = feature.direction === 'left';

  return (
    <section
      ref={ref}
      id={feature.id}
      className="py-20 md:py-28 lg:py-36"
      aria-labelledby={`${feature.id}-title`}
    >
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div
          className={`reveal-child lg:col-span-6 ${
            mockupOnLeft ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <DeviceMockup
            device={feature.device}
            variant={feature.mockup}
            className={mockupOnLeft ? 'lg:-rotate-[2deg]' : 'lg:rotate-[2deg]'}
          />
        </div>

        <div
          className={`lg:col-span-6 ${
            mockupOnLeft ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'
          }`}
        >
          <p className="reveal-child eyebrow text-sm">{feature.eyebrow}</p>
          <h2
            id={`${feature.id}-title`}
            className="reveal-child mt-4 font-serif text-section md:text-section-lg text-ink"
          >
            {feature.title}
          </h2>
          <p className="reveal-child mt-6 max-w-prose text-xl leading-relaxed text-ink md:text-2xl">
            {feature.body}
          </p>

          {feature.bullets?.length > 0 && (
            <ul className="reveal-child mt-8 space-y-3.5">
              {feature.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-terracotta"
                  />
                  <span className="text-lg md:text-xl">{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="reveal-child mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <a href={sectionCta.href} className="btn-primary text-base">
              <span aria-hidden="true" className="mr-2 invisible">→</span>
              {sectionCta.label}
              <span aria-hidden="true" className="ml-2">→</span>
            </a>
            <span className="text-lg font-semibold text-ink md:text-xl">{sectionCta.helper}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
