import TimelineEntry from './TimelineEntry';
import { WORK_EXPERIENCE } from '../data/workExperience';

function ExperienceSection() {
  return (
    <section id="timeline" aria-labelledby="experience-heading" className="section">
      <h2 id="experience-heading" className="section-title text-accent">
        Work Experience
      </h2>
      <ol role="list" className="row-list">
        {WORK_EXPERIENCE.map((experience) => (
          <TimelineEntry key={experience.id} experience={experience} />
        ))}
      </ol>
    </section>
  );
}

export default ExperienceSection;
