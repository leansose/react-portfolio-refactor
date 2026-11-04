import TimelineEntry from './TimelineEntry';
import { WORK_EXPERIENCE } from '../data/workExperience';

function ExperienceSection() {
  return (
    <section
      id="timeline"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-[1200px] px-[clamp(16px,5vw,48px)] py-[clamp(64px,12vh,120px)]"
    >
      <h2 id="experience-heading" className="section-title text-accent">
        Work Experience
      </h2>
      <ol className="mt-8 border-t border-rule">
        {WORK_EXPERIENCE.map((experience) => (
          <TimelineEntry key={experience.id} experience={experience} />
        ))}
      </ol>
    </section>
  );
}

export default ExperienceSection;
