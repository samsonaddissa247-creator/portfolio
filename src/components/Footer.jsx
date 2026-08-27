import { portfolioData } from "../data/portfolioData";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="font-body text-sm text-muted">
          &copy; {year} {portfolioData.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted/70">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
