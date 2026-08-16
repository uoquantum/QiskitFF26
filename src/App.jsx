import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout.jsx'
import PageTransition from './components/layout/PageTransition.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Schedule = lazy(() => import('./pages/Schedule.jsx'))
const Speakers = lazy(() => import('./pages/Speakers.jsx'))
const Workshops = lazy(() => import('./pages/Workshops.jsx'))
const Learn = lazy(() => import('./pages/Learn.jsx'))
const Sponsors = lazy(() => import('./pages/Sponsors.jsx'))
const Organizers = lazy(() => import('./pages/Organizers.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))
const Faq = lazy(() => import('./pages/Faq.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const CodeOfConduct = lazy(() => import('./pages/CodeOfConduct.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <Suspense fallback={<div className="section min-h-[60vh]" />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/schedule" element={<PageTransition><Schedule /></PageTransition>} />
            <Route path="/speakers" element={<PageTransition><Speakers /></PageTransition>} />
            <Route path="/workshops" element={<PageTransition><Workshops /></PageTransition>} />
            <Route path="/learn" element={<PageTransition><Learn /></PageTransition>} />
            <Route path="/sponsors" element={<PageTransition><Sponsors /></PageTransition>} />
            <Route path="/organizers" element={<PageTransition><Organizers /></PageTransition>} />
            <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><Faq /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/code-of-conduct" element={<PageTransition><CodeOfConduct /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  )
}
