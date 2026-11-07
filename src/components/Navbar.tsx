import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS } from '../data/navigation';
import { PROFILE } from '../data/profile';

const wideViewport = '(min-width: 768px)';

function Navbar() {
  const [open, setOpen] = useState(false);
  const navBarRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* Crossing up into the inline layout closes the panel. There the list is
     always visible, so the reset is invisible; what it buys is that shrinking
     the window cannot resurrect a panel the visitor left open, and
     aria-expanded never sits true on a button in display:none. */
  useEffect(() => {
    const wide = window.matchMedia(wideViewport);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    wide.addEventListener('change', onChange);
    return () => wide.removeEventListener('change', onChange);
  }, []);

  /* Bound only while the panel is open, and released by the cleanup. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navBarRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <header ref={navBarRef} className="nav-bar" data-menu-open={open ? 'true' : undefined}>
      <nav aria-label="Main" className="shell flex flex-wrap items-center gap-x-6 gap-y-3 py-4">
        <p className="mr-auto font-mono text-sm uppercase tracking-[0.08em] text-ink">
          <span className="text-accent">&lt;qa&gt;</span> {PROFILE.logoName}{' '}
          <span className="text-accent">&lt;/qa&gt;</span>
        </p>

        <button
          ref={menuButtonRef}
          type="button"
          aria-controls="nav-links"
          aria-expanded={open}
          className="btn nav-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-menu-label">Menu</span>
          <span aria-hidden="true" className="nav-menu-marker">
            +
          </span>
        </button>

        <ul id="nav-links" role="list" className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {/* Closing on the anchor, not on the list: a click handler on a
                  non-interactive element is exactly what the a11y lint flags. */}
              <a href={link.href} className="nav-link" onClick={() => setOpen(false)}>
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
