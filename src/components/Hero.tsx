import SocialLinks from './SocialLinks';
import { HERO_SOCIAL_LINKS, PROFILE } from '../data/profile';

function Hero() {
  return (
    <header id="top">
      <h1>{PROFILE.title}</h1>
      <p>{PROFILE.tagline}</p>
      <SocialLinks links={HERO_SOCIAL_LINKS} ariaLabel="Social media links" />
    </header>
  );
}

export default Hero;
