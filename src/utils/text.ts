const collapseIndentation = (text: string) => text.replace(/[ \t]*\n[ \t]*/g, '\n').trim();

/** Collapses source-code indentation while preserving intentional blank-line paragraph breaks. */
export const normalizeText = (text: string) =>
  collapseIndentation(text)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\n/g, ' '))
    .join('\n');

/** Splits normalized text into paragraphs; a '\n' marks a paragraph break. */
export const splitLines = (text: string) => normalizeText(text).split('\n');
