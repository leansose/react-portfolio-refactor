import TimelineEntry from './TimelineEntry';
import { WORK_EXPERIENCE } from '../data/workExperience';

function ExperienceSection() {
  return (
    <section id="timeline" aria-labelledby="experience-heading" className="section" tabIndex={-1}>
      <div className="section-head">
        <h2 id="experience-heading" className="section-title">
          Work Experience
        </h2>
      </div>
      <ol role="list" className="row-list">
        {WORK_EXPERIENCE.map((experience) => (
          <TimelineEntry key={experience.id} experience={experience} />
        ))}
      </ol>
    </section>
  );
}

export default ExperienceSection;
