interface SkillCardProps {
  icon: string;
  title: string;
  unit: string;
  items: string[];
}

function SkillCard({ icon, title, unit, items }: SkillCardProps) {
  return (
    <details className="row group">
      <summary>
        <span aria-hidden="true">{icon}</span>
        <h3 className="card-title row-title grow">{title}</h3>
        <span className="eyebrow tabular-nums">
          {items.length} {unit}
        </span>
        <span aria-hidden="true" className="row-marker">
          +
        </span>
      </summary>
      <ul role="list" className="row-body mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {items.map((item) => (
          <li key={item} className="meta">
            {item}
          </li>
        ))}
      </ul>
    </details>
  );
}

export default SkillCard;
