import ContactForm from "./ContactForm";

export default function ContactCTA() {
  return (
    <section id="contact" className="section py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-sm text-ink-soft">Get in touch</p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Let's talk.
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Open to conversations about business, product, and technology —
            or opportunities to work together.
          </p>

          <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-ink-faint">Email</dt>
              <dd className="mt-1 text-ink">[add-your-email@example.com]</dd>
            </div>
            <div>
              <dt className="text-ink-faint">LinkedIn</dt>
              <dd className="mt-1 text-ink">[add-linkedin-url]</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Location</dt>
              <dd className="mt-1 text-ink">Cambodia</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
