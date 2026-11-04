import type { Certification } from '../data/certifications';

interface CertificationItemProps {
  certification: Certification;
}

function CertificationItem({ certification }: CertificationItemProps) {
  return (
    <li className="flex flex-wrap gap-x-4 gap-y-1">
      <p className="eyebrow w-32 shrink-0 pt-1">
        <time dateTime={certification.datetime}>{certification.period}</time>
      </p>
      <div className="grow">
        <p className="prose">{certification.description}</p>
        <p className="meta">{certification.school}</p>
      </div>
    </li>
  );
}

export default CertificationItem;
