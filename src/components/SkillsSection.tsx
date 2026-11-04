import SkillCard from './SkillCard';
import { SKILL_GROUPS } from '../data/skills';

function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto w-full max-w-[1200px] px-[clamp(16px,5vw,48px)] py-[clamp(64px,12vh,120px)]"
    >
      <p className="eyebrow">WHAT I WORK WITH</p>
      <h2 id="skills-heading" className="section-title mt-2 text-accent">
        Skills &amp; Tools
      </h2>
      <p className="lead measure mt-4">
        Technologies, tools, testing and programming practices I use across frontend development, manual and automated
        testing. Relevant soft skills are also listed.
      </p>
      <ul className="mt-[clamp(32px,6vh,48px)] border-t border-rule">
        {SKILL_GROUPS.map((group) => (
          <li key={group.title} className="border-b border-rule">
            <SkillCard icon={group.icon} title={group.title} unit={group.unit} items={group.items} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;
