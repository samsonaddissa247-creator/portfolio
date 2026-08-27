import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { portfolioData } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface/40">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-2">
          Contact
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mb-4">
          Let's work together
        </h2>
        <div className="beam-underline mx-auto mb-8" />

        <p className="font-body text-muted text-base sm:text-lg mb-10">
          Have a project in mind, or just want to say hello? My inbox is open.
        </p>

        {/* Clicking this opens the visitor's email app, addressed to me */}
        <a
          href={`mailto:${portfolioData.email}?subject=Portfolio%20Contact`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-body font-semibold hover:shadow-glow transition-shadow"
        >
          <Mail size={18} />
          Send Me a Message
        </a>

        {/* Download CV button — only clickable once the real PDF is added */}
        <div className="mt-6">
          {portfolioData.cv.available ? (
            <a
              href={portfolioData.cv.path}
              download={portfolioData.cv.fileName}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text font-body font-semibold hover:border-accent transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted/60 font-body font-semibold cursor-not-allowed">
              <Download size={18} />
              CV Coming Soon
            </span>
          )}
        </div>

        {/* Social icons repeated here for convenience */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted hover:text-accent transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted hover:text-accent transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
