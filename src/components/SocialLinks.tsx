import Glyph from './Glyph';
import type { SocialLink } from '../data/profile';

interface SocialLinksProps {
  links: SocialLink[];
  ariaLabel: string;
  size?: 30 | 45;
}

const SIZES = {
  30: 'size-[30px]',
  45: 'size-[45px]',
} as const;

function SocialLinks({ links, ariaLabel, size = 45 }: SocialLinksProps) {
  return (
    <ul aria-label={ariaLabel} className="flex flex-wrap gap-5">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="icon-link">
            <Glyph src={link.icon} alt={link.alt} className={SIZES[size]} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
