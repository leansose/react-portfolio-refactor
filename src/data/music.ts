export interface Segment {
  text: string;
  em?: boolean;
}

export interface BandPhoto {
  src: string;
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

export const BAND_PHOTOS: BandPhoto[] = [
  {
    src: '/band/1.jpg',
    alt: 'pre-amplifest',
    venue: '@ Post-Amplifest Session 2014',
    photographer: 'Photo by Maria do Carmo Louceiro',
    width: 800,
    height: 533,
  },
  {
    src: '/band/2.jpg',
    alt: 'amplifest',
    venue: '@ Amplifest 2015',
    photographer: 'Photo by Lais Pereira',
    width: 1280,
    height: 853,
  },
  {
    src: '/band/3.jpg',
    alt: 'amplifest',
    venue: '@ Amplifest 2015',
    photographer: 'Photo by Lais Pereira',
    width: 2048,
    height: 1356,
  },
  {
    src: '/band/4.jpg',
    alt: 'barracuda',
    venue: '@ Barracuda 2020',
    photographer: 'Photo by Pedro Sousa',
    width: 5184,
    height: 3456,
  },
  {
    src: '/band/5.jpg',
    alt: 'ferro bar',
    venue: '@ Ferro Bar 2019',
    photographer: 'Photo by David Madeira',
    width: 5251,
    height: 3501,
  },
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
      numerous live shows across the country, including the legendary music festival,
      Amplifest on 2015 edition.`,
    ),
  ],
  [
    seg(
      `JUSEPH is currently on an unannounced hiatus, having played
      their final show in 2020 during pandemic; it was a livestream act at the
      now-defunct rock club Barracuda.`,
    ),
  ],
  [seg('Whether this ship will set sail on new sonic journeys remains uncertain, but we never know.')],
  [
    seg(
      `Today I'm challenging myself to play exploratory music, since I'm very addicted to
      electronic music, effects and syntherizers. I'm trying to find a balance between the two,
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
