import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <section id="blog" className="section-dark py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-xl mb-10 sm:mb-14">
          <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            Things worth reading
          </span>
          <h2 className="serif font-medium text-white mb-4" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>
            We write these ourselves, actually.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            No filler, no listicle padding — just the stuff we'd tell you if you asked us in person.
          </p>
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="card-dark rounded-3xl overflow-hidden flex flex-col md:flex-row mb-6 sm:mb-8 group"
        >
          <div className="relative w-full md:w-1/2" style={{ aspectRatio: '16 / 9' }}>
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center gap-3 md:w-1/2">
            <div className="flex items-center gap-3">
              <span className="chip-gold text-xs px-3 py-1 rounded-full whitespace-nowrap">
                {featured.icon} {featured.category}
              </span>
              <span className="text-gray-500 text-xs">{featured.readTime}</span>
            </div>
            <h3 className="serif text-white font-medium text-xl sm:text-2xl leading-snug group-hover:text-yellow-400 transition-colors">
              {featured.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{featured.excerpt}</p>
            <span className="inline-flex items-center gap-1.5 text-yellow-400 font-semibold text-sm pt-1">
              Read the full thing
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </Link>

        {/* Rest */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="chip-gold text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    {post.icon} {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
