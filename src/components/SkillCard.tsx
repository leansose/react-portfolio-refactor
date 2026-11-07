import type { SvgIconProps } from '@mui/material';
import type { ComponentType } from 'react';

interface SkillCardProps {
  icon: ComponentType<SvgIconProps>;
  title: string;
  unit: string;
  items: string[];
}

function SkillCard({ icon: Icon, title, unit, items }: SkillCardProps) {
  return (
    <details className="row group">
      <summary>
        {/* 1.25em because Material draws its glyph inside a 24px grid with
            roughly 2px of padding, so a mark at the text size reads smaller than
            the emoji it replaces. Inline, not a utility class: emotion writes
            font-size on its own unlayered class, which outranks a layered
            Tailwind rule. */}
        <Icon className="row-icon" style={{ fontSize: '1.25em' }} />
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
