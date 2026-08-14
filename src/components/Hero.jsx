import { useEffect, useState } from "react";
import { profile, heroMeta } from "../data/portfolio";
import { LocationIcon, GraduationIcon, SparkleIcon } from "./Icons";

const metaIcons = {
  location: LocationIcon,
  graduation: GraduationIcon,
  sparkle: SparkleIcon,
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

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
            Varsharani
            <br />
            <span className="gradient-text">Kasliwal</span>
          </h1>
          <div className="hero-role">
            <span className="typing">{sub}</span>
            <span className="caret">|</span>
          </div>
          <p className="hero-desc">{profile.description}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Let&apos;s Connect
            </a>
          </div>

          <div className="hero-meta">
            {heroMeta.map((m) => {
              const Icon = metaIcons[m.icon];
              return (
                <span key={m.icon}>
                  <Icon />
                  {m.text}
                </span>
              );
            })}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb one" />
          <div className="hero-orb two" />
          <div className="hero-orb three" />
          <div className="avatar-ring">
            <div className="avatar-inner">
              <span className="initials">{profile.initials}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}