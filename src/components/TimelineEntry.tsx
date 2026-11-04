import type { WorkExperience } from '../data/workExperience';

interface TimelineEntryProps {
  experience: WorkExperience;
}

function TimelineEntry({ experience }: TimelineEntryProps) {
  return (
    <li>
      <article aria-labelledby={experience.id}>
        <h3 id={experience.id}>{experience.role}</h3>
        <p>
          {experience.company} - {experience.location}
        </p>
        <p>
          <time dateTime={experience.datetime}>{experience.period}</time>
        </p>
      </article>
    </li>
  );
}

export default TimelineEntry;
