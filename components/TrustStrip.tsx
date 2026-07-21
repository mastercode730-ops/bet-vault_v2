const items = [
  'Cricket', 'Football', 'Casino', 'Real payouts', 'Real people', 'No nonsense',
  'IPL', 'T20 leagues', 'Live odds', 'UPI in seconds',
];

export default function TrustStrip() {
  const loop = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-content text-yellow-500/90 font-semibold text-xs sm:text-sm uppercase tracking-widest">
        {loop.map((item, i) => (
          <span key={i} className="mx-5 sm:mx-7 inline-flex items-center gap-5 sm:gap-7">
            {item}
            <span className="text-yellow-700">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
