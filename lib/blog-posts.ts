export type BlogSection = {
  heading?: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  icon: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'reading-the-pitch-ipl-2026',
    category: 'Cricket',
    icon: '🏏',
    title: 'Reading the pitch: what we actually look at before an IPL bet',
    excerpt:
      "Not a magic formula — just the handful of things our regulars check before they put money on an IPL match, in the order they check them.",
    image: '/blog/cricket.svg',
    readTime: '6 min read',
    sections: [
      {
        body: "Every IPL season, someone asks us for \"the system\" — like there's a spreadsheet somewhere that predicts winners. There isn't. But there is a rough checklist a lot of our more consistent members run through, and it's boring enough that we figured we'd just write it down.",
      },
      {
        heading: 'Start with the toss, not the team sheet',
        body: "Before you even look at who's playing, check what the toss decision was and why. A captain choosing to bowl first at a ground known for evening dew is telling you something. So is a captain batting first on a pitch that's already cracking by day three of the tournament. The toss often matters more than people give it credit for.",
      },
      {
        heading: "Powerplay numbers, not season averages",
        body: "A team's overall run rate hides a lot. Some teams come out swinging in the first six overs and fade after; others build slowly and explode in the death overs. If you're only looking at season-long averages, you're missing the part of the game that decides most short-format matches.",
      },
      {
        heading: 'Who actually struggles against whom',
        body: "Head-to-head records between a specific bowler and a specific batter tell you more than most people expect. A team's best batter can look ordinary against a bowler with the right variation, and that kind of match-up data is worth ten minutes of searching before you commit to anything.",
      },
      {
        heading: 'Decide your unit size before the season, not during it',
        body: "This one has nothing to do with cricket and everything to do with not doing anything silly. Pick a fixed amount you're comfortable playing per match and stick to it. The moment you start increasing bets to chase a bad week is the moment a good season turns into a forgettable one.",
      },
      {
        heading: 'Watch the first few overs before playing live',
        body: "Pre-match odds already price in everything that's public knowledge. What they can't price in is a pitch playing flatter than expected, or a bowler visibly not moving well in the first over. Waiting five minutes before placing a live bet can genuinely change the value you're getting.",
      },
      {
        body: "None of this guarantees anything — cricket has a way of humbling anyone who thinks they've solved it. But going in with a bit of a process beats going in on a hunch, and if you want your ID sorted before the next match starts, we're one message away.",
      },
    ],
  },
  {
    slug: 'an-id-in-five-minutes',
    category: 'Guides',
    icon: '⚡',
    title: 'Getting an ID in five minutes, not five days',
    excerpt:
      "We time ourselves on this one, honestly. Here's exactly what happens between your first message and your first bet.",
    image: '/blog/id-setup.svg',
    readTime: '4 min read',
    sections: [
      {
        body: "\"How long does this actually take?\" is probably the question we get asked the most, so instead of answering it vaguely again, here's the whole process laid out, step by step.",
      },
      {
        heading: 'You say hi',
        body: "Tap the WhatsApp button, wherever you found it on this site, and send whatever message feels natural. \"Hi\" works fine. There's no form behind it — you're talking to a person from the first message.",
      },
      {
        heading: 'We ask a few things, none of them weird',
        body: "Name, which platform you'd like access to, and roughly how much you're thinking of depositing. That's genuinely it. We never ask for banking passwords, OTPs, or ID documents over chat, and anyone who does isn't us.",
      },
      {
        heading: 'Your login shows up in the same chat',
        body: "Within a few minutes, you'll get an ID and password, right there in WhatsApp. That single ID gets you into cricket, football, casino games, and whatever else you're curious about.",
      },
      {
        heading: 'You deposit and you\'re playing',
        body: "UPI, net banking, or a wallet — whichever you prefer. Money usually reflects almost instantly, so there's no awkward gap between signing up and actually placing a bet.",
      },
      {
        heading: 'A couple of things that make it smoother',
        body: "Save your ID and password somewhere you won't lose them. Double-check your UPI ID before confirming a deposit. And if anything at all goes sideways, just message us — we're around at 2pm and 2am equally.",
      },
      {
        body: "That's the entire process, start to finish. We know \"five minutes\" sounds like a marketing number, but genuinely, time yourself.",
      },
    ],
  },
  {
    slug: 'where-did-my-withdrawal-go',
    category: 'Payments',
    icon: '💰',
    title: "Where did my withdrawal go? (and how to make sure it doesn't happen)",
    excerpt:
      'Slow withdrawals are the single biggest complaint about platforms in general. Here is what actually causes the delay, and how to avoid it.',
    image: '/blog/payments.svg',
    readTime: '5 min read',
    sections: [
      {
        body: "If you've used a different platform before Bet Vault, there's a decent chance you've experienced a withdrawal that just... sat there. We built our payment process specifically to not do that, but it helps to understand what's actually happening behind the scenes.",
      },
      {
        heading: 'What happens when you hit withdraw',
        body: "Your request comes to our team, gets checked against your account details, and goes out through whichever method you used to deposit. Most withdrawals clear within minutes; a busier match day might push that to a couple of hours.",
      },
      {
        heading: 'The methods we actually support',
        body: "UPI, net banking, and the major wallets. UPI is consistently the fastest — it's rare for a UPI withdrawal to take more than fifteen minutes once it's approved.",
      },
      {
        heading: "What actually causes delays",
        body: "Almost every delayed withdrawal we've looked into comes down to one of two things: a mismatched account detail, or a request made during an unusually busy stretch, like right after a big match ends and everyone cashes out at once. Double-checking your details before submitting solves most of it.",
      },
      {
        heading: 'On security, briefly',
        body: "Every transaction runs through standard bank-level encryption and we don't store payment credentials in plain text. If you're ever unsure about the status of a withdrawal, ask — we can check it in real time, not \"within 24-48 hours.\"",
      },
      {
        body: "If a withdrawal ever feels slower than it should, don't just wait it out — message us. A real person looks at it immediately, not an automated ticket queue that emails you three days later.",
      },
    ],
  },
  {
    slug: 'football-without-the-jargon',
    category: 'Football',
    icon: '⚽',
    title: 'Football, minus the jargon',
    excerpt:
      "Match winner, over/under, both teams to score — the handful of markets worth understanding before your first football bet, explained like we'd explain it to a friend.",
    image: '/blog/football.svg',
    readTime: '5 min read',
    sections: [
      {
        body: "Football markets can look intimidating at first — there's a lot of terminology thrown around like everyone's supposed to already know it. Here's the short version, without the jargon.",
      },
      {
        heading: 'Match winner (also called 1X2)',
        body: "The simplest possible bet: home win, draw, or away win. Nothing clever about it, and it's genuinely the best place to start before touching anything more complicated.",
      },
      {
        heading: 'Over/under goals',
        body: "This one isn't about who wins — it's about the total number of goals in the match. A common line is 2.5, and you're predicting whether the combined score ends up above or below that.",
      },
      {
        heading: 'Both teams to score',
        body: "Exactly what it sounds like. A simple yes or no on whether both sides find the net at some point, regardless of who actually wins the match.",
      },
      {
        heading: 'Asian handicap',
        body: "This one gives a virtual head start (or deficit) to one team, which evens things out when there's a clear favourite. It tends to offer better value than a plain match-winner bet in lopsided fixtures.",
      },
      {
        heading: 'Correct score and accumulators',
        body: "For when you're feeling confident: correct score bets and accumulators (stacking multiple picks into one bet) pay out more, but every single leg has to land for an accumulator to win — so the risk goes up fast.",
      },
      {
        body: "Start with match winner and over/under while you get a feel for how a team actually plays, then branch out once you're reading form comfortably. All of it is available the moment your ID is active.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
