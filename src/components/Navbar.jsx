import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { portfolioData } from "../data/portfolioData";

// The links shown in the navbar. Each "href" points to a
// section id (e.g. <section id="about">) so clicking a link
// scrolls the page to that section.
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  // Tracks whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / name */}
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-text"
        >
          Addissa<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-text transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop social buttons */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu, only shown when menuOpen is true */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4">
          <ul className="flex flex-col gap-4 font-body text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block hover:text-text transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
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
      )}
    </header>
  );
}

export default Navbar;
