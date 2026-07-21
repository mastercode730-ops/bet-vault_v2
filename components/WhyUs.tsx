const points = [
  {
    title: 'We actually answer',
    desc: "Message us at 3am about a stuck withdrawal and a real person replies — not a bot reading from a script.",
    icon: 'chat',
  },
  {
    title: 'Set up fast, on purpose',
    desc: "Most IDs are ready in under five minutes because we don't make you fill out anything you don't need to.",
    icon: 'bolt',
  },
  {
    title: 'Your money moves like it should',
    desc: "UPI in, UPI out. No mysterious \"processing\" that somehow takes three business days.",
    icon: 'wallet',
  },
  {
    title: "We don't bury the bonus terms",
    desc: "There's a welcome bonus, sure. The conditions fit in one WhatsApp message, not a legal document.",
    icon: 'gift',
  },
  {
    title: 'One ID, a lot of doors',
    desc: "Cricket today, football Saturday, maybe a table game later if you're feeling it. Same login, every time.",
    icon: 'grid',
  },
  {
    title: 'Honest about the risk',
    desc: "Betting isn't a plan for rent money, and we'll say that plainly — every single time, not just in the footer.",
    icon: 'shield',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="section-paper py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mb-12 sm:mb-16">
          <span className="chip-dark inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            Why people stick around
          </span>
          <h2 className="serif font-medium mb-4" style={{ color: 'var(--charcoal)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>
            Nothing revolutionary. Just done properly.
          </h2>
          <p style={{ color: 'var(--charcoal-soft)' }} className="text-sm sm:text-base leading-relaxed">
            We're not going to tell you we reinvented online betting. We just got tired of platforms
            that made simple things difficult, so we built the version that doesn't.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((p, i) => (
            <div key={i} className="card-paper rounded-2xl p-6 flex flex-col gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(212,175,55,0.12)' }}
              >
                <Icon name={p.icon} />
              </div>
              <div>
                <h3 className="font-semibold mb-1.5 text-base" style={{ color: 'var(--charcoal)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal-soft)' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const common = { width: 20, height: 20, fill: 'none', stroke: '#A6852B', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24' };
  switch (name) {
    case 'chat':
      return <svg {...common}><path d="M4 4h16v12H8l-4 4V4Z" /><path d="M8 9h8M8 12h5" /></svg>;
    case 'bolt':
      return <svg {...common}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg>;
    case 'wallet':
      return <svg {...common}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><circle cx="16" cy="14" r="1.4" /></svg>;
    case 'gift':
      return <svg {...common}><rect x="3" y="9" width="18" height="4" /><rect x="5" y="13" width="14" height="8" /><path d="M12 9v12M12 9C10 5 6 5 6 8s3 1 6 1ZM12 9c2-4 6-4 6-1s-3 1-6 1Z" /></svg>;
    case 'grid':
      return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1.2" /><rect x="14" y="3" width="7" height="7" rx="1.2" /><rect x="3" y="14" width="7" height="7" rx="1.2" /><rect x="14" y="14" width="7" height="7" rx="1.2" /></svg>;
    case 'shield':
      return <svg {...common}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="M9 12l2 2 4-4" /></svg>;
    default:
      return null;
  }
}
