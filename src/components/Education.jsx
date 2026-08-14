import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHeading eyebrow="education" title="My Academic" highlight="Journey" />

        <div className="education-list">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.08}>
              <article className="card edu-item">
                <div className="edu-top">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className="pill pill-highlight">{edu.status}</span>
                </div>
                <div className="edu-school">{edu.school}</div>
                <p className="edu-detail">{edu.detail}</p>
                <div style={{ marginTop: "0.9rem" }}>
                  <span className="pill">{edu.grade}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}