import { aboutPoints, stats, profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { CodeIcon, DesignIcon, TeamIcon, GrowthIcon } from "./Icons";

const pointIcons = { code: CodeIcon, design: DesignIcon, team: TeamIcon, growth: GrowthIcon };

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading eyebrow="about-me" title="About" highlight="Me" />

        <div className="about-grid">
          <Reveal delay={0.05}>
            <div className="card about-card">
              <h3>
                A final year <span className="gradient-text">Computer Engineering</span> student
              </h3>
              <div className="about-text">
                <p>{profile.description}</p>
                <p>
                  I enjoy taking ownership of features from idea to deployment — designing clean UI,
                  writing readable code and testing what I build. My internships and projects have taught
                  me to adapt quickly, communicate clearly and ship under deadlines.
                </p>
                <p>
                  Beyond code, I enjoy reading about <strong>AI &amp; machine learning</strong> and
                  sharpening my skills through <strong>hands-on practice</strong> — I recently completed
                  an AI internship and a DSA training program to strengthen my problem-solving.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="about-points">
              {aboutPoints.map((point) => {
                const Icon = pointIcons[point.icon];
                return (
                  <div key={point.title} className="card about-point">
                    <span className="point-icon">
                      <Icon />
                    </span>
                    <div>
                      <h4>{point.title}</h4>
                      <p>{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="card stat">
                <div className="stat-num">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}