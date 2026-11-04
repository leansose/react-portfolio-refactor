import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto w-full max-w-[1200px] px-[clamp(16px,5vw,48px)] py-[clamp(64px,12vh,120px)]">
      <h2 id="projects-heading" className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase leading-[1.1] text-ink">
        Projects
      </h2>
      <p className="mt-4 max-w-[68ch] text-ink-muted">
        A selection of QA and software development projects covering manual testing, automation, API testing, AI-driven
        testing, and frontend development. Explore the projects on GitHub.
      </p>

      <ol className="mt-[clamp(32px,6vh,48px)] border-t border-rule">
        {PROJECTS.map((project, index) => (
          <li key={project.repoUrl} className="border-b border-rule">
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ProjectsSection;
