import CertificationCard from './CertificationCard';
import { CERTIFICATION_GROUPS } from '../data/certifications';

function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="mx-auto w-full max-w-[1200px] px-[clamp(16px,5vw,48px)] py-[clamp(64px,12vh,120px)]"
    >
      <h2 id="certifications-heading" className="section-title text-accent">
        Certifications &amp; Training
      </h2>
      <ul className="mt-8">
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
