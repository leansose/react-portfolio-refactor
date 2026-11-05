---
name: Leandro Sousa QA Portfolio
description: A one-pass screening document for a QA tester who builds his own automation.
colors:
  surface: "#f7f8f6"
  surface-raised: "#ffffff"
  ink: "#15171a"
  ink-muted: "#4a4f57"
  ink-faint: "#656b74"
  accent: "#177f4b"
  accent-deep: "#0f6a3d"
  on-accent: "#ffffff"
  rule: "#c6cbd1"
  danger: "#b3261e"
typography:
  display:
    fontFamily: "'Josefin Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Josefin Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "'Josefin Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.2
  lead:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "ui-monospace, 'SF Mono', 'Cascadia Mono', Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
  meta:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "3px"
  md: "6px"
  pill: "999px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "80px"
  2xl: "120px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.surface}"
  button-icon:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "44px"
  chip-theme:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
    height: "34px"
  chip-theme-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  tag:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.sm}"
    padding: "2px 4px"
  field:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    padding: "4px 0"
---

# Design System: Leandro Sousa QA Portfolio

## Overview

**Creative North Star: "The Test Report"**

The evidence is the decoration. This page behaves like a well-written test report rather than a
personal website: numbered rows, dated entries, monospaced metadata, hairline rules between
classifications, and prose held to a reading measure. Nothing sits on the screen that does not help
a reader verify something about the candidate. Whitespace, a 1px rule, and a small uppercase label
in a monospace face are the entire ornamental vocabulary — and that is the point. A recruiter
deciding in one pass should feel the calm of a document that has already been organised for them.

The system runs in two themes bound to the same semantic token names, so a component never chooses
a colour, only a role. Light mode is cool paper and near-black ink with one deep green; dark mode
re-binds the same roles to a graphite surface with a mint accent. Both are the same report. Density
is comfortable rather than tight: sections breathe between 64px and 120px depending on viewport
height, and every paragraph of substance is capped at a 68ch measure.

The controls are instrumental and precise. Every button label, chip, tag, and navigation link is set
in the monospace face, uppercase, with tracked-out letters, which makes the interface read as
instrumentation — a step counter, a log level, a status line — rather than as marketing chrome. The
one moment of personality in the whole system is a `+` marker that rotates 45° into an `×` when a
row opens.

**Key Characteristics:**
- Report typography: display headings are always uppercase; metadata is always monospace.
- One accent colour, used sparingly as a signal — hover, selection, focus, disclosure. Never as scenery.
- Flat by construction: depth comes from hairline rules and tonal surface steps, not shadows.
- Gently curved or fully pill corners only, in a three-step scale (3px / 6px / pill).
- 44px hit targets on every primary control, documented in the CSS as a WCAG 2.5.5 commitment.
- Motion exists only on interaction: 150ms on state, 280ms on disclosure, and a global reduced-motion guard.

## Colors

The palette is a cool neutral ground with near-black ink and a single green signal; everything else
is a border or a warning. The frontmatter values are the light theme — `[data-theme='dark']` in
`src/styles/tokens.css` re-binds every one of these names, so no component ever needs a second
value.

### Primary
- **Pass Green** (`accent`): the whole personality of the system, and rationed. It colours section
  titles, the `<qa>` wordmark brackets, link text, button fill, the expanded row's 2px spine, the
  active carousel border, and the focus ring. Its rarity is what makes it read as a verdict rather
  than a theme.
- **Pass Green, Pressed** (`accent-deep`): hover on a filled primary button and on a selected chip.

### Neutral
- **Cool Paper** (`surface`): the page ground. One step off pure white so large fields do not glare.
- **Sheet White** (`surface-raised`): the only raised surface in the system — form fields and the
  carousel media frame. It is a tonal step, not an elevation.
- **Report Ink** (`ink`): headings, body text, button labels.
- **Report Ink, Softened** (`ink-muted`): leads, secondary text, tags, chips, default navigation links.
- **Report Ink, Faint** (`ink-faint`): eyebrows and numbering, placeholders, hover borders on inputs.
- **Hairline Rule** (`rule`): 1px structural borders — section footer top edge, list separators, row
  list edges, input borders, inactive carousel thumbnails.
- **On Pass Green** (`on-accent`): text and glyph colour whenever Pass Green is the fill.
- **Fail Red** (`danger`): reserved for one thing — an invalid form field border.

### Named Rules
**The One Voice Rule.** Pass Green is the only accent in the system. A new hue is not a second
accent; it is either a neutral role or it is a mistake.

**The Verdict Not Scenery Rule.** The accent signals an action, a state, or a heading. Any surface
area larger than a button is evidence that the accent is being used as decoration.

**The Role Not The Hex Rule.** Components consume `--bg`, `--ink`, `--accent`, `--rule`. A literal
hex inside a component breaks the theme contract, because the dark theme re-binds the name, not the
value.

## Typography

**Display Font:** Josefin Sans (fallback `ui-sans-serif, system-ui, sans-serif`), self-hosted at
400 / 600 / 700 from `public/fonts/`.
**Body Font:** Inter 24pt (fallback `ui-sans-serif, system-ui, sans-serif`), self-hosted at 400 /
500 / 700.
**Label/Mono Font:** the platform monospace stack (`ui-monospace, 'SF Mono', 'Cascadia Mono', Menlo,
monospace`) — deliberately not a downloaded face; it is a utility voice.

**Character:** Josefin Sans is a tall, narrow, geometric display face whose uppercase forms the
headline as a printed classification rather than as expressive type. Inter carries everything meant
to be read at length. The monospace stack is the system's metadata channel — the sound of a log
line, used for eyebrows, buttons, tags, and navigation.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 7vw, 5.5rem)`, line-height 1.05, tracking -0.01em, uppercase): the
  single hero title. One per page, never reused.
- **Headline** (700, `clamp(1.75rem, 4vw, 3rem)`, line-height 1.1, uppercase, Pass Green): section
  titles only. The green is what tells a scanner they have reached a new classification.
- **Title** (600, `clamp(1.25rem, 2.2vw, 1.625rem)`, line-height 1.2, sentence case): card and entry
  titles inside a section — project, skill group, role.
- **Lead** (400, 1.125rem, line-height 1.6, softened ink): the tagline under the hero title and other
  one-sentence summaries.
- **Body** (400, 1.0625rem, line-height 1.65): prose. Measure capped at 68ch.
- **Label / Eyebrow** (400 mono, 0.8125rem, line-height 1.4, tracking 0.14em, uppercase, faint ink):
  section eyebrows, row numbering, dates, field labels.
- **Meta** (400, 0.875rem, line-height 1.5, softened ink): small supporting text inside cards.
- **Button/Nav label** (700 mono 0.8125rem / 400 mono 0.6875rem, tracking 0.08em, uppercase):
  the control voice. Distinguished from the eyebrow only by weight and size, never by a new face.

### Named Rules
**The Classification Case Rule.** Display and Headline are uppercase by contract; Body, Lead, and
Title are sentence case. A lowercase section title is a different brand.

**The Metadata Is Monospace Rule.** Anything that behaves like a label rather than a sentence —
eyebrow, index number, date, field label, button text, tag, nav link — is set in the monospace
stack with positive tracking. Reading text never is.

**The Tabular Numbers Rule.** Any number that must line up down a column carries the `tabular-nums`
utility, so a list of indices or counts reads as a table.

## Layout

One column, one page, one measure. Everything sits inside a centred container of
`min(1200px, 100% - 2 * clamp(16px, 5vw, 48px))`, applied through the `.section` and `.shell`
classes, so the gutter grows with the viewport up to 48px and the content never runs edge-to-edge.

Sections are stacked, separated by vertical rhythm rather than by boxes: block padding of
`clamp(64px, 12vh, 120px)` means the page opens generously on a tall desktop and tightens itself on
a short laptop without a breakpoint. The footer uses its own `clamp(48px, 8vh, 80px)` and a top
hairline. Between a section head and its body sits `--space-stack` (`clamp(32px, 6vh, 48px)`).

The section anatomy is fixed and reusable: `.section-head` holds eyebrow → title → lead with 16px
between siblings and only 4px between an eyebrow and what it labels, then `.section-body` follows.
Content lists use `.stack` (16px), dense row lists use `.sub-list` (8px vertical padding per item
with a 1px top rule), and the form is capped at a 560px measure.

Responsive change is behavioural, not decorative. Below 768px the navigation bar stops being sticky,
because wrapped links would otherwise pin a quarter of the viewport, and `--nav-offset` drops from
84px to 0 so anchors land correctly. Layout within a component uses flex-wrap rather than a grid of
breakpoints, so rows reflow instead of collapsing. Spacing inside components uses Tailwind's
utility scale (`gap-2`, `mt-4`) while section-level rhythm always comes from the token scale.

## Elevation & Depth

Flat by construction. The system has one shadow token, `--shadow-raised`, and it is **not applied
anywhere in the codebase** — no element in the shipped interface uses a box-shadow for depth. The
only shadow that exists in practice is a focus ring. Depth is conveyed three ways instead: a 1px
`--rule` hairline that says "these are separate regions", a tonal step from Cool Paper to Sheet White
that says "this surface is fillable or holds media", and a 2px Pass Green spine on an expanded row
body that says "this content is open because you asked".

### Shadow Vocabulary
- **Raised Surface** (`box-shadow: 0 1px 2px rgba(21,23,26,.06), 0 8px 24px -12px rgba(21,23,26,.28)`;
  dark theme uses stronger black): reserved, currently unused. Treat it as a documented option for
  floating media only, not as a default.
- **Focus Halo** (`box-shadow: 0 0 0 3px var(--surface-pressed)` on a focused input, alongside an
  accent border): the one shadow that fires today. It is a state indicator, not elevation.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest and stay flat in every state. If a design
needs depth, add a hairline or a tonal step before reaching for a shadow.

**The Border For Structure Rule.** A 1px `--rule` border means "boundary between regions". It never
means "this is elevated".

## Shapes

Gently curved, never soft-plastic. The corner scale has exactly three steps and each carries a
meaning: 3px (`--radius-sm`) for informational atoms — tags, form fields; 6px (`--radius-md`) for
interactive surfaces that receive a hover fill — row summaries, logo links, media frames, carousel
thumbnails; and the full pill (`--radius-pill`) for anything you press — every button, chip, and icon
target.

Silhouette is otherwise rectilinear and open. There is no card chrome: no card has a background, a
border, or a container of its own. Content separates through rules and indentation. Two pieces of
geometry break the grid deliberately, and they are the system's fingerprints — the 2px accent spine
that hangs an expanded row body off its summary, and the `+` marker that rotates 45° to become `×`.
Inputs and tags keep a visible 1px stroke (solid for fields, dashed for tags), which is also the
non-text contrast the field boundary needs.

## Components

### Buttons
- **Shape:** fully pill (999px), with a 1px transparent border held permanently so forced-colors and
  hover states can draw an edge without layout shift.
- **Primary:** Pass Green fill, On Pass Green label, monospace uppercase 0.8125rem at weight 700 with
  0.08em tracking, 16px inline padding, 44px minimum block size. Hover deepens to Pressed Green;
  active translates down 1px. All state changes run 150ms on `--ease-out`.
- **Outline:** transparent fill, ink label, hairline faint-ink border; hover darkens the border to
  softened ink and fills with the 6% surface wash. Same 44px target.
- **Icon:** 44×44 pill on the 6% surface wash, no label; hover deepens the wash to 11%, active
  translates 1px. Used for compact glyph targets.
- **Chip:** the theme switcher's three-way control. 34px tall on a fine pointer, 8px inline padding,
  monospace 0.6875rem in softened ink on a transparent fill. Pressed state (`aria-pressed='true'`) takes
  the Pass Green fill. Chips are the documented exception to the 44px rule and stay above the 24px AA
  floor — but only where the pointer is precise: under `pointer: coarse` they return to 44px, because a
  34px target between 8px gaps is a mis-tap rather than a style choice.
- **Disabled:** 40% opacity, `not-allowed` cursor, and no press transform.
- **Character:** tactile instrumentation. Every label reads like a status line.

### Tags
- **Style:** 1px dashed hairline border, 3px corner, 2px × 4px padding, monospace 0.6875rem uppercase
  with 0.08em tracking in softened ink.
- **Behaviour:** static descriptors on a project row's summary. The dash is the whole idea — it looks
  pencilled in, not pressed.

### Cards / Containers
- **Corner style:** no card chrome exists. Where a region needs a container, it gets 6px.
- **Background:** inherits the page surface. Only fields and media frames step up to Sheet White.
- **Shadow strategy:** none; see Elevation & Depth.
- **Border:** 1px hairline rules on outer edges only (row lists, footer, sub-list separators).
- **Internal padding:** row lists pad 16px vertically per item; dense sub-lists pad 8px.

### Inputs / Fields
- **Style:** full-width, 1px solid hairline border, 3px corner, Sheet White fill, 10px × 12px padding,
  ink text with faint-ink placeholders. Hover darkens the border to faint ink.
- **Focus:** border becomes Pass Green and a 3px translucent halo appears (`--surface-pressed`) —
  the only place a shadow-like value is used.
- **Error:** validation belongs to the app, not the browser — the form carries `noValidate`, so a
  failing field gets a Fail Red border *and* a monospace 0.6875rem sentence beneath it, joined by
  `aria-describedby` with `aria-invalid="true"` on the control. No shake, no icon, no red background,
  but colour is never the whole message.
- **Hint:** the same line in faint ink, where a rule is worth stating before it is broken (the phone's
  nine digits). A hint gives up its place to the error while one is showing.
- **Form status:** one reserved line above the submit button, `role="status"`, present from page load so
  assistive tech announces the change rather than a re-render. Pass Green on success, Fail Red on
  failure, and the button carries the in-flight state itself: `Sending…` in place, disabled, no shift.
- **Labels:** always the eyebrow treatment, monospace uppercase, sat above the field with 4px.

### Navigation
- **Style:** a single bar in the page surface. Sticky with a bottom hairline from 768px up; static on
  mobile so wrapped links cannot eat the viewport.
- **Typography:** the wordmark is monospace 0.875rem uppercase in ink, wrapped in Pass Green `<qa>`
  and `</qa>` brackets — the identity's only code-flavoured gesture, and it stays a label, not a
  decoration. Links are monospace 0.6875rem uppercase with 0.08em tracking in softened ink.
- **States:** hover recolours the link to Pass Green over 150ms. There is no underline, no pill, no
  active-tab indicator — colour alone marks the interaction, and the anchor target is the feedback.
- **Anchors:** `scroll-padding-block-start` tracks `--nav-offset`, so a link lands below the bar, and
  smooth scrolling runs only under `prefers-reduced-motion: no-preference`.
- **Skip link:** the first tab stop. A 44px Pass Green pill held at `opacity: 0` and revealed on focus
  (never clipped, so its ring is never cropped), fixed to the container gutter and `--nav-offset + 16px`
  from the top so it clears the sticky bar. It targets `<main id="main">`.
- **Anchor focus:** every anchor target carries `tabindex="-1"` so Tab continues from the destination
  rather than from the top of the page. Those containers take no focus ring: they are never Tab stops,
  so 2.4.7 asks nothing of them, and a ring around an 8500px `<main>` would box the entire page.

### Accordion Row (signature component)
The system's core interaction and the reason the page can stay short. A native
`<details>/<summary>` line: index number, classification eyebrow, title, and tags on one
flex-wrapped baseline; a monospace `+` at the right. Hover fills the summary with the 6% surface wash
across a 6px radius and pulls the title to Pass Green — the whole row, not just the glyph, is the
target. Opening rotates the marker 45° over 280ms and reveals the body under a 2px accent spine with
a single 4px-travelling fade-in. Used identically for skills, projects, and certifications, which is
what makes it read as a system rather than as styling.

### Carousel
A media frame at 6px radius on Sheet White, a scroll-snapping rail of thumbnails with hidden
scrollbars, and hairline-bordered inactive thumbs at 55% opacity. The active thumb is full opacity
with a 2px Pass Green border; focus offset is 4px. Slide changes remount by key and replay a
35%→100% opacity fade over 280ms. Nothing auto-advances: the slide moves only when the visitor
clicks an arrow, taps a thumbnail, or uses arrows/Home/End on the focused rail, and the caption
carries the position as `01 / NN` in tabular numerals. Reduced motion removes the smooth scroll to
the thumbnail, not the fade.

### Back To Top
The primary button treatment, floated fixed at 24px from the bottom-right, 48px square, appearing
only after 300px of scroll through an opacity transition. It is `tabindex=-1` and non-interactive
while hidden, so a floating control never traps a keyboard press it cannot see.

### Motion Language
150ms for anything the user causes, 280ms for anything that reveals content, always on
`cubic-bezier(0.165, 0.84, 0.44, 1)`. Properties are named individually in every transition —
`background-color`, `border-color`, `color`, `box-shadow`, `transform` — never `all`. Press feedback
is a 1px translate, not a scale. There is exactly one entrance animation per region and one global
`prefers-reduced-motion: reduce` guard that collapses durations to 0.01ms.

## Do's and Don'ts

### Do:
- **Do** consume colour through the semantic names in `src/styles/tokens.css` and nothing else; the
  dark theme works only because every role is a re-bound name.
- **Do** keep the two faces in their lanes: Josefin Sans for headings, Inter for reading, monospace
  for labels. Adding a fourth face, or loading a face from a CDN, is out of system.
- **Do** set Display and Headline in uppercase and Title/Body in sentence case.
- **Do** hold prose to the 68ch measure and the form to its 560px measure.
- **Do** give every pressable control a 44px target, except theme chips on a fine pointer, which stay
  above the 24px floor and return to 44px on touch.
- **Do** mark depth with a 1px hairline or a tonal surface step; a 2px accent spine marks disclosure.
- **Do** reuse the accordion row for any list of evidence — it is the pattern recruiters already read.
- **Do** use the `+` → 45° rotation as the only disclosure affordance, and `tabular-nums` on any
  number that stands in a column.
- **Do** run state transitions at 150ms and reveals at 280ms on `--ease-out`, naming each property.
- **Do** test any new screen in both themes and at a mobile width below 768px, where the navigation
  stops being sticky.

### Don't:
- **Don't** turn this into the SaaS look: no glassmorphism, no backdrop blur, no elevated rounded
  cards, no violet or blue gradients, no 16px corners on everything. This is a confirmed rejection,
  not a preference.
- **Don't** apply `--shadow-raised` to ordinary surfaces. The system is flat by construction; an
  unused token is not an invitation.
- **Don't** use Pass Green as a large fill, a background band, or a theme. Its scarcity is the signal.
- **Don't** hardcode a hex or an `rgb()` value in a component; it will silently break the dark theme.
- **Don't** introduce a second accent, a gradient text treatment, or an emoji as an icon.
- **Don't** animate an interactive state with keyframes; transitions retarget, keyframes do not.
- **Don't** add motion that ignores `prefers-reduced-motion`, and don't rely on motion as the only
  feedback for a state change.
- **Don't** wrap content in a bordered card when a hairline rule and indentation will do.
- **Don't** put decorative brackets, badges, or icons in headings; the eyebrow already carries the
  classification.
