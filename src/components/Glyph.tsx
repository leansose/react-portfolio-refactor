import type { CSSProperties } from 'react';

interface GlyphProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

/* Every mark in public/icons is one flat colour baked into pixels, so the file
   can never serve both themes: white brand glyphs vanish on Sheet Grey and the
   black arrow vanishes on Deep Pass Green. Masking keeps the artwork and hands
   the colour to CSS, which is the only place that knows the theme. */
function Glyph({ src, alt, className = '', style }: GlyphProps) {
  /* An empty alt means the mark is decoration next to its own label, so it
     carries no role at all rather than an unnamed image. */
  const semantic = alt === '' ? { 'aria-hidden': true } : { role: 'img', 'aria-label': alt };
  return (
    <span
      {...semantic}
      className={`glyph ${className}`.trim()}
      style={{ ...style, '--glyph': `url(${src})` } as CSSProperties}
    />
  );
}

export default Glyph;
