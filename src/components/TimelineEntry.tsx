import type { WorkExperience } from '../data/workExperience';

interface TimelineEntryProps {
  experience: WorkExperience;
}

function TimelineEntry({ experience }: TimelineEntryProps) {
  return (
    <li className="border-b border-rule py-6">
      <article aria-labelledby={experience.id}>
        <h3 id={experience.id} className="card-title">
          {experience.role}
        </h3>
        <p className="mt-1">
          {experience.company} - {experience.location}
        </p>
        <p className="eyebrow mt-2">
          <time dateTime={experience.datetime}>{experience.period}</time>
        </p>
      </article>
    </li>
  );
}

export default TimelineEntry;
