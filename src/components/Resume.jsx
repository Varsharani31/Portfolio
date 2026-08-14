import { resumeBars, resumeTags, resumeData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { DownloadIcon, ExternalIcon } from "./Icons";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <SectionHeading eyebrow="resume" title="My" highlight="Resume" />

        <div className="resume-wrap">
          <Reveal delay={0.05}>
            <div className="card resume-card">
              <h3>Skills Overview</h3>
              <div className="resume-bars">
                {resumeBars.map((bar) => (
                  <div key={bar.label} className="bar-row">
                    <span className="bar-label">{bar.label}</span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${bar.value}%` }} />
                    </div>
                    <span className="bar-value">{bar.value}%</span>
                  </div>
                ))}
              </div>
              <div className="resume-tags">
                {resumeTags.map((tag) => (
                  <span key={tag} className="pill">{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card resume-card resume-actions-card">
              <h3>Download Resume</h3>
              <p>{resumeData.summary}</p>
              <div className="resume-btns">
                <a
                  href="/resume.pdf"
                  download={resumeData.downloadName}
                  className="btn btn-primary"
                >
                  <DownloadIcon /> Download
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <ExternalIcon /> Open in Tab
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
