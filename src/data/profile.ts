export interface SocialLink {
  href: string;
  icon: string;
  alt: string;
  width: number;
  height: number;
}

export const PROFILE = {
  logoName: 'leandro sousa',
  title: 'Leandro Sousa | Software Tester',
  tagline: 'Junior QA Tester | Manual Testing • Test Automation • Agile',
} as const;

export const HERO_SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/leandrosousabastos',
    icon: '/icons/linkedin-icon.png',
    alt: 'LinkedIn',
    width: 96,
    height: 96,
  },
  { href: 'https://github.com/leansose', icon: '/icons/github-icon.png', alt: 'GitHub', width: 90, height: 90 },
];

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/leandrosousabastos',
    icon: '/icons/linkedin-icon.png',
    alt: 'LinkedIn',
    width: 96,
    height: 96,
  },
  { href: 'https://instagram.com/leansose/', icon: '/icons/ig-icon.png', alt: 'Instagram', width: 100, height: 100 },
  { href: 'https://github.com/leansose', icon: '/icons/github-icon.png', alt: 'GitHub', width: 90, height: 90 },
];

export const FOOTER_CONTACT_INFO = {
  email: 'leandrosoubast@gmail.com',
  phone: '+351 916 665 625',
} as const;
