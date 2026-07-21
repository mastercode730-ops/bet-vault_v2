'use client';

import { useState } from 'react';
import { waLink } from '@/lib/whatsapp';

const faqs = [
  {
    q: 'Is this actually legal for me to use?',
    a: "Betting laws vary quite a bit by state in India, and it's a genuinely confusing area. We operate under international licensing, like most platforms in this space, and we'd rather you check the specific rules where you live than take our word for it. Bet responsibly either way.",
  },
  {
    q: 'How fast is fast, really?',
    a: 'Most people have a working ID within five to ten minutes of their first message. We\'re not going to promise it\'s always instant — sometimes we\'re handling a few chats at once — but it\'s never a multi-day wait.',
  },
  {
    q: 'Can one ID cover more than cricket?',
    a: "Yes. Depending on setup, your ID can open up football, casino games, and a few other things, all through the same login. No separate account needed for each.",
  },
  {
    q: 'Is my money actually safe here?',
    a: "We work only with platforms using standard bank-level encryption and established payment gateways. Deposits are near-instant and withdrawals go through the same rails without artificial delays.",
  },
  {
    q: 'Which tournaments can I bet on?',
    a: "IPL, T20 World Cup, ODI series, Test matches, The Ashes, county cricket — if it's happening somewhere and it's cricket, chances are it's on the board.",
  },
  {
    q: "What is Bet Vault, in one sentence?",
    a: "A small team that sets up cricket betting IDs by hand over WhatsApp, instead of making you fill out a form and wait.",
  },
  {
    q: 'How do I actually sign up?',
    a: 'Message us. Share your name and a couple of basic details, and we handle the rest. No online forms, no waiting on email verification.',
  },
  {
    q: 'Why do I need an ID at all?',
    a: "It's your key into the platform — logging in, placing bets, tracking what you've won, claiming bonuses, all from one place.",
  },
  {
    q: 'How do deposits work?',
    a: 'Log in, head to deposits, pick UPI, net banking, or a wallet, enter the amount, confirm. Funds usually show up almost immediately.',
  },
  {
    q: 'And withdrawals?',
    a: 'Same channels as deposits. Once your account is verified, payouts move quickly — we don\'t sit on your winnings.',
  },
  {
    q: 'I forgot my password. Now what?',
    a: "Message us on WhatsApp. We verify it's actually you, then help reset it or recover the account. Usually sorted within minutes.",
  },
  {
    q: 'What are the actual rules I should know?',
    a: "You need to be 18 or older. One account per person. All placed bets are final. And genuinely — only bet what you're fine losing. That last one isn't just a disclaimer, we mean it.",
  },
];

export default function Questions() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const whatsappUrl = waLink("Hey Bet Vault, I've got a question that wasn't in your FAQ.");

  return (
    <section id="faq" className="section-dark py-16 sm:py-24">
      <div className="wrap max-w-3xl">
        <div className="max-w-xl mb-10 sm:mb-14">
          <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            Questions, answered plainly
          </span>
          <h2 className="serif font-medium text-white mb-4" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>
            Probably what you're wondering
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            If it's not here, that's genuinely fine — just ask us directly.
          </p>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-row">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left focus:outline-none group"
                aria-expanded={openIdx === idx}
              >
                <span className="text-white font-medium text-sm sm:text-base leading-snug group-hover:text-yellow-400 transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-yellow-600/40 flex items-center justify-center text-yellow-400 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-45 bg-yellow-600/20' : ''
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {openIdx === idx && (
                <p className="text-gray-400 text-sm leading-relaxed pb-5 max-w-xl">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center text-center gap-3">
          <p className="text-gray-500 text-sm">Still stuck on something? We're right here.</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp px-6 py-3 rounded-full text-sm font-bold"
          >
            <WhatsAppIcon />
            Just Ask Us
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}
