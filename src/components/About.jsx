import { aboutText } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-2">
          About
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mb-4">
          A little about me
        </h2>
        <div className="beam-underline mb-8" />

        <div className="flex flex-col gap-5">
          {aboutText.map((paragraph, index) => (
            <p key={index} className="font-body text-muted text-base sm:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
