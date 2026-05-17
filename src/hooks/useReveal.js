import { useEffect, useRef } from 'react';

// Adds `.is-visible` to elements with `.reveal` once they enter the viewport.
// Staggers child elements with `.reveal-child` by 100ms each.
export default function useReveal({ stagger = 100 } = {}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.matches?.('.reveal')
      ? [root, ...root.querySelectorAll('.reveal-child')]
      : root.querySelectorAll('.reveal, .reveal-child');

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.dataset.revealDelay ?? 0);
          if (delay) {
            el.style.transitionDelay = `${delay}ms`;
          }
          el.classList.add('is-visible');
          observer.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );

    let childIndex = 0;
    targets.forEach((el) => {
      if (el.classList.contains('reveal-child')) {
        el.dataset.revealDelay = String(childIndex * stagger);
        childIndex += 1;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [stagger]);

  return rootRef;
}
