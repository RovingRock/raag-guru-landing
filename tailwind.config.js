/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: '#C05F2F',
        gold: '#9A7B50',
        ink: '#1C1A17',
        cream: '#F9F7F2'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // Mobile-first, paired with sm:/md:/lg: in components.
        hero: ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'hero-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        section: ['2rem', { lineHeight: '1.2' }],
        'section-lg': ['3rem', { lineHeight: '1.15' }]
      },
      borderRadius: {
        card: '12px'
      },
      boxShadow: {
        soft: '0 10px 40px -20px rgba(28, 26, 23, 0.18)',
        mockup: '0 30px 80px -30px rgba(28, 26, 23, 0.35)'
      },
      maxWidth: {
        prose: '36rem',
        content: '72rem'
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};
