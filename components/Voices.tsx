const voices = [
  {
    name: 'Rohit M.',
    location: 'Mumbai',
    text: "Switched over after a bad run with another platform. My ID took maybe eight minutes, which felt suspiciously fast until I realized that's just how it works here.",
    tag: 'Cricket',
  },
  {
    name: 'Arjun K.',
    location: 'Chennai',
    text: "First time playing seriously was IPL 2026. One withdrawal took a bit longer than usual — but they messaged ME to explain why before I even asked. That mattered more than if it had gone perfectly.",
    tag: 'IPL',
  },
  {
    name: 'Priya S.',
    location: 'Hyderabad',
    text: "Was nervous about the whole thing, honestly. Someone walked me through it like I was asking a normal question, not like I was new to something they'd judge me for.",
    tag: 'Football',
  },
  {
    name: 'Vikram D.',
    location: 'Bangalore',
    text: "Three months in and I still just message them on WhatsApp for everything — deposits, questions, whatever. Never felt the need to look anywhere else.",
    tag: 'Casino',
  },
];

export default function Voices() {
  return (
    <section id="voices" className="section-paper py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mb-10 sm:mb-14">
          <span className="chip-dark inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            Not cherry-picked, we promise
          </span>
          <h2 className="serif font-medium mb-4" style={{ color: 'var(--charcoal)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>
            What people actually say
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--charcoal-soft)' }}>
            We left one of these in that mentions something going slightly wrong — because pretending
            nothing ever does would be a stranger claim than admitting it and telling you what happened next.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {voices.map((v, idx) => (
            <div key={idx} className="card-paper rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
              <p className="serif italic text-base sm:text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                "{v.text}"
              </p>
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(35,32,25,0.1)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--charcoal)' }}>{v.name}</div>
                  <div className="text-xs" style={{ color: 'var(--charcoal-soft)' }}>{v.location}</div>
                </div>
                <span className="chip-dark text-xs px-3 py-1 rounded-full whitespace-nowrap">{v.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
