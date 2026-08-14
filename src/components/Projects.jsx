import { useState } from "react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ExternalIcon, FolderIcon, CodeIcon } from "./Icons";

const categories = ["All", "Full-Stack", "Mobile", "Python / AI", "Security"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <SectionHeading eyebrow="projects" title="Featured" highlight="Projects" />

        <Reveal>
          <div className="tabs">
            {categories.map((cat) => (
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

        <div className="cards-grid">
          {visible.map((proj, i) => (
            <Reveal key={proj.title} delay={i * 0.06}>
              <article className="card item-card">
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
                  <a className="link-btn" href="#contact" aria-label={`Ask about ${proj.title}`}>
                    <ExternalIcon />
                    {proj.links.label}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}