import { waLink } from '@/lib/whatsapp';

export default function Story() {
  const whatsappUrl = waLink("Hey Bet Vault, I'd like to know more about the team.");

  return (
    <section id="story" className="section-paper py-16 sm:py-24">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="chip-dark inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
              Who's actually behind this
            </span>
            <h2 className="serif font-medium mb-6" style={{ color: 'var(--charcoal)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>
              We got tired of waiting on hold too.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--charcoal-soft)' }}>
              Bet Vault started in 2023 with a handful of us who were, frankly, sick of the platforms
              we were already using. Slow support tickets. Withdrawals that vanished into a black hole
              for days. Sign-up forms that asked for information no one needed.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--charcoal-soft)' }}>
              So a few of us — some who'd worked in payments, one who'd built support systems for a
              fintech, and a couple who just really, really watch a lot of cricket — decided to build
              the version we actually wanted to use.
            </p>

            <blockquote
              className="serif italic text-lg sm:text-xl my-8 pl-5 border-l-2"
              style={{ color: 'var(--charcoal)', borderColor: 'var(--gold)' }}
            >
              "If a message to us takes longer than five minutes to get a real reply, something's
              broken — and we go fix it."
            </blockquote>

            <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: 'var(--charcoal-soft)' }}>
              That's still more or less our whole philosophy. We're not the biggest name in this space
              and we're not trying to be — we'd rather stay small enough that when you message us,
              you're talking to someone who can actually do something about it.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-outline-dark px-6 py-3 rounded-full text-sm"
            >
              Say Hello
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3">
              {[
                { label: 'Started', value: '2023' },
                { label: 'People who trust us with real money', value: '3M+' },
                { label: 'Average time to a working ID', value: 'Under 5 min' },
                { label: 'Days a week someone is actually online', value: '7, all of them' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card-paper rounded-2xl px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-sm" style={{ color: 'var(--charcoal-soft)' }}>{stat.label}</span>
                  <span className="serif font-semibold text-lg sm:text-xl whitespace-nowrap gold-text">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
