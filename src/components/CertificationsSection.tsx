import CertificationCard from './CertificationCard';
import { CERTIFICATION_GROUPS } from '../data/certifications';

function CertificationsSection() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="section">
      <h2 id="certifications-heading" className="section-title text-accent">
        Certifications &amp; Training
      </h2>
      <ul role="list" className="row-list">
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
