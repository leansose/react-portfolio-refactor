import { ABOUT_PARAGRAPHS } from '../data/aboutContent';

function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <h2 id="about-heading">About Me</h2>
      {ABOUT_PARAGRAPHS.map((lines, index) => (
        <p key={index}>
          {lines.map((line, lineIndex) => (
            <span key={lineIndex}>
              {lineIndex > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      ))}
    </section>
  );
}

export default AboutSection;
