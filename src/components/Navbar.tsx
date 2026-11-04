import { NAV_LINKS } from '../data/navigation';
import { PROFILE } from '../data/profile';

function Navbar() {
  return (
    <nav aria-label="Main">
      <p>
        <span>&lt;qa&gt;</span> {PROFILE.logoName} <span>&lt;/qa&gt;</span>
      </p>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
