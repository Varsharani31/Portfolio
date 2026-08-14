import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from "./Icons";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const role = profile.roles[roleIndex];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = role.slice(0, sub.length + 1);
        setSub(next);
        if (next === role) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = role.slice(0, sub.length - 1);
        setSub(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % profile.roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [sub, deleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-inner hero-grid">
        <div>
          <span className="hero-tag">Available — {profile.tagline}</span>
          <h1>
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profile.firstName}</span>
            <span className="hero-wave" aria-hidden="true"> 👋</span>
          </h1>
          <div className="hero-role">
            <span className="typing">{sub}</span>
            <span className="caret">|</span>
          </div>
          <p className="hero-desc">{profile.description}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="/resume.pdf" download="Varsharani_Kasliwal_Resume.html" className="btn btn-outline">
              <DownloadIcon /> Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="hero-social-link" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb one" />
          <div className="hero-orb two" />
          <div className="hero-orb three" />
          <div className="avatar-ring">
            <div className="avatar-inner">
              {!imgError ? (
                <img
                  src={profile.photo}
                  alt="Varsharani Kasliwal — Profile Photo"
                  className="avatar-photo"
                  onError={() => setImgError(true)}
                  loading="eager"
                />
              ) : (
                <span className="initials">{profile.initials}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
