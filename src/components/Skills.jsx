import {
  Component,
  PenTool,
  Lightbulb,
  Layers,
  PencilRuler,
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  Server,
  Flame,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { skills } from "../data/portfolioData";
import { GithubIcon } from "./icons/BrandIcons";

// Maps each skill name to an icon. If a skill isn't listed here,
// the "Sparkles" icon is used as a simple fallback.
const skillIcons = {
  Figma: Component,
  "UX Design": PenTool,
  "UI Design": Palette,
  "Design Thinking": Lightbulb,
  Prototyping: Layers,
  Wireframing: PencilRuler,
  HTML: Code2,
  CSS: Palette,
  JavaScript: Braces,
  React: Atom,
  "Tailwind CSS": Wind,
  Python: Server,
  Django: Server,
  Firebase: Flame,
  Git: GitBranch,
  GitHub: GithubIcon,
};

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-2">
          Skills
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mb-4">
          What I work with
        </h2>
        <div className="beam-underline mb-12" />

        {/* One block per category (Design, Frontend, Backend / Other) */}
        <div className="flex flex-col gap-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="font-display text-lg text-text mb-5">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillList.map((skill) => {
                  const Icon = skillIcons[skill] || Sparkles;
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-3 hover:border-accent transition-colors"
                    >
                      <Icon size={20} className="text-accent shrink-0" />
                      <span className="font-body text-sm text-text">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
