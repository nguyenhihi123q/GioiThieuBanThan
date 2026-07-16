import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useScrollToTop } from '@/hooks/useScrollToTop'

export function Layout() {
  useScrollToTop()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1 pt-14" role="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
