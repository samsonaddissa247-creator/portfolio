import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../data/portfolioData";

function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-2">
          Certificates
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mb-4">
          Certifications
        </h2>
        <div className="beam-underline mb-12" />

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-surface border border-border rounded-xl p-6 hover:border-accent/60 transition-colors"
            >
              <Award size={22} className="text-accent mb-4" />
              <h3 className="font-display text-lg text-text mb-1">{cert.title}</h3>
              <p className="font-body text-sm text-muted mb-1">
                {cert.organization} &middot; {cert.date}
              </p>
              <p className="font-body text-sm text-muted leading-relaxed mb-4">
                {cert.description}
              </p>

              {cert.link && cert.link !== "YOUR_CERTIFICATE_LINK" ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-body text-text hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} />
                  View Certificate
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-body text-muted/60 cursor-not-allowed">
                  <ExternalLink size={14} />
                  
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
