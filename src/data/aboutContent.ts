import { normalizeText } from '../utils/text';

/** Each inner array is one <p>; its entries mirror the original hard line breaks. */
export const ABOUT_PARAGRAPHS: string[][] = [
  [
    normalizeText(`Hi, I'm a Junior Software Tester with experience in manual testing and a deep curiosity in automation!
      Currently I'm working as a freelancer in some crowd testing websites where I cover most of manual
      testing techniques and bug reporting.`),
  ],
  [
    normalizeText(`I have also some personal projects documented on a portfolio using Playwright and Selenium. It's my
      introduction into automation testing. That's one of my goals as a QA Tester, becoming a Test
      Automation Engineer.`),
    normalizeText(`I'm a focused, detail-oriented person looking forward to be a part of a development team to grow as
      a tester while helping a company to deliver a better product.`),
  ],
  [
    normalizeText(`In my free time I play guitar and synth. I've had a post-rock band, but nowadays I play for myself,
      like therapy, composing ambient and exploratory music.`),
  ],
];
