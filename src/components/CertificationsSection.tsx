import CertificationCard from './CertificationCard';
import { CERTIFICATION_GROUPS } from '../data/certifications';

function CertificationsSection() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading">
      <h2 id="certifications-heading">Certifications &amp; Training</h2>
      <ul>
        {CERTIFICATION_GROUPS.map((group) => (
          <li key={group.id}>
            <CertificationCard group={group} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CertificationsSection;
