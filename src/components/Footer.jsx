import { navLinks, profile, contact, footerNote } from "../data/portfolio";
import { LinkedinIcon, GithubIcon, CodeIcon } from "./Icons";

const socialIcons = { linkedin: LinkedinIcon, github: GithubIcon, code: CodeIcon };

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {year} <span className="gradient-text">{profile.name}</span>. {footerNote}.
        </p>

        <div className="footer-links">
          {navLinks.slice(0, 4).map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="social-row">
          {contact.social.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn" aria-label={s.label}>
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}