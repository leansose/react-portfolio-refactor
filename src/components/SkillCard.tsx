interface SkillCardProps {
  icon: string;
  title: string;
  unit: string;
  items: string[];
}

function SkillCard({ icon, title, unit, items }: SkillCardProps) {
  return (
    <details>
      <summary>
        <span aria-hidden="true">{icon}</span>
        <span>{title}</span>
        <span>
          {items.length} {unit}
        </span>
        <span aria-hidden="true">+</span>
      </summary>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </details>
  );
}

export default SkillCard;
