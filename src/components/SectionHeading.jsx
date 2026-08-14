import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, highlight }) {
  return (
    <Reveal>
      <div className="section-head">
        <span className="eyebrow">{`// ${eyebrow}`}</span>
        <h2 className="section-title">
          {title} <span className="gradient-text">{highlight}</span>
        </h2>
      </div>
    </Reveal>
  );
}