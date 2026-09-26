export default function AboutPreview() {
  return (
    <section id="about" className="border-t border-line bg-paper-dim">
      <div className="section grid grid-cols-1 gap-8 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-sm text-ink-soft">A little about me</p>
          <h2 className="mt-2 font-display text-3xl text-ink">About</h2>

          <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-ink-faint">Education</dt>
              <dd className="mt-1 text-ink">
                Cambodia Academy of Digital Technology
              </dd>
              <dd className="text-ink-faint">
                International Business — Digital Business
              </dd>
            </div>
            <div>
              <dt className="text-ink-faint">Focus areas</dt>
              <dd className="mt-1 text-ink">
                Digital strategy, product thinking, applied AI
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              I'm a recent Digital Business graduate from the Cambodia
              Academy of Digital Technology. My studies sat at the
              intersection of International Business and digital
              technology, which is where I first started paying attention
              to how business strategy and product decisions actually meet.
            </p>
            <p>
              My interest sits across three areas: business, technology, and
              product. I like thinking about a problem from a business
              angle — who it affects, what it costs, what success looks
              like — and then following it through to how a product or a
              piece of technology can actually address it.
            </p>
            <p>
              I'm early in my career, so I'd rather be upfront about that
              than overstate it: this portfolio is a starting point, built
              to grow as I take on more projects and responsibilities. Right
              now, I'm exploring product management fundamentals, digital
              strategy, and how AI tools are changing both.
            </p>
            <p>
              [Add more personal detail here — interests outside work, what
              motivates you, or anything else you'd like visitors to know.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
