import { waLink } from '@/lib/whatsapp';

export default function Hero() {
  const whatsappUrl = waLink("Hey Bet Vault, I'd like to get my ID set up.");

  return (
    <section
      id="hero"
      className="section-dark relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 0%, rgba(212,175,55,0.14) 0%, transparent 55%), radial-gradient(ellipse at 85% 30%, rgba(212,175,55,0.08) 0%, transparent 50%)',
        }}
      />

      <div className="wrap relative">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 chip-gold rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
            Set up by a real person, not a form
          </div>

          <h1 className="serif font-medium text-white mb-6" style={{ fontSize: 'clamp(2.1rem, 5.5vw, 4rem)', lineHeight: 1.08 }}>
            IDs shouldn&apos;t feel like{' '}
            <span className="gold-text italic">opening a bank account.</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
            So we skipped the forms. Message us on WhatsApp, tell us what you need, and someone on
            our team gets your cricket ID sorted — usually before you&apos;ve finished your tea.
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-9 max-w-xl">
            No app to install. No twenty-question sign-up. Just cricket, football, and a few other
            things worth watching closely.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold px-7 py-3.5 rounded-full text-sm sm:text-base font-bold"
            >
              Get My ID on WhatsApp
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#journey"
              className="text-gray-400 hover:text-white text-sm font-medium underline underline-offset-4 decoration-gray-700 hover:decoration-yellow-500 transition-colors"
            >
              See how it actually works
            </a>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm">
            <span className="text-yellow-400 font-semibold">3 million+</span> people already do this.{' '}
            <span className="text-yellow-400 font-semibold">Under 5 minutes</span> to get set up.{' '}
            <span className="text-yellow-400 font-semibold">24/7</span>, actual humans reply.
          </p>
        </div>
      </div>
    </section>
  );
}
