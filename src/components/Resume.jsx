import { resumeData, profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { DownloadIcon, ExternalIcon } from "./Icons";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <SectionHeading eyebrow="resume" title="My" highlight="Resume" />

        <Reveal delay={0.05}>
          <div className="resume-modern">
            <div className="resume-icon-wrap">
              <DownloadIcon />
            </div>
            <h2 className="resume-title">Let&apos;s build something meaningful together.</h2>
            <p className="resume-subtitle">
              Interested in working together or discussing an opportunity? Download my resume or get in touch.
            </p>
            <div className="resume-status-badge">
              <span className="resume-status-dot" />
              {profile.available}
            </div>
            <div className="resume-actions">
              <a
                href="/resume.pdf"
                download={resumeData.downloadName}
                className="btn btn-primary resume-btn"
              >
                <DownloadIcon /> Download Resume
              </a>
              <a
                href="#contact"
                className="btn btn-outline resume-btn"
              >
                <ExternalIcon /> Get In Touch
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
