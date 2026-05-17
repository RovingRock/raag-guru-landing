import { useState } from 'react';
import { faq } from '../data/content';
import useReveal from '../hooks/useReveal';

export default function FAQ() {
  const ref = useReveal({ stagger: 60 });
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx((cur) => (cur === i ? null : i));

  return (
    <section
      ref={ref}
      id="faq"
      className="bg-cream py-24 md:py-32 lg:py-40"
      aria-labelledby="faq-title"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-title"
            className="reveal-child font-serif text-[2rem] leading-tight text-ink md:text-[3rem]"
          >
            {faq.title}
          </h2>
        </div>

        <ul className="mx-auto mt-14 max-w-3xl space-y-6 md:mt-16">
          {faq.items.map((item, i) => {
            const isOpen = openIdx === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <li
                key={item.q}
                className="reveal-child overflow-hidden rounded-card bg-white shadow-soft ring-1 ring-gold/15 transition-shadow hover:shadow-mockup"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-7"
                  >
                    <span className="font-sans text-[20px] font-bold leading-snug text-ink md:text-[21px]">
                      {item.q}
                    </span>
                    <Chevron open={isOpen} />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`}
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-6 font-sans text-[18px] leading-[1.6] text-ink md:px-8 md:pb-7">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Chevron({ open }) {
  return (
    <span
      aria-hidden="true"
      className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-gold/40 bg-cream transition-transform duration-300 ease-out-soft ${
        open ? 'rotate-180 border-terracotta bg-terracotta text-white' : 'text-ink'
      }`}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  );
}
