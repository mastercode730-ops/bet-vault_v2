import { waLink } from '@/lib/whatsapp';

const steps = [
  {
    n: '01',
    title: 'You message us',
    desc: "Tap the button, say hi. That's genuinely the whole first step — no account creation screen in sight.",
  },
  {
    n: '02',
    title: 'We ask the boring necessary stuff',
    desc: 'Your name, which platform you\'d like, roughly how much you\'re planning to deposit. Nothing you wouldn\'t tell a shopkeeper.',
  },
  {
    n: '03',
    title: 'Your ID lands in the same chat',
    desc: "No separate email, no app to download. It just shows up right where you're already talking to us.",
  },
  {
    n: '04',
    title: 'You deposit, you play',
    desc: 'UPI, net banking, or a wallet — pick one, add funds, and the first bet is entirely up to you.',
  },
];

export default function Journey() {
  const whatsappUrl = waLink("Hey Bet Vault, let's get started — walk me through it.");

  return (
    <section id="journey" className="section-dark py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mb-12 sm:mb-16">
          <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            How it actually goes
          </span>
          <h2 className="serif font-medium text-white mb-4" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>
            Four steps. We counted.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            This is the entire process, not the marketing version of it. Nothing is skipped here for effect.
          </p>
        </div>

        <div className="relative max-w-2xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px timeline-line" />
          <div className="flex flex-col gap-10 sm:gap-12">
            {steps.map((s) => (
              <div key={s.n} className="relative pl-14">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full timeline-dot flex items-center justify-center">
                  <span className="gold-text text-xs font-black">{s.n}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-1.5">{s.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold px-7 py-3.5 rounded-full text-sm sm:text-base font-bold"
          >
            Start Step One
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
