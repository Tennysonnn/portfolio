import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function SelectedProjects() {
  return (
    <section id="projects" className="section py-16 sm:py-20">
      <p className="text-sm text-ink-soft">Selected work</p>
      <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
        Projects
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
