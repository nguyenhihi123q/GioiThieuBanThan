import { ThemeProvider } from '@/hooks/useTheme'
import { AppRouter } from '@/config/router'

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}
