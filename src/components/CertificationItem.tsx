import type { Certification } from '../data/certifications';

interface CertificationItemProps {
  certification: Certification;
}

function CertificationItem({ certification }: CertificationItemProps) {
  return (
    <li>
      <p>
        <time dateTime={certification.datetime}>{certification.period}</time>
      </p>
      <p>{certification.description}</p>
      <p>{certification.school}</p>
    </li>
  );
}

export default CertificationItem;
