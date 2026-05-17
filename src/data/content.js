// All editable copy for the Swara Slam landing page lives here.
// Tweak strings without hunting through component files.

export const brand = {
  name: 'Swara Slam',
  parent: 'Raag Guru',
  appUrl: 'https://swaraslam.raag.guru',
  parentUrl: 'https://raag.guru',
  supportEmail: 'support@raag.guru'
};

export const nav = {
  links: [
    { label: 'Features', href: '#anywhere' },
    { label: 'Voices', href: '#testimonials' }
  ],
  cta: { label: 'Launch Swara Slam', href: brand.appUrl }
};

export const hero = {
  eyebrow: 'Hindustani Classical at the core. Every genre of Indian music in our heart.',
  headline: 'Your Must-Have Riyaz Companion.',
  subhead:
    'Sharpen your musical ear with Swara Slam — a gamified ear training companion built on Sa Re Ga Ma Sargam notation. Practice anywhere, on any device.',
  primaryCta: { label: 'Launch Swara Slam', href: brand.appUrl },
  trust: 'Free to start · Works on any device · Built on Indian notation system.'
};

// Each feature alternates layout direction in the page.
// device: phone | tablet | laptop   variant: gameplay | score | levels | desktop
export const features = [
  {
    id: 'notation',
    eyebrow: 'Native Indian notation',
    title: 'Built on Sa Re Ga Ma — based on your comfortable scale.',
    body:
      'Most ear training apps flatten Indian music into a 12-tone Western grid. Swara Slam speaks the language your Guru taught you — komal, shuddha, tivra — and adapts to the scale that sits comfortably in your voice (swar pahchan — scale kaise pehchane — the way our tradition teaches it).',
    bullets: [
      'Devanagari and English alphabet notation Swara cards',
      'Komal and tivra variants handled natively',
      'Pick the scale that fits your voice, not the app’s'
    ],
    device: 'tablet',
    mockup: 'gameplay',
    direction: 'left'
  },
  {
    id: 'guru',
    eyebrow: 'Practice with intent',
    title: 'Like your Guru’s watchful ear — every time, everywhere.',
    body:
      'A Guru corrects as much as they guide, but they cannot be with you every hour of the day. Swara Slam catches pitch drift before bad habits settle, so every solitary session is one your Guru would be proud of. Some students say it is much more difficult than paltas — and that is exactly how you learn to sing raags with confidence.',
    bullets: [
      'Immediate feedback after each swara',
      'Tracks accuracy across sessions',
      'Aspirational scoring — built for serious practice'
    ],
    device: 'laptop',
    mockup: 'desktop',
    direction: 'right'
  },
  {
    id: 'anywhere',
    eyebrow: 'Zero friction',
    title: 'Practice anywhere — phone, laptop, even your TV browser.',
    body:
      'No app store, no account, no downloads. Open the link on whatever device is closest and slam a ten-minute riyaz before dinner — practical ear training for sargam, whether you want to learn how to identify notes in any song or just sharpen your daily riyaz. Full-screen capable, share scores with friends, return tomorrow.',
    bullets: [
      'Runs entirely in the browser',
      'Phone, tablet, laptop, smart TV',
      'Free to use — no friction, no sign-up'
    ],
    device: 'phone',
    mockup: 'levels',
    direction: 'left'
  }
];

// Reusable inline CTA shown after every major section.
export const sectionCta = {
  label: 'Launch Swara Slam',
  href: brand.appUrl,
  helper: 'Free to start · Works on any device · Built on Indian notation system.'
};

// Pulled verbatim from RAAG_GURU_CONTEXT.md content library.
export const testimonials = [
  {
    name: 'Priya Malhotra',
    title: 'Product Designer',
    subtitle: 'Bharatanatyam dancer',
    location: 'London, UK',
    quote:
      "I've tried every ear training app out there — they're all built for Western music. Raag Guru finally speaks my language. The Sa Re Ga Ma system is everything."
  },
  {
    name: 'Ajit Vaidya',
    title: 'Investment banking director',
    subtitle: 'Poet and lifelong music student',
    location: 'Singapore',
    quote:
      'My Guruji always said practice is only as good as your awareness. Swara Slam has sharpened my ear in ways I didn’t expect. This is serious musicianship disguised as a browser app.'
  },
  {
    name: 'Meera Chandra',
    title: 'Voice artist & jingle composer',
    subtitle: 'Hindustani vocal student',
    location: 'Dubai, UAE',
    quote:
      'Between work and family, I practice alone most days. Raag Guru is like having a patient teacher who catches my pitch drift before bad habits settle in.'
  },
  {
    name: 'Rohan Desai',
    title: 'Software engineer',
    subtitle: 'Weekend ghazal enthusiast',
    location: 'New York, USA',
    quote:
      'The fact that this runs on my TV browser changed everything. I can slam a 10-minute practice session before dinner and actually feel like I’m improving.'
  },
  {
    name: 'Kavya Iyer',
    title: 'Med student',
    subtitle: 'Carnatic vocalist',
    location: 'Toronto, Canada',
    quote:
      'Finally, a tool that understands what a komal note actually is. Most apps flatten Indian music into a 12-tone grid. This gets the nuance right.'
  },
  {
    name: 'Aarav Singh',
    title: 'Film editor',
    subtitle: 'Learning harmonium for bhajan',
    location: 'Sydney, Australia',
    quote:
      "I'm not a classical musician, but I respect the tradition. Raag Guru bridges that gap beautifully — it's serious without being intimidating."
  }
];

export const testimonialsSection = {
  eyebrow: 'Practitioners across 40+ countries',
  title: 'Voices from the diaspora.',
  subhead:
    'Students, professionals, and lifelong learners using Swara Slam for swar pahchan and ear training for sargam — learning how to identify swara of any song, wherever they live.'
};

// FAQ items pulled from RAAG_GURU_CONTEXT.md Section 2 (Standard FAQ).
// Template question filled in with Swara Slam-specific copy.
export const faq = {
  eyebrow: 'Common questions',
  title: 'Common Questions',
  items: [
    {
      q: 'What is Swara Slam?',
      a: "Swara Slam is a game-based swara identification challenge that tests your mastery of Indian Classical Music notes — a gamified ear training tool specialising in Indian music notation. It's designed to be fun and interactive — you listen, identify the swara, and rack up points as you progress through levels. Each level automatically adjusts difficulty with variations in taal (rhythm), tempo, and swara types (shuddha, komal, tivra). Think of it as your musical confidence builder — the more you play, the sharper your ear becomes."
    },
    {
      q: 'Do I need to install an app?',
      a: 'No installation required — Swara Slam runs entirely in your browser on any device (phone, computer, or smart TV). Just open the link and start playing. That said, if you want quick access, you can install it as a Progressive Web App (PWA) directly from your browser — no App Store or Play Store needed. One tap and it lives on your home screen like a native app. Zero downloads, zero hassle, zero friction.'
    },
    {
      q: 'Is this only for classical music students?',
      a: "Raag Guru's tools are rooted in Indian Classical Music, but they're designed for anyone learning any genre of Indian music — Bollywood, ghazals, bhajans, light classical, or even Western instruments in an Indian context. The ear training principles apply everywhere."
    },
    {
      q: 'How is this different from Western ear training apps?',
      a: "Most ear training apps are built on Western music theory — 12-tone equal temperament, Do Re Mi solfège, and staff notation. Raag Guru uses the Sa Re Ga Ma system and understands the microtonal nuances (komal, tivra) that define Indian music. Identifying notes in Sargam (Indian Solfège) requires training your ear to map the 7 basic swaras (Sa, Re, Ga, Ma, Pa, Dha, Ni) to specific pitches. The foundation involves establishing your root note (Sa), learning how the intervals sound, and utilizing visual tools for confirmation. It's built by musicians who know the tradition."
    },
    {
      q: 'Can I pick my own scale / sur?',
      a: "Yes. Swara Slam supports custom pitch selection so you can practice in your Guru's preferred scale or match your own tanpura or drone — useful when you are working out how to find Sa of any song. Pitch is deeply personal in the Indian tradition — passed down through the oral lineage — and Swara Slam respects that. Sa is wherever your Guru placed it."
    },
    {
      q: 'Does it work on my smart TV?',
      a: "Yes. Any modern smart TV with a web browser (Samsung, LG, Sony, etc.) can run Swara Slam in full-screen mode. Open the browser, navigate to swaraslam.raag.guru, sign in with your account, and you're ready to practice on the big screen. You can even install it as an app on supported TVs for one-tap access."
    },
    {
      q: 'Is there a cost?',
      a: 'Swara Slam operates on a freemium model. You get a free trial to explore the app and experience the core gameplay. After that, you can continue with limited free access or upgrade to unlock all levels, advanced ragas, and premium features. Our goal is to make serious music learning accessible while sustaining the tools we build.'
    }
  ]
};

export const footer = {
  tagline: 'Where tradition meets technology, and every practice session counts.',
  copyright: '© 2026 Raag Guru / Roving Rock — Built with reverence for the tradition.',
  links: [
    { label: 'Raag Guru', href: brand.parentUrl },
    { label: 'Contact', href: `mailto:${brand.supportEmail}` },
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' }
  ]
};
