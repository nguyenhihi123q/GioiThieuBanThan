import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'
import { cn } from '@/lib/utils'

const languages = [
  { code: 'vi', label: 'VI' },
  { code: 'en', label: 'EN' },
]

export function LanguageSwitch() {
  const { i18n } = useTranslation()

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language selector">
      <Languages className="mr-1 h-4 w-4 text-text-tertiary" aria-hidden="true" />
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={cn(
            'rounded-md px-2 py-1 text-xs font-semibold transition-all duration-fast',
            i18n.language === code
              ? 'bg-brand text-white'
              : 'text-text-tertiary hover:bg-surface-tertiary hover:text-text-primary'
          )}
          aria-pressed={i18n.language === code}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
