# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** QA hiring managers and technical recruiters evaluating candidates for manual and
automated software-testing roles. They arrive in English from an international/remote market —
a job board, a LinkedIn profile, or a GitHub link — and read the page as a one-pass screen, not a
visit they intend to return to. Their job is to decide quickly whether this candidate is worth a
conversation, and to have something concrete to forward to a lead.

**Secondary, and not the design target:** crowd-testing platforms and existing personal/professional
contacts who already know Leandro and are confirming details. The page serves them incidentally.

## Positioning

QA tester who builds his own automation. The claim a neighbouring junior QA portfolio could not
truthfully copy is the combination: live freelance manual-testing practice on crowd-testing
platforms (real bug reporting, Jira workflow, BDD/Gherkin) **plus** self-initiated, published
automation frameworks — a Playwright/TypeScript Page-Object framework with 20+ end-to-end
scenarios and a Selenium/Python extension of a manual test suite — each documented in a public
repository the recruiter can open.

Career direction is stated as fact, not aspiration-in-disguise: he is a junior tester whose explicit
goal is Test Automation Engineer. The agreed positioning leads with demonstrated automation work
while staying honest about the level. A seniority label is a copy decision that follows from this,
not the other way round.

## Product Purpose

One-page personal portfolio that turns a short recruiter visit into an inbound contact. Success is
measured as a recruiter submitting the contact form or using the published email/phone — an
interview conversation. It is a hiring decision aid, not a marketing site: it has no funnel, no
pricing, no account, and no content strategy.

## Operating Context

- Content is separated from presentation: every section reads typed modules in `src/data/`
  (`profile`, `aboutContent`, `skills`, `projects`, `education`, `certifications`, `workExperience`,
  `music`, `contact`, `navigation`). Editing the site's facts means editing those modules, not JSX.
- One scrollable page, anchor-navigated in a sticky navbar, in this order: About, Skills & Tools,
  Projects, Education, Certifications, Work Experience, Music, Contact.
- The visitor's real conditions: desktop and mobile browsers, light and dark theme (system
  preference respected, manual choice persisted as `portfolio-theme` in localStorage), English only.
- Motion already behaves under `prefers-reduced-motion`; interactive elements already carry
  `focus-visible` styling and ARIA attributes.
- The recruiter's evidence chain leaves the site: GitHub repositories, LinkedIn, and the photography
  credits on band images name real people and venues.
- Music is a real part of the person's history — a post-rock band with dated live performances and
  a credited photo archive, now solo ambient guitar/synth. Its role in the hiring decision is
  **humanising and secondary**: it supports the soft-skill story (creativity, focus, communication,
  proactivity, leadership) without competing for the top of the page.

## Capabilities and Constraints

- **Stack and gates:** Vite + React 19 + TypeScript + Tailwind 4, React Compiler enabled.
  `npm run dev` / `npm run build` (`tsc -b && vite build`) / `npm run lint` (oxlint) / `npm run preview`.
- **No test runner is configured.** Nothing in this project is automated-tested today; any future
  work that cannot verify in a browser has only typecheck and lint as gates. This is a product fact,
  not an oversight to hide.
- **Static-only, published to GitHub Pages.** No backend, ever, unless the hosting decision changes.
  The contact form posts directly to `api.web3forms.com` with an access key stored in
  `src/data/contact.ts`. Server-side features are out of scope for this product.
- **Target URL: a domain root** (user site or custom domain), decided. The build nevertheless runs
  with `base: './'` and resolves every `public/` path through `src/utils/url.ts`, so the same
  artifact also serves from a project subpath without reconfiguring anything.
- **Deploy is configured, not yet enabled.** `.github/workflows/deploy.yml` lints, typechecks, builds
  and publishes `dist/` on every push to `main`. Pages still has to be switched to **GitHub Actions**
  as its source in the repository settings — a dashboard step this repo cannot do for itself.
- **The repository is public.** The Web3Forms access key ships inside the bundle and is readable by
  anyone; that is normal for a client-side form, and it is also why the endpoint accepts unsolicited
  submissions. No honeypot field exists yet.
- **Language:** English only. Adding a language switcher or Portuguese UI copy is out of scope by
  decision, not by omission.
- **Typography is locally hosted** (`public/fonts`: Josefin Sans, Inter). No external font CDN.
- **Claims the site may make about current status:** location and work model, and availability for
  roles. **The specific values are not yet supplied** and must come from Leandro before any copy
  states them — do not write "remote", "Porto-based", "relocation", "immediately available" or a
  notice period from inference.
- **Claims the site must not make:** testimonials, employer endorsements, client logos, press
  coverage, salary expectations, aggregate years-of-QA figures beyond the documented timeline, or
  the existence of a downloadable CV — there is none in the repo.
- Public email and phone in the footer are deliberate and stay published.

## Brand Commitments

- Name: **Leandro Sousa**; the nav wordmark is the lowercase form `leandro sousa`. Page title is
  `Leandro Sousa | Software Tester`.
- Current tagline: `Junior QA Tester | Manual Testing • Test Automation • Agile` (in `index.html`
  metadata and `src/data/profile.ts`). Changing it is a product-copy decision under the Positioning
  rule above, and must be done once in both places.
- Voice: first person, plain, self-described, and candid about being early-career. The About copy in
  `src/data/aboutContent.ts` is the author's own writing — treat it as source copy to preserve, not
  raw material to rewrite.
- Social presence: LinkedIn `leandrosousabastos`, GitHub `leansose`, Instagram `leansose`.
- Band photograph credits ("Photo by Maria do Carmo Louceiro", "Lais Pereira", "Pedro Sousa",
  "David Madeira") are part of the asset and travel with the image wherever it is used.

## Evidence on Hand

Real content future work may use and must not dilute:

- `src/data/projects.ts` — manual-testing, Playwright automation, and API-testing projects with
  public repository URLs under `github.com/leansose`.
- `src/data/workExperience.ts` — dated timeline 2013–present: Freelance Software Tester at
  BetaTesting (Feb 2026–) and roles at NOS Comunicações SA including Team Leader – Sales Team.
- `src/data/certifications.ts` (4 entries), `src/data/education.ts` (2), `src/data/skills.ts` (9).
- `src/data/aboutContent.ts` — first-person introduction, written by the author.
- `src/data/music.ts` + `public/band/` — five live-performance photographs with venue and year
  (Post-Amplifest Session 2014, Amplifest 2015, Barracuda 2020, Ferro Bar 2019), responsive
  `srcSet` variants, and named photographers.
- `src/data/contact.ts` — working Web3Forms endpoint with field validation rules.

**Absent, and not to be fabricated:** CV/résumé file, testimonials, case studies or metrics from
employers, client names, blog posts, press, analytics-backed outcomes, and any claim about
availability or work location.

## Product Principles

1. **Win the one-pass screen.** A recruiter who scrolls once must be able to answer "can this
   person test, and can this person automate?" without leaving the page or opening anything.
2. **Artifacts over adjectives.** Every capability claim is carried by something checkable — a repo,
   a scenario count, a dated entry, a certification — not by a self-rating.
3. **Honest level, clear direction.** Never inflate seniority; never bury the automation work.
4. **The person is part of the proof.** Music and the non-QA history earn their place as secondary,
   humanising signal — they never outrank hiring evidence or move above the professional sections.
5. **One static page that works for anyone, anywhere.** No login, no backend dependency, English
   only, both themes, both pointer types.

## Accessibility & Inclusion

No formal accessibility standard has been adopted for this product — recorded as an open decision,
not an absence of interest. What is already true in the implementation: theme follows
`prefers-color-scheme` with a user override, animations and the band carousel's auto-advance check
`prefers-reduced-motion`, interactive elements define `:focus-visible` states, and components carry
ARIA attributes. The site is read by hiring strangers on varying devices and connection quality, so
keyboard completeness, contrast in both themes, and text scaling are the areas future work should
verify rather than assume.
