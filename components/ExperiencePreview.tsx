import { experience } from "@/data/experience";
import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperiencePreview() {
  return (
    <section id="experience" className="section py-16 sm:py-20">
      <p className="text-sm text-ink-soft">Where I've been</p>
      <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
        Experience
      </h2>

      <div className="mt-10 max-w-2xl">
        <ExperienceTimeline items={experience} />
      </div>
    </section>
  );
}
