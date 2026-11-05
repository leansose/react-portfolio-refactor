import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section" tabIndex={-1}>
      <div className="section-head">
        <h2 id="projects-heading" className="section-title">
          Projects
        </h2>
        <p className="lead measure">
          A selection of QA and software development projects covering manual testing, automation, API testing,
          AI-driven testing, and frontend development. Explore the projects on GitHub.
        </p>
      </div>

      <ol role="list" className="row-list">
        {PROJECTS.map((project, index) => (
          <li key={project.repoUrl}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ProjectsSection;
