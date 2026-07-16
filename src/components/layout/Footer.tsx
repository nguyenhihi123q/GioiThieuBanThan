import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Heart,
} from 'lucide-react'
import { personalInfo, navigationItems } from '@/constants/data'

const socialIcons = [
  { label: 'Facebook', url: '#' },
  { label: 'GitHub', url: '#' },
  { label: 'LinkedIn', url: '#' },
  { label: 'YouTube', url: '#' },
]

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const quickLinks = navigationItems.slice(0, 6)
  const moreLinks = navigationItems.slice(6)

  return (
    <footer
      className="border-t border-border bg-surface-secondary"
      role="contentinfo"
    >
      <div className="container-wide section-padding">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="mb-4 flex items-center gap-2"
              aria-label="Home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-base font-bold text-white">
                N
              </div>
              <div>
                <div className="text-subtitle2 font-semibold text-text-primary">
                  {personalInfo.name}
                </div>
                <div className="text-caption1 text-text-tertiary">
                  {t('footer.description')}
                </div>
              </div>
            </Link>
            <div className="mt-4 space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-body2 text-text-secondary transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-body2 text-text-secondary transition-colors hover:text-brand"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {personalInfo.phone}
              </a>
              <div className="flex items-center gap-2 text-body2 text-text-secondary">
                <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                {personalInfo.address}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-subtitle2 font-semibold text-text-primary">
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="text-body2 text-text-secondary transition-colors hover:text-brand"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="mb-4 text-subtitle2 font-semibold text-text-primary">
              &nbsp;
            </h3>
            <ul className="space-y-2">
              {moreLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="text-body2 text-text-secondary transition-colors hover:text-brand"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-subtitle2 font-semibold text-text-primary">
              {t('footer.connect')}
            </h3>
            <div className="flex gap-2">
              {socialIcons.map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border px-3 text-body2 font-medium text-text-secondary transition-all duration-fast hover:border-brand hover:bg-brand/10 hover:text-brand"
                  aria-label={label}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-caption1 text-text-tertiary">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-caption1 text-text-tertiary">
            Built with
            <Heart className="h-3 w-3 fill-red-500 text-red-500" aria-hidden="true" />
            and React
          </p>
        </div>
      </div>
    </footer>
  )
}
