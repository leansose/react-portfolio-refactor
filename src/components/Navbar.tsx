import ThemeToggle from './ThemeToggle';
import { NAV_LINKS } from '../data/navigation';
import { PROFILE } from '../data/profile';

function Navbar() {
  return (
    <nav
      aria-label="Main"
      className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center gap-x-6 gap-y-3 px-[clamp(16px,5vw,48px)] py-4"
    >
      <p className="mr-auto font-mono text-sm uppercase tracking-[0.08em] text-ink">
        <span className="text-accent">&lt;qa&gt;</span> {PROFILE.logoName} <span className="text-accent">&lt;/qa&gt;</span>
      </p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="font-mono text-xs uppercase tracking-[0.08em] text-ink">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
