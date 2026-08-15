import { Suspense, lazy } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import FloatingDiscordButton from '../ui/FloatingDiscordButton.jsx'
import FloatingThemeToggle from '../ui/FloatingThemeToggle.jsx'

const QubitLatticeCanvas = lazy(() => import('../three/QubitLattice.jsx'))

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-void">
        <div className="absolute inset-0 bg-radial-glow" />
        <Suspense fallback={null}>
          <QubitLatticeCanvas className="absolute inset-0 opacity-40" />
        </Suspense>
      </div>

      <Navbar />
      <main className="relative pt-20">{children}</main>
      <Footer />
      <FloatingDiscordButton />
      <FloatingThemeToggle />
    </div>
  )
}
