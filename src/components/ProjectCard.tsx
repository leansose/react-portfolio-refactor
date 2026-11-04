import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { type, title, keywords, description, technologies, repoUrl } = project;
  const number = String(index + 1).padStart(2, '0');

  return (
    <details className="row group">
      <summary>
        <span aria-hidden="true" className="eyebrow tabular-nums">
          {number}
        </span>
        <span className="eyebrow">{type}</span>
        <h3 className="card-title row-title grow">{title}</h3>
        <ul role="list" aria-label="Project focus areas" className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <li key={keyword} className="tag">
              {keyword}
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="row-marker">
          +
        </span>
      </summary>

      <div className="row-body mt-4">
        {description.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex} className="prose measure text-ink-muted">
            {paragraph}
          </p>
        ))}

        <h4 className="eyebrow mt-4">Technologies &amp; Tools</h4>
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
          className="mt-4 inline-flex items-center gap-2 font-mono text-sm"
        >
          <img src="/icons/github-icon.png" alt="" aria-hidden="true" width={90} height={90} className="size-4" />
          <span>View project on GitHub</span>
        </a>
      </div>
    </details>
  );
}

export default ProjectCard;
