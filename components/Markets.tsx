import { waLink } from '@/lib/whatsapp';

const sports = [
  { icon: '🏏', name: 'Cricket' },
  { icon: '⚽', name: 'Football' },
  { icon: '🏀', name: 'Basketball' },
  { icon: '🎾', name: 'Tennis' },
  { icon: '🏒', name: 'Hockey' },
  { icon: '🎰', name: 'Casino' },
  { icon: '🃏', name: 'Teen Patti' },
  { icon: '🎲', name: 'Live Tables' },
];

export default function Markets() {
  const bannerWa = waLink("Hey Bet Vault, I'm ready to place my first bet — help me get set up.");

  return (
    <section id="markets" className="section-dark py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mb-10 sm:mb-12">
          <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            One login, several distractions
          </span>
          <h2 className="serif font-medium text-white mb-4" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>
            Cricket is the headline. It's not the whole show.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Tap whatever you're in the mood for — each one opens WhatsApp with a message already
            filled in, so you're not typing the same intro twice.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-14 sm:mb-16">
          {sports.map((sport) => (
            <a
              key={sport.name}
              href={waLink(`Hey Bet Vault, I want to bet on ${sport.name}. Can you help me get set up?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark inline-flex items-center gap-2.5 rounded-full pl-3 pr-5 py-2.5 group"
            >
              <span className="text-xl leading-none">{sport.icon}</span>
              <span className="text-white font-medium text-sm group-hover:text-yellow-400 transition-colors">
                {sport.name}
              </span>
            </a>
          ))}
        </div>

        <div
          className="relative rounded-3xl overflow-hidden border border-yellow-600/25 p-8 sm:p-12 md:p-16"
          style={{ background: 'linear-gradient(135deg, #191400 0%, #241C00 50%, #191400 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, #D4AF37 0%, transparent 55%), radial-gradient(circle at 85% 70%, #D4AF37 0%, transparent 55%)' }}
          />
          <div className="relative z-10 max-w-lg">
            <h3 className="serif font-medium text-white mb-4" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.1rem)', lineHeight: 1.2 }}>
              Your first bet is one message away.
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-7">
              Not a sales pitch — just an honest offer. Say hello, and we'll take it from there.
            </p>
            <a
              href={bannerWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold px-7 py-3.5 rounded-full text-sm sm:text-base font-bold"
            >
              Let's Do This
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
