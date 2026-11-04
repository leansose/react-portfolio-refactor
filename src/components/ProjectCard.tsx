import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { type, title, keywords, description, technologies, repoUrl } = project;
  const number = String(index + 1).padStart(2, '0');

  return (
    <details className="group px-1 py-4">
      <summary className="flex flex-wrap items-baseline gap-x-4 gap-y-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true" className="font-mono text-sm text-ink-faint tabular-nums">
          {number}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">{type}</span>
        <h3 className="grow font-display text-[clamp(1.25rem,2.2vw,1.625rem)] font-semibold leading-[1.2] text-ink group-open:text-accent">
          {title}
        </h3>
        <ul role="list" aria-label="Project focus areas" className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <li
              key={keyword}
              className="border border-rule px-2 py-0.5 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted"
            >
              {keyword}
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="font-mono text-ink-faint transition-transform group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="mt-4 border-l-2 border-accent pl-4">
        {description.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex} className="max-w-[68ch] text-ink-muted">
            {paragraph}
          </p>
        ))}

        <h4 className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Technologies &amp; Tools</h4>
        <ul role="list" aria-label="Technologies and tools" className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech} className="font-mono text-xs text-ink-muted">
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover"
        >
          <img src="/icons/github-icon.png" alt="" aria-hidden="true" className="size-4" />
          <span>View project on GitHub</span>
        </a>
      </div>
    </details>
  );
}

export default ProjectCard;
