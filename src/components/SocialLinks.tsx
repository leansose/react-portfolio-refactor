import type { SocialLink } from '../data/profile';

interface SocialLinksProps {
  links: SocialLink[];
  ariaLabel: string;
}

function SocialLinks({ links, ariaLabel }: SocialLinksProps) {
  return (
    <ul aria-label={ariaLabel}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.alt} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
