import { ABOUT_PARAGRAPHS } from '../data/aboutContent';

function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-[1200px] px-[clamp(16px,5vw,48px)] py-[clamp(64px,12vh,120px)]"
    >
      <h2 id="about-heading" className="section-title text-accent">
        About Me
      </h2>
      <div className="mt-4 space-y-4">
        {ABOUT_PARAGRAPHS.map((lines, index) => (
          <p key={index} className="prose measure">
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
