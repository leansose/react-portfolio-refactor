# Leandro Sousa — Software Tester portfolio

A one-page portfolio that turns a short recruiter visit into an inbound contact. This repository is
the **refactor**: the hand-written vanilla site, kept at `old-portfolio/` for reference, rebuilt as a
component-driven React app.

The design target is a QA hiring manager arriving in English from a job board, LinkedIn or GitHub and
reading the page as a one-pass screen. [PRODUCT.md](PRODUCT.md) records that audience, the claims the
site may and may not make, and the constraints; [DESIGN.md](DESIGN.md) records the visual system it is
built with. Both are maintained documents — read them before changing anything user-visible.

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite 8 (rolldown) + `@vitejs/plugin-react` with the React Compiler enabled via Babel |
| UI | React 19, TypeScript, Tailwind 4 (`@tailwindcss/vite`) |
| Icons | Material Symbols through `@mui/icons-material`, used for the nine marks that replaced the site's emoji — everything else is a masked bitmap or a text glyph |
| Lint | oxlint (`.oxlintrc.json`) |
| Format | Prettier, pinned exactly |
| Form validation | zod + react-hook-form + `@hookform/resolvers` |
| Hosting | GitHub Pages, published by GitHub Actions |
| Tests | **none configured** — see Quality gates |

## Commands

```bash
npm run dev          # Vite dev server
npm run build        # tsc -b && vite build
npm run preview      # serve the built dist/
npm run lint         # oxlint
npm run format       # rewrite the source with Prettier
npm run format:check # fail if it has drifted
```

## Editing content

Every section reads a typed module in `src/data/`. Editing what the site *says* means editing those
files, not JSX:

| Module | Owns |
| --- | --- |
| `profile.ts` | name, title, tagline, social links, footer contact details |
| `aboutContent.ts` | the first-person introduction — the author's own writing, not raw material |
| `skills.ts`, `projects.ts`, `education.ts`, `certifications.ts`, `workExperience.ts` | the hiring evidence |
| `music.ts` | band photographs with venue, year and named photographer credits |
| `contact.ts` | the Web3Forms endpoint and the field rules |
| `navigation.ts` | section order and navbar labels |

## Source layout

```
src/
  App.tsx              the page: skip link, navbar, sections in order, footer
  components/          one component per section plus the controls they share
  data/                content, as above
  hooks/useTheme.ts    the only place that reads or writes the theme
  styles/              tokens.css (design tokens + @font-face), components.css, type.css
  utils/               url.ts (public path resolution), text.ts
public/
  fonts/  icons/  band/
```

## Design system

- **Themes.** Light and dark, following `prefers-color-scheme` with a three-way manual override
  (light / dark / system) persisted as `portfolio-theme` in `localStorage`. `useTheme` is the single
  module that owns it, and it writes `data-theme` plus `data-theme-preference` on `<html>`.
- **Tokens.** Colour, spacing and type scales live as custom properties in `src/styles/tokens.css`.
  Spacing and rhythm are `clamp()` on **width** — window height never enters the arithmetic, so a
  tall phone is a narrow column and gains nothing from a taller gap.
- **Type.** Josefin Sans for display, Inter for body and metadata, both hosted locally in
  `public/fonts/` with drawn italics rather than the browser's sheared approximation.
- **Marks.** Brand icons and the back-to-top arrow are flat single-colour bitmaps, so they are
  painted through CSS `mask` and take their colour from `--ink` or `--on-accent`. The artwork never
  changes; only the token does, which is why every mark reads correctly in both themes.

## Quality gates

| Gate | Command | Current state |
| --- | --- | --- |
| Formatting | `npm run format:check` | green; Prettier owns the source it covers |
| Lint | `npm run lint` | 102 warnings, 0 errors — the warnings are the accepted baseline |
| Types | `npx tsc -b` | `strict` and `noUncheckedIndexedAccess` on for both projects |
| Build | `npm run build` | ~375 kB JS (118 kB gzip), ~34 kB CSS (7 kB gzip) |

**There is no test runner.** Nothing in this project is automated-tested, so typecheck, lint and
reading the rendered page in a browser are the only verification available. Treat that as a fact
about the project, not an oversight to work around: changes that cannot be looked at in a browser
cannot be verified here.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`: install → format check → lint → typecheck
and build → upload `dist/` → deploy to Pages. Live at
**<https://leansose.github.io/react-portfolio-refactor/>**.

The build uses `base: './'` and resolves every `public/` path through `src/utils/url.ts`, so one
artifact serves from a domain root or a project subpath without reconfiguring anything. The contact
form posts directly to `api.web3forms.com` with an access key that ships in the bundle — normal for a
client-side form, and the reason the endpoint accepts unsolicited submissions, which is why the form
carries a `botcheck` honeypot.

## Refactor status

Work has followed the review's batches, in the order it set them. Done, oldest first:

| Batch | What landed |
| --- | --- |
| 1 — copy and correctness | Portuguese-interference errors fixed in visible copy; a real bug found while verifying them (RichText trimmed the joiner spaces between segments); the `<qa>` bracket favicon the page already referenced |
| 2 — payload | responsive `srcSet` band photos and page metadata; unused full-size band photos dropped from the public payload |
| 3 — form and access | `autocomplete` purposes on the contact fields; phone made optional with E.164 normalisation; real validation, sending and outcome states with `aria-describedby` and a honeypot; hero moved inside `<main>` behind a skip link |
| 4 — tooling | portable `base`, the Pages workflow, Prettier pinned, TypeScript `strict` + checked indexing, Prettier as an enforced gate, this README |
| 5 — craft | links underlined in their resting state (colour alone never said "link"), drawn italics for both families, section rhythm derived from width instead of window height, brand marks and the arrow following the theme |
| 6 — fonts | twelve full-coverage TTFs replaced by four `latin` variable woff2 subsets — the same drawn italics on a continuous weight axis, ~79% fewer bytes on first paint, and a `preload` for the two faces above the fold |
| 7 — marks | the two brand wordmarks cut from 3432px and 1770px PNGs to lossless webp at three times their display box (96 kB → 18 kB); the nine emoji replaced by Material marks — the eight skill-row ones follow the theme and the row's own hover state, the contact one takes the sentence's size and colour |
| 8 — boundaries | inputs and carousel thumbs outlined with a new `--rule-control` token that clears 3:1 against both the field and the page in each theme (WCAG 1.4.11), while `--rule` keeps the decorative hairlines at their own weight; all thirteen `:hover` rules moved behind `@media (hover: hover)` so a tap no longer latches a state touch pointers cannot leave |
| 9 — prose and exposure | the About and Music narratives justified with hyphenation on, so both edges hold; the exposed band photo cut from 1024px to a centred 760px column with its caption, which stops the media frame from painting a band of raised ground either side; the thumbnail rail sized to its thumbs and centred with its arrows, which removes the gap that used to open between the last thumb and the next arrow on a wide viewport; a theme swap now suppresses every colour transition for one frame, so the page repaints into the new theme instead of smearing across it |
| 10 — mobile navigation | below 768px the eight links collapse into a `Menu` disclosure instead of wrapping, so the header goes from 216px in five rows to 122px in two; the panel expands in flow — one 44px row per link, hairlines between them — and the theme chips stay outside it, so a change of theme never costs an extra tap. `Escape` closes and returns focus to the button, a tap outside closes, choosing a link closes, and crossing 768px with the panel open resets it to inline. Desktop is pixel-identical: the list's layout moved out of Tailwind utilities into a semantic `.nav-links`, because a rule in `@layer components` cannot override a utility on the same element |

Still open, in rough order of return:

- **Band photo candidate.** Slide 1 tops out at 800w, so on a large viewport it is the one image
  that upscales instead of resolving.
- **Licences.** The hosted fonts are OFL-licensed, but no licence file ships beside them in
  `public/fonts/`.

## Language

English only, by decision rather than omission: a language switcher or Portuguese UI copy is out of
scope for this product.
