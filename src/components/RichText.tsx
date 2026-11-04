import { normalizeText } from '../utils/text';
import type { Segment } from '../data/music';

interface RichTextProps {
  segments: Segment[];
}

function RichText({ segments }: RichTextProps) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.em ? (
          <em key={index}>{normalizeText(segment.text)}</em>
        ) : (
          <span key={index}>{normalizeText(segment.text)}</span>
        ),
      )}
    </>
  );
}

export default RichText;
