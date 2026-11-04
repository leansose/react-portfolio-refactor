import SocialLinks from './SocialLinks';
import { HERO_SOCIAL_LINKS, PROFILE } from '../data/profile';

function Hero() {
  return (
    <header
      id="top"
      className="mx-auto w-full max-w-[1200px] px-[clamp(16px,5vw,48px)] py-[clamp(64px,12vh,120px)]"
    >
      <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[1.05] tracking-[-0.01em] text-ink">
        {PROFILE.title}
      </h1>
      <p className="mt-4 max-w-[68ch] text-ink-muted">{PROFILE.tagline}</p>
      <SocialLinks links={HERO_SOCIAL_LINKS} ariaLabel="Social media links" />
    </header>
  );
}

export default Hero;
