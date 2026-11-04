import BandCarousel from './BandCarousel';
import RichText from './RichText';
import { normalizeText } from '../utils/text';
import { BAND_PHOTOS, MUSIC_DESCRIPTION, MUSIC_LINKS } from '../data/music';

function MusicSection() {
  return (
    <section id="music" aria-labelledby="music-heading">
      <h2 id="music-heading">Music</h2>

      <BandCarousel photos={BAND_PHOTOS} />

      <div>
        <p>ABOUT MY MUSIC EXPERIENCE</p>
        {MUSIC_DESCRIPTION.map((segments, index) => (
          <p key={index}>
            <RichText segments={segments} />
          </p>
        ))}
      </div>

      <ul aria-label="JUSEPH music links">
        {MUSIC_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <img
                src={link.icon}
                alt={normalizeText(link.alt)}
                width={link.width}
                height={link.height}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MusicSection;
