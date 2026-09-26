export default function Hero() {
  return (
    <section id="top" className="section pb-16 pt-16 sm:pt-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-8">
          <p className="mb-5 text-sm text-ink-soft">Business × Technology × Product</p>

          <h1 className="font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
            Hakhong
          </h1>

          <p className="mt-4 font-display text-xl italic text-ink-soft sm:text-2xl">
            Digital Business Graduate
          </p>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
            I'm interested in how business, technology, and product work
            come together to build digital solutions that hold up in the
            real world. I graduated in Digital Business from the Cambodia
            Academy of Digital Technology, and I'm early in my path —
            currently exploring product thinking, digital strategy, and
            practical AI, one project at a time.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              Explore my work
            </a>
            <a href="#ai-search" className="btn-secondary">
              Search with AI
            </a>
          </div>
        </div>

        <div className="hidden lg:col-span-4 lg:flex lg:items-end">
          <dl className="w-full border-l border-line pl-6 text-sm">
            <div className="pb-4">
              <dt className="text-ink-faint">Background</dt>
              <dd className="mt-1 text-ink">Digital Business, Cambodia Academy of Digital Technology</dd>
            </div>
            <div className="border-t border-line pt-4">
              <dt className="text-ink-faint">Focus</dt>
              <dd className="mt-1 text-ink">Product, digital strategy, applied AI</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
