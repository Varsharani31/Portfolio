import { internships } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { BriefcaseIcon, CheckIcon } from "./Icons";

export default function Internships() {
  return (
    <section id="internships">
      <div className="container">
        <SectionHeading eyebrow="experience" title="Work" highlight="Experience" />

        <div className="cards-grid">
          {internships.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.08}>
              <article className="card item-card">
                <div className="badge-row">
                  <span className="dot" />
                  {job.period}
                </div>
                <h3>{job.role}</h3>
                <div className="company">
                  <BriefcaseIcon />
                  {job.company}
                </div>
                <ul style={{ margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {job.points.map((p) => (
                    <li key={p} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", color: "var(--muted)", fontSize: "0.92rem" }}>
                      <span style={{ color: "var(--accent)", marginTop: "0.28rem", display: "inline-flex" }}>
                        <CheckIcon style={{ width: "14px", height: "14px" }} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
