import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import type { ThemeMode } from '@/types'

const themes: { mode: ThemeMode; icon: typeof Sun; label: string }[] = [
  { mode: 'light', icon: Sun, label: 'Light' },
  { mode: 'dark', icon: Moon, label: 'Dark' },
  { mode: 'system', icon: Monitor, label: 'System' },
]

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="flex items-center rounded-lg border border-border bg-surface-secondary p-0.5"
      role="radiogroup"
      aria-label="Theme selector"
    >
      {themes.map(({ mode, icon: Icon, label }) => (
        <button
          key={mode}
          onClick={() => setTheme(mode)}
          className={cn(
            'flex items-center justify-center rounded-md p-1.5 transition-all duration-fast',
            theme === mode
              ? 'bg-surface text-text-primary shadow-fluent-2'
              : 'text-text-tertiary hover:text-text-secondary'
          )}
          role="radio"
          aria-checked={theme === mode}
          aria-label={label}
          title={label}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  )
}
