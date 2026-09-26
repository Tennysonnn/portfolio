"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — see README for where this will connect to a real
    // form-handling endpoint or email service.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line p-6">
        <h2 className="font-display text-lg text-ink">Thanks for reaching out.</h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-soft">
          This form isn't connected to email yet — for now, please reach me
          directly using the details on the left instead. Once a backend is
          in place, messages sent here will come straight to my inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm text-ink-soft">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-none border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          placeholder="What would you like to talk about?"
        />
      </div>

      <button type="submit" className="btn-primary">
        Send message
      </button>
    </form>
  );
}
