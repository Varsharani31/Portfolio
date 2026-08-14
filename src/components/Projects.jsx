import { useState } from "react";
import { projects, projectFilters } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ExternalIcon, FolderIcon, CodeIcon, GithubIcon } from "./Icons";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <SectionHeading eyebrow="projects" title="Featured" highlight="Projects" />

        <Reveal>
          <div className="tabs">
            {projectFilters.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat === "All" ? <FolderIcon /> : <CodeIcon />}
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects-grid">
          {visible.map((proj, i) => (
            <Reveal key={proj.title} delay={i * 0.06}>
              <article className={`card item-card ${proj.featured ? "featured-card" : ""}`}>
                {proj.featured && (
                  <div className="project-badges">
                    <div className="featured-badge">
                      <span className="featured-dot" />
                      {proj.badge || "Featured Project"}
                    </div>
                    <div className="project-status-badge">Currently Working</div>
                  </div>
                )}
                <div className="project-media">{proj.title.slice(0, 2).toUpperCase()}</div>
                <div className="badge-row">
                  <span className="dot" />
                  {proj.category}
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="tags">
                  {proj.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {proj.github && (
                    <a className="link-btn" href={proj.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${proj.title}`}>
                      <GithubIcon />
                      GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a className="link-btn" href={proj.live} target="_blank" rel="noopener noreferrer" aria-label={`Live Demo for ${proj.title}`}>
                      <ExternalIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
