import { ABOUT_PARAGRAPHS } from '../data/aboutContent';

function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section" tabIndex={-1}>
      <div className="section-head">
        <h2 id="about-heading" className="section-title">
          About Me
        </h2>
      </div>
      <div className="section-body stack">
        {ABOUT_PARAGRAPHS.map((lines, index) => (
          <p key={index} className="prose measure justified">
            {lines.map((line, lineIndex) => (
              <span key={lineIndex}>
                {lineIndex > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
