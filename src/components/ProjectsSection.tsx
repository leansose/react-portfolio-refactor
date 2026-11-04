import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <p>
        A selection of QA and software development projects covering manual testing, automation, API testing, AI-driven
        testing, and frontend development. Explore the projects on GitHub.
      </p>
      <ul>
        {PROJECTS.map((project) => (
          <li key={project.repoUrl}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
