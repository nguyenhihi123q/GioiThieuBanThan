import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationItems } from '@/constants/data'
import { ThemeSwitch } from '@/components/common/ThemeSwitch'
import { LanguageSwitch } from '@/components/common/LanguageSwitch'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-normal',
          isScrolled
            ? 'acrylic shadow-fluent-4'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <nav
          className="container-wide flex h-14 items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-subtitle2 font-semibold text-text-primary transition-colors hover:text-brand"
            aria-label="Home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">
              N
            </div>
            <span className="hidden sm:inline">Hoàng Nguyên</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className={cn(
                    'relative rounded-md px-1.5 py-1 text-xs xl:px-3 xl:py-1.5 xl:text-body2 font-medium transition-all duration-fast whitespace-nowrap',
                    isActive
                      ? 'text-brand'
                      : 'text-text-secondary hover:bg-surface-tertiary hover:text-text-primary'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {t(`nav.${item.key}`)}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1.5 right-1.5 xl:left-3 xl:right-3 h-0.5 rounded-full bg-brand"
                      layoutId="navbar-indicator"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop Controls */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch />
            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center rounded-md p-2 text-text-secondary transition-colors hover:bg-surface-tertiary hover:text-text-primary lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40,
              }}
              className="fixed bottom-0 right-0 top-0 z-50 w-72 border-l border-border bg-surface shadow-fluent-64 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex h-full flex-col">
                {/* Menu Header */}
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <span className="text-subtitle2 font-semibold text-text-primary">
                    {t('common.menu')}
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-md p-1.5 text-text-secondary hover:bg-surface-tertiary"
                    aria-label={t('common.close')}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto px-3 py-2" aria-label="Mobile navigation">
                  {navigationItems.map((item, index) => {
                    const isActive = location.pathname === item.path
                    return (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Link
                          to={item.path}
                          className={cn(
                            'flex items-center rounded-md px-3 py-2.5 text-body1 font-medium transition-all duration-fast',
                            isActive
                              ? 'bg-brand/10 text-brand'
                              : 'text-text-secondary hover:bg-surface-tertiary hover:text-text-primary'
                          )}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {t(`nav.${item.key}`)}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Menu Footer Controls */}
                <div className="border-t border-border px-4 py-3">
                  <div className="flex items-center justify-between">
                    <LanguageSwitch />
                    <ThemeSwitch />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
