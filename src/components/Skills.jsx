import { skills, marqueeTech } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { CodeIcon, DatabaseIcon, TerminalIcon, WrenchIcon } from "./Icons";

const catIcons = { code: CodeIcon, database: DatabaseIcon, terminal: TerminalIcon, wrench: WrenchIcon };

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading eyebrow="skills" title="My Skills &" highlight="Technologies" />

        <div className="skills-grid">
          {skills.map((cat, i) => {
            const Icon = catIcons[cat.icon];
            return (
              <Reveal key={cat.category} delay={i * 0.08}>
                <article className="card skill-cat">
                  <div className="skill-cat-head">
                    <span className="cat-icon">
                      <Icon />
                    </span>
                    <div>
                      <h3>{cat.category}</h3>
                      <span>{cat.note}</span>
                    </div>
                  </div>
                  <div className="skill-tags">
                    {cat.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="tech-marquee">
            <div className="marquee-track">
              {[...marqueeTech, ...marqueeTech].map((t, i) => (
                <span key={`${t}-${i}`}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}