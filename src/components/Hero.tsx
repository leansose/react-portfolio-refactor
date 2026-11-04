import SocialLinks from './SocialLinks';
import { HERO_SOCIAL_LINKS, PROFILE } from '../data/profile';

function Hero() {
  return (
    <header id="top" className="section">
      <div className="section-head">
        <h1 className="hero-title">{PROFILE.title}</h1>
        <p className="lead measure">{PROFILE.tagline}</p>
      </div>
      <div className="section-body stack">
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href="#projects" className="btn btn-outline">
            View projects
          </a>
        </div>
        <SocialLinks links={HERO_SOCIAL_LINKS} ariaLabel="Social media links" />
      </div>
    </header>
  );
}

export default Hero;
