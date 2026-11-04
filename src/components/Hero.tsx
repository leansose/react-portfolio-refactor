import SocialLinks from './SocialLinks';
import { HERO_SOCIAL_LINKS, PROFILE } from '../data/profile';

function Hero() {
  return (
    <header id="top" className="section">
      <h1 className="hero-title">{PROFILE.title}</h1>
      <p className="lead measure mt-4">{PROFILE.tagline}</p>
      <div className="mt-8">
        <SocialLinks links={HERO_SOCIAL_LINKS} ariaLabel="Social media links" />
      </div>
    </header>
  );
}

export default Hero;
