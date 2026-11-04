import SocialLinks from './SocialLinks';
import { FOOTER_CONTACT_INFO, FOOTER_SOCIAL_LINKS } from '../data/profile';

function Footer() {
  return (
    <footer aria-label="Site footer" className="shell footer flex flex-wrap items-center justify-between gap-6">
      <SocialLinks links={FOOTER_SOCIAL_LINKS} ariaLabel="Social media links" size={30} />
      <address className="flex flex-wrap gap-x-6 font-display text-base not-italic">
        <a href={`mailto:${FOOTER_CONTACT_INFO.email}`} className="px-1 py-2.5">
          {FOOTER_CONTACT_INFO.email}
        </a>
        <a href={`tel:${FOOTER_CONTACT_INFO.phone.replace(/\s/g, '')}`} className="px-1 py-2.5">
          {FOOTER_CONTACT_INFO.phone}
        </a>
      </address>
    </footer>
  );
}

export default Footer;
