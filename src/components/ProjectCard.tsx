import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { type, title, keywords, description, technologies, repoUrl } = project;

  return (
    <details>
      <summary>
        <span>{type}</span>
        <h3>{title}</h3>
        <span>
          {keywords.map((keyword, index) => (
            <span key={keyword}>
              {index > 0 && ' · '}
              {keyword}
            </span>
          ))}
        </span>
        <span aria-hidden="true">+ info</span>
      </summary>

      <div>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h4>Technologies &amp; Tools</h4>
        <ul>
          {technologies.map((tech, index) => (
            <li key={tech}>
              {index > 0 && ' · '}
              {tech}
            </li>
          ))}
        </ul>

        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          <img src="/icons/github-icon.png" alt="" aria-hidden="true" />
          <span>View project on GitHub</span>
        </a>
      </div>
    </details>
  );
}

export default ProjectCard;
