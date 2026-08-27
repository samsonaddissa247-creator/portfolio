import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-2">
          Projects
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mb-4">
          Featured work
        </h2>
        <div className="beam-underline mb-12" />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
