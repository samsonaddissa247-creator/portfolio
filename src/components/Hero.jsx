import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { portfolioData } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Soft warm glow behind the name — the page's signature visual */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
          {portfolioData.name}
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-text leading-tight">
          {portfolioData.role}
        </h1>

        <div className="beam-underline mx-auto my-6" />

        <p className="font-body text-muted text-base sm:text-lg max-w-xl mx-auto">
          {portfolioData.tagline}
        </p>

        {/* Main call-to-action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-accent text-bg font-body font-semibold hover:shadow-glow transition-shadow"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-border text-text font-body font-semibold hover:border-accent transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted hover:text-accent transition-colors"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted hover:text-accent transition-colors"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            aria-label="Send an email"
            className="text-muted hover:text-accent transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
