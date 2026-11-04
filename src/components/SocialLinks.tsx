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
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block opacity-80 transition-opacity hover:opacity-100 ${SIZES[size]}`}
          >
            <img
              src={link.icon}
              alt={link.alt}
              width={link.width}
              height={link.height}
              className="size-full object-contain"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
