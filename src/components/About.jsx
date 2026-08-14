import { aboutPoints, strengths, profile } from "../data/portfolio";
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
                A <span className="gradient-text">Computer Engineering</span> student
              </h3>
              <div className="about-text">
                <p>{profile.aboutDetailed}</p>
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
          <div className="strengths-section">
            <h3 className="strengths-title">Strengths</h3>
            <div className="strengths-grid">
              {strengths.map((s) => {
                const Icon = pointIcons[s.icon];
                return (
                  <div key={s.title} className="card about-point">
                    <span className="point-icon">
                      <Icon />
                    </span>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
