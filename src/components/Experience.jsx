import { timeline } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/40">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-2">
          Experience
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mb-4">
          Experience &amp; Education
        </h2>
        <div className="beam-underline mb-12" />

        <div className="flex flex-col">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 pb-10 border-l border-border last:pb-0">
              {/* Timeline dot */}
              <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent" />

              <p className="font-mono text-xs text-muted mb-1">{item.date}</p>
              <h3 className="font-display text-lg text-text">{item.title}</h3>
              <p className="font-body text-sm text-accent mb-2">{item.place}</p>
              <p className="font-body text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
