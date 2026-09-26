import { ExperienceItem } from "@/lib/types";

export default function ExperienceTimeline({
  items,
}: {
  items: ExperienceItem[];
}) {
  return (
    <ol className="border-l border-line">
      {items.map((item, i) => (
        <li key={`${item.organization}-${i}`} className="relative pb-10 pl-8 last:pb-0">
          <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border border-ink bg-paper" />

          <p className="font-mono text-xs text-ink-faint">{item.period}</p>
          <h3 className="mt-1 font-display text-lg text-ink">{item.role}</h3>
          <p className="text-sm text-ink-soft">{item.organization}</p>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-soft">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
