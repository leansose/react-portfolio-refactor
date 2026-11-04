import { useTheme } from '../hooks/useTheme';
import type { ThemePreference } from '../hooks/useTheme';

const OPTIONS: { value: ThemePreference; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

function ThemeToggle() {
  const { preference, setPreference } = useTheme();

  return (
    <div role="group" aria-label="Colour theme" className="flex items-center gap-1">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={preference === option.value}
          className={`rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.08em] transition-colors hover:bg-ink/10 ${
            preference === option.value ? 'bg-ink/10 text-ink' : 'text-ink-muted'
          }`}
          onClick={() => setPreference(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;
