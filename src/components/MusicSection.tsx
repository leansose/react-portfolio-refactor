import BandCarousel from './BandCarousel';
import Glyph from './Glyph';
import RichText from './RichText';
import { BAND_PHOTOS, MUSIC_DESCRIPTION, MUSIC_LINKS } from '../data/music';

function MusicSection() {
  return (
    <section id="music" aria-labelledby="music-heading" className="section" tabIndex={-1}>
      <div className="section-head">
        <h2 id="music-heading" className="section-title">
          Music
        </h2>
      </div>

      <div className="section-body">
        <BandCarousel photos={BAND_PHOTOS} />
      </div>

      <div className="section-body">
        <p className="eyebrow">ABOUT MY MUSIC EXPERIENCE</p>
        <div className="stack">
          {MUSIC_DESCRIPTION.map((segments, index) => (
            <p key={index} className="prose measure">
              <RichText segments={segments} />
            </p>
          ))}
        </div>
      </div>

      <ul aria-label="JUSEPH music links" className="section-body flex flex-wrap items-center gap-6">
        {MUSIC_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="logo-link">
              <Glyph
                src={link.icon}
                alt={link.alt}
                style={{ inlineSize: link.displayWidth, blockSize: link.displayHeight }}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MusicSection;
