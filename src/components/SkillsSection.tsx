import SkillCard from './SkillCard';
import { SKILL_GROUPS } from '../data/skills';

function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <p>WHAT I WORK WITH</p>
      <h2 id="skills-heading">Skills &amp; Tools</h2>
      <p>
        Technologies, tools, testing and programming practices I use across frontend development, manual and automated
        testing. Relevant soft skills are also listed.
      </p>
      <ul>
        {SKILL_GROUPS.map((group) => (
          <li key={group.title}>
            <SkillCard icon={group.icon} title={group.title} unit={group.unit} items={group.items} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;
