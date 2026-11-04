interface SkillCardProps {
  icon: string;
  title: string;
  unit: string;
  items: string[];
}

function SkillCard({ icon, title, unit, items }: SkillCardProps) {
  return (
    <details className="group px-1 py-4">
      <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-4 gap-y-1 [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true">{icon}</span>
        <h3 className="card-title grow text-ink group-open:text-accent">{title}</h3>
        <span className="eyebrow tabular-nums">
          {items.length} {unit}
        </span>
        <span aria-hidden="true" className="font-mono text-ink-faint transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 pl-8">
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
