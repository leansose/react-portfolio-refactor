import SocialLinks from './SocialLinks';
import { FOOTER_CONTACT_INFO, FOOTER_SOCIAL_LINKS } from '../data/profile';
function Footer() {
  return (
    <footer aria-label="Site footer">
      <SocialLinks links={FOOTER_SOCIAL_LINKS} ariaLabel="Social media links" />
      <address>
        <span>{FOOTER_CONTACT_INFO.email}</span>
        <span>{FOOTER_CONTACT_INFO.phone}</span>
      </address>
    </footer>
  );
}

export default Footer;
