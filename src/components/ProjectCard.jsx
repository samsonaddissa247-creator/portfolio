import { ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";

// A small helper button used for the three project links below.
// If a link isn't set yet, it shows "Coming Soon" instead of a
// fake, non-working link.
function ProjectLinkButton({ href, label, icon: Icon }) {
  if (!href) {
    return (
      <span className="flex items-center gap-1.5 text-xs font-body text-muted/60 cursor-not-allowed">
        <Icon size={14} />
        Coming Soon
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-xs font-body text-text hover:text-accent transition-colors"
    >
      <Icon size={14} />
      {label}
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/60 transition-colors group">
      {/* Project image preview */}
      <div className="aspect-video bg-surface2 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.hidden = false;
            }}
          />
        ) : null}
        <div
          hidden={Boolean(project.image)}
          className="flex h-full items-center justify-center px-6 text-center font-display text-xl text-muted"
        >
          {project.title}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-text mb-2">{project.title}</h3>
        <p className="font-body text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links: GitHub, live demo, case study */}
        <div className="flex items-center gap-5 pt-4 border-t border-border">
          <ProjectLinkButton href={project.github} label="GitHub" icon={GithubIcon} />
          <ProjectLinkButton href={project.demo} label="Live Demo" icon={ExternalLink} />
          <ProjectLinkButton href={project.caseStudy} label="Case Study" icon={FileText} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
