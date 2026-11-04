import SocialLinks from './SocialLinks';
import { FOOTER_CONTACT_INFO, FOOTER_SOCIAL_LINKS } from '../data/profile';

function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-6 px-[clamp(16px,5vw,48px)] py-[clamp(48px,8vh,80px)]"
    >
      <SocialLinks links={FOOTER_SOCIAL_LINKS} ariaLabel="Social media links" size={30} />
      <address className="flex flex-wrap gap-x-6 font-display text-base not-italic text-ink">
        <span>{FOOTER_CONTACT_INFO.email}</span>
        <span>{FOOTER_CONTACT_INFO.phone}</span>
      </address>
    </footer>
  );
}

export default Footer;
