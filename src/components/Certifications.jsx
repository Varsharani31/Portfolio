import { certifications } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { CertificateIcon } from "./Icons";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <SectionHeading eyebrow="certifications" title="Licenses &" highlight="Certifications" />

        <div className="cards-grid">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <article className="card item-card cert-card">
                <span className="cert-badge">
                  <CertificateIcon />
                </span>
                <div style={{ minWidth: 0 }}>
                  {cert.period && (
                    <div className="badge-row" style={{ marginBottom: "0.4rem" }}>
                      <span className="dot" />
                      {cert.period}
                    </div>
                  )}
                  <h3>{cert.title}</h3>
                  <p style={{ marginTop: "0.3rem" }}>{cert.issuer}</p>
                  <div className="tags" style={{ marginTop: "0.8rem" }}>
                    {cert.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}