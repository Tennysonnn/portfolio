import { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col border border-line bg-paper p-6 transition-colors hover:border-ink/25">
      <p className="text-xs uppercase tracking-wide text-brass-dim">
        {project.category}
      </p>
      <h3 className="mt-3 font-display text-xl text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {project.summary}
      </p>

      {project.isPlaceholder && (
        <p className="mt-4 text-xs italic text-ink-faint">
          Details to be added.
        </p>
      )}

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm text-teal-dim underline underline-offset-4 hover:text-teal"
        >
          View project
        </a>
      ) : (
        <span className="mt-4 text-sm text-ink-faint">Link coming soon</span>
      )}
    </article>
  );
}
