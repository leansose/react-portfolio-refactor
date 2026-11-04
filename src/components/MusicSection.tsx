import BandCarousel from './BandCarousel';
import RichText from './RichText';
import { BAND_PHOTOS, MUSIC_DESCRIPTION, MUSIC_LINKS } from '../data/music';

function MusicSection() {
  return (
    <section id="music" aria-labelledby="music-heading" className="section">
      <h2 id="music-heading" className="section-title text-accent">
        Music
      </h2>

      <BandCarousel photos={BAND_PHOTOS} />

      <div className="mt-[clamp(32px,6vh,48px)]">
        <p className="eyebrow">ABOUT MY MUSIC EXPERIENCE</p>
        {MUSIC_DESCRIPTION.map((segments, index) => (
          <p key={index} className="prose measure mt-4">
            <RichText segments={segments} />
          </p>
        ))}
      </div>

      <ul aria-label="JUSEPH music links" className="mt-8 flex flex-wrap items-center gap-6">
        {MUSIC_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <img
                src={link.icon}
                alt={link.alt}
                width={link.displayWidth}
                height={link.displayHeight}
                className="opacity-80 transition-opacity hover:opacity-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MusicSection;
