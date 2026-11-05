import ThemeToggle from './ThemeToggle';
import { NAV_LINKS } from '../data/navigation';
import { PROFILE } from '../data/profile';

function Navbar() {
  return (
    <header className="nav-bar">
      <nav aria-label="Main" className="shell flex flex-wrap items-center gap-x-6 gap-y-3 py-4">
        <p className="mr-auto font-mono text-sm uppercase tracking-[0.08em] text-ink">
          <span className="text-accent">&lt;qa&gt;</span> {PROFILE.logoName}{' '}
          <span className="text-accent">&lt;/qa&gt;</span>
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Navbar;
