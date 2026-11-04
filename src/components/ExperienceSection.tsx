import TimelineEntry from './TimelineEntry';
import { WORK_EXPERIENCE } from '../data/workExperience';

function ExperienceSection() {
  return (
    <section id="timeline" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Work Experience</h2>
      <ol>
        {WORK_EXPERIENCE.map((experience) => (
          <TimelineEntry key={experience.id} experience={experience} />
        ))}
      </ol>
    </section>
  );
}

export default ExperienceSection;
