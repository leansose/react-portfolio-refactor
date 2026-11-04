import CertificationItem from './CertificationItem';
import type { CertificationGroup } from '../data/certifications';

interface CertificationCardProps {
  group: CertificationGroup;
}

function CertificationCard({ group }: CertificationCardProps) {
  return (
    <article aria-labelledby={group.id} className="border-t border-rule py-6">
      <h3 id={group.id} className="card-title">
        {group.category}
      </h3>
      <ul className="mt-4">
        {group.items.map((certification, index) => (
          <CertificationItem key={`${certification.datetime}-${index}`} certification={certification} />
        ))}
      </ul>
    </article>
  );
}

export default CertificationCard;
