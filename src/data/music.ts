export interface Segment {
  text: string;
  em?: boolean;
}

export interface BandPhoto {
  src: string;
  srcSet: string;
  alt: string;
  venue: string;
  photographer: string;
  width: number;
  height: number;
}

export interface MusicLink {
  href: string;
  icon: string;
  alt: string;
  intrinsicWidth: number;
  intrinsicHeight: number;
  displayWidth: number;
  displayHeight: number;
}

const photo = (
  file: string,
  alt: string,
  venue: string,
  photographer: string,
  width: number,
  height: number,
  large: string,
): BandPhoto => ({
  src: `/band/${file}-640.jpg`,
  srcSet: `/band/${file}-640.jpg 640w, ${large}`,
  alt,
  venue,
  photographer,
  width,
  height,
});

export const BAND_PHOTOS: BandPhoto[] = [
  photo(
    '1',
    'pre-amplifest',
    '@ Post-Amplifest Session 2014',
    'Photo by Maria do Carmo Louceiro',
    800,
    533,
    '/band/1.jpg 800w',
  ),
  photo('2', 'amplifest', '@ Amplifest 2015', 'Photo by Lais Pereira', 1280, 853, '/band/2.jpg 1280w'),
  photo('3', 'amplifest', '@ Amplifest 2015', 'Photo by Lais Pereira', 2048, 1356, '/band/3-1600.jpg 1600w'),
  photo('4', 'barracuda', '@ Barracuda 2020', 'Photo by Pedro Sousa', 5184, 3456, '/band/4-1600.jpg 1600w'),
  photo('5', 'ferro bar', '@ Ferro Bar 2019', 'Photo by David Madeira', 5251, 3501, '/band/5-1600.jpg 1600w'),
];

const seg = (text: string, em?: boolean): Segment => ({ text, em });

export const MUSIC_DESCRIPTION: Segment[][] = [
  [
    seg(
      `I'm a founding member and guitarist of the Portuguese post-rock/metal
      band JUSEPH since 2010.`,
    ),
  ],
  [
    seg(`Over the years, my band released two studio albums — `),
    seg('Novae', true),
    seg(' (2013) and '),
    seg('Óreida', true),
    seg(
      ` — and played
      numerous live shows across the country, including the legendary music festival
      Amplifest in its 2015 edition.`,
    ),
  ],
  [
    seg(
      `JUSEPH is currently on an unannounced hiatus, having played
      their final show in 2020 during the pandemic; it was a livestream act at the
      now-defunct rock club Barracuda.`,
    ),
  ],
  [seg('Whether this ship will set sail on new sonic journeys remains uncertain, but we never know.')],
  [
    seg(
      `Today I'm challenging myself to play exploratory music, since I'm deeply into
      electronic music, effects and synthesizers. I'm trying to find a balance between the two,
      possibly a mix of both, my grounded area, post-rock, and ambient music, using an alter ego
      called,`,
    ),
    seg('Sir Sun', true),
    seg('.'),
  ],
];

export const MUSIC_LINKS: MusicLink[] = [
  {
    href: 'https://jusephband.bandcamp.com/',
    icon: '/icons/bandcamp-logo.png',
    alt: 'bandcamp',
    intrinsicWidth: 1770,
    intrinsicHeight: 512,
    displayWidth: 200,
    displayHeight: 58,
  },
  {
    href: 'https://open.spotify.com/artist/7vQVtlsTukTFCInKzmi1zd?si=b15KyNgKT4CwuLTGu_UI6g',
    icon: '/icons/spotify-logo.png',
    alt: 'spotify',
    intrinsicWidth: 3432,
    intrinsicHeight: 940,
    displayWidth: 120,
    displayHeight: 33,
  },
  {
    href: 'https://www.instagram.com/jusephband/',
    icon: '/icons/ig-icon.png',
    alt: 'instagram',
    intrinsicWidth: 100,
    intrinsicHeight: 100,
    displayWidth: 50,
    displayHeight: 50,
  },
];
