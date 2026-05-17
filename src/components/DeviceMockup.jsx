// Stylised device frames (phone / tablet / laptop) using only Tailwind + inline SVG.
// `device` picks the chassis; `variant` picks the placeholder screen content.
// Swap any Screen* for a real <img> when the actual Swara Slam screenshots arrive.

const screens = {
  gameplay: GameplayScreen,
  score: ScoreScreen,
  levels: LevelsScreen,
  desktop: DesktopScreen
};

const frames = {
  phone: PhoneFrame,
  tablet: TabletFrame,
  laptop: LaptopFrame
};

export default function DeviceMockup({ device = 'phone', variant = 'gameplay', className = '' }) {
  const Frame = frames[device] ?? PhoneFrame;
  const Screen = screens[variant] ?? GameplayScreen;

  return (
    <div className={`relative mx-auto ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-terracotta/15 via-gold/10 to-transparent blur-3xl"
      />
      <Frame>
        <Screen />
      </Frame>
    </div>
  );
}

// --- Frames ----------------------------------------------------------------

function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px] md:w-[320px] aspect-[9/19] rounded-[2.6rem] bg-ink p-2.5 shadow-mockup ring-1 ring-black/20">
      <div className="absolute -left-[3px] top-24 h-12 w-[3px] rounded-l bg-ink/80" />
      <div className="absolute -left-[3px] top-40 h-20 w-[3px] rounded-l bg-ink/80" />
      <div className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r bg-ink/80" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] bg-cream">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-ink"
        />
        {children}
      </div>
    </div>
  );
}

function TabletFrame({ children }) {
  return (
    <div className="relative mx-auto w-[340px] sm:w-[420px] md:w-[480px] aspect-[3/4] rounded-[1.8rem] bg-ink p-3 shadow-mockup ring-1 ring-black/20">
      {/* Camera dot */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1.5 z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ink/50 ring-1 ring-white/10"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] bg-cream">
        {children}
      </div>
      {/* Home indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-1.5 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-ink/40"
      />
    </div>
  );
}

function LaptopFrame({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* Lid */}
      <div className="relative aspect-[16/10] rounded-[1.2rem] bg-ink p-3 shadow-mockup ring-1 ring-black/30">
        {/* Notch */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 z-20 h-3 w-20 -translate-x-1/2 rounded-b-lg bg-ink"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[0.6rem] bg-cream">
          {children}
        </div>
      </div>
      {/* Base / hinge */}
      <div
        aria-hidden="true"
        className="relative mx-auto h-3 w-[105%] -mt-[2px] rounded-b-[1rem] bg-gradient-to-b from-ink to-[#0f0e0c]"
      >
        <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-full bg-[#0a0908]" />
      </div>
    </div>
  );
}

// --- Screens ---------------------------------------------------------------

// Shuddha (natural) mapping from Devanagari to the English notation Swara Slam uses.
// Lowercase 'm' for Ma matches the app's actual rendering; capital variants
// (R/G/M/D/N) double as the tivra/komal alternates where applicable.
const SWARAS = [
  { deva: 'सा', eng: 'S' },
  { deva: 'रे', eng: 'R' },
  { deva: 'ग', eng: 'G' },
  { deva: 'म', eng: 'm' },
  { deva: 'प', eng: 'P' },
  { deva: 'ध', eng: 'D' },
  { deva: 'नि', eng: 'N' }
];

function GameplayScreen() {
  return (
    <div className="flex h-full flex-col px-5 pt-12 pb-6">
      <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-widest text-ink/70">
        <span>Level 3</span>
        <span>00:08</span>
      </div>

      <div className="mt-6 text-center">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Which swara?</div>
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {[1, 1, 1, 0.7, 0.4, 0.2, 0.1].map((h, i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-terracotta"
              style={{ height: `${10 + h * 28}px`, opacity: 0.55 + h * 0.45 }}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2.5">
        {SWARAS.map((s, i) => {
          const selected = i === 2;
          return (
            <div
              key={s.eng}
              className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-2 ${
                selected
                  ? 'bg-terracotta shadow-md'
                  : 'bg-white ring-1 ring-gold/20'
              }`}
            >
              <span
                className={`font-serif text-[16px] font-normal leading-none ${
                  selected ? 'text-white/85' : 'text-gold'
                }`}
              >
                {s.deva}
              </span>
              <span
                className={`font-sans text-[32px] font-bold leading-none ${
                  selected ? 'text-white' : 'text-ink'
                }`}
              >
                {s.eng}
              </span>
            </div>
          );
        })}
        <div className="col-span-2 flex aspect-[2/1] items-center justify-center rounded-xl bg-white text-[11px] font-medium uppercase tracking-widest text-ink/60 ring-1 ring-gold/20">
          Replay
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between text-[10px] text-ink/65">
        <span>Streak · 7</span>
        <span>Score · 124</span>
      </div>
    </div>
  );
}

function ScoreScreen() {
  return (
    <div className="flex h-full flex-col items-center px-5 pt-14 pb-6 text-center">
      <div className="eyebrow text-[10px]">Session complete</div>
      <div className="mt-5 font-serif text-[4rem] leading-none text-terracotta">92</div>
      <div className="-mt-1 text-xs font-medium uppercase tracking-widest text-ink/70">
        Accuracy
      </div>

      <div className="mt-8 w-full space-y-2.5 text-left">
        {[
          { deva: 'ग', eng: 'g', score: '8/8' },
          { deva: 'म', eng: 'M', score: '7/8' },
          { deva: 'ध', eng: 'D', score: '6/8' },
          { deva: 'नि', eng: 'N', score: '8/8' }
        ].map((s) => (
          <div
            key={s.eng}
            className="flex items-center justify-between rounded-lg bg-white px-3 py-2 ring-1 ring-gold/15"
          >
            <span className="flex items-baseline gap-1.5">
              <span className="font-serif text-sm font-normal text-gold">{s.deva}</span>
              <span className="font-sans text-base font-bold text-ink">{s.eng}</span>
            </span>
            <span className="text-xs font-medium text-gold">{s.score}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto w-full rounded-full bg-terracotta py-2.5 text-center text-xs font-medium tracking-wide text-white">
        Continue Riyaz
      </div>
    </div>
  );
}

function LevelsScreen() {
  const levels = [
    { name: 'Bilawal', deva: 'बिलावल', state: 'done' },
    { name: 'Yaman', deva: 'यमन', state: 'done' },
    { name: 'Bhairav', deva: 'भैरव', state: 'current' },
    { name: 'Marwa', deva: 'मारवा', state: 'locked' },
    { name: 'Todi', deva: 'तोड़ी', state: 'locked' }
  ];
  return (
    <div className="flex h-full flex-col px-5 pt-12 pb-6">
      <div className="eyebrow text-[10px]">Choose your raga</div>
      <h4 className="mt-1 font-serif text-xl text-ink">Hindustani</h4>

      <div className="mt-5 flex-1 space-y-2.5">
        {levels.map((l) => {
          const current = l.state === 'current';
          return (
            <div
              key={l.name}
              className={`flex items-center justify-between rounded-xl px-3.5 py-3 ring-1 ${
                current
                  ? 'bg-terracotta text-white ring-terracotta'
                  : 'bg-white text-ink ring-gold/15'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-6 w-6 rounded-full text-[10px] font-semibold flex items-center justify-center ${
                    l.state === 'done'
                      ? 'bg-gold/20 text-gold'
                      : current
                      ? 'bg-white/20 text-white'
                      : 'bg-ink/10 text-ink/50'
                  }`}
                >
                  {l.state === 'done' ? '✓' : current ? '▶' : '·'}
                </span>
                <span className="leading-tight">
                  <span
                    className={`block font-serif text-[10px] font-normal ${
                      current ? 'text-white/85' : 'text-gold'
                    }`}
                  >
                    {l.deva}
                  </span>
                  <span className="block font-sans text-sm font-bold">{l.name}</span>
                </span>
              </div>
              <span
                className={`text-[10px] uppercase tracking-widest ${
                  current ? 'text-white/85' : 'text-ink/55'
                }`}
              >
                {l.state}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg bg-cream px-3 py-2 text-[10px] text-ink/70 ring-1 ring-gold/15">
        Tip · komal notes count for double accuracy
      </div>
    </div>
  );
}

// Landscape dashboard screen for the laptop frame.
function DesktopScreen() {
  return (
    <div className="grid h-full grid-cols-[35%_1fr] gap-3 p-4 text-ink">
      {/* Left rail */}
      <aside className="flex flex-col rounded-md bg-white/80 p-3 ring-1 ring-gold/15">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full border border-gold/50 bg-cream font-serif text-[11px] font-semibold text-terracotta">
            R
          </span>
          <span className="font-serif text-[11px] text-ink">Swara Slam</span>
        </div>
        <div className="mt-3 text-[8px] uppercase tracking-[0.2em] text-gold">Today</div>
        <div className="mt-1 font-serif text-base leading-none text-ink">Yaman</div>

        <ul className="mt-3 space-y-1.5">
          {[
            { name: 'Bilawal', deva: 'बिलावल' },
            { name: 'Yaman', deva: 'यमन' },
            { name: 'Bhairav', deva: 'भैरव' },
            { name: 'Marwa', deva: 'मारवा' }
          ].map((r, i) => {
            const active = i === 1;
            return (
              <li
                key={r.name}
                className={`flex items-center justify-between rounded px-2 py-1 ${
                  active ? 'bg-terracotta/10 text-terracotta' : 'text-ink/80'
                }`}
              >
                <span className="leading-tight">
                  <span
                    className={`block font-serif text-[8px] font-normal ${
                      active ? 'text-terracotta/85' : 'text-gold'
                    }`}
                  >
                    {r.deva}
                  </span>
                  <span className="block font-sans text-[10px] font-bold">{r.name}</span>
                </span>
                <span className="text-[8px] uppercase tracking-widest">
                  {i === 0 ? '✓' : active ? '▶' : '·'}
                </span>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main area */}
      <section className="flex flex-col rounded-md bg-white/80 p-4 ring-1 ring-gold/15">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[8px] uppercase tracking-[0.2em] text-gold">Session</div>
            <div className="font-serif text-base text-ink">Accuracy</div>
          </div>
          <div className="font-serif text-3xl leading-none text-terracotta">92</div>
        </div>

        {/* Mini waveform */}
        <div className="mt-3 flex h-8 items-end gap-[3px]">
          {Array.from({ length: 32 }).map((_, i) => {
            const h = 20 + Math.abs(Math.sin(i * 0.6)) * 70;
            return (
              <span
                key={i}
                className="w-[3px] rounded-full bg-terracotta/70"
                style={{ height: `${h}%` }}
              />
            );
          })}
        </div>

        {/* Breakdown */}
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {[
            { deva: 'ग', eng: 'g', score: '8/8' },
            { deva: 'म', eng: 'M', score: '7/8' },
            { deva: 'ध', eng: 'D', score: '6/8' },
            { deva: 'नि', eng: 'N', score: '8/8' }
          ].map((s) => (
            <div
              key={s.eng}
              className="flex items-center justify-between rounded bg-cream px-2 py-1 ring-1 ring-gold/10"
            >
              <span className="flex items-baseline gap-1">
                <span className="font-serif text-[9px] font-normal text-gold">{s.deva}</span>
                <span className="font-sans text-[11px] font-bold text-ink">{s.eng}</span>
              </span>
              <span className="text-[9px] font-medium text-gold">{s.score}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between text-[8px] text-ink/65">
          <span>Streak · 12</span>
          <span className="rounded-full bg-terracotta px-2 py-0.5 text-[8px] font-medium text-white">
            Continue Riyaz
          </span>
        </div>
      </section>
    </div>
  );
}
