import { Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout.jsx'
import PageTransition from './components/layout/PageTransition.jsx'
import { lazyRetry } from './lib/lazyRetry.js'

const Home = lazyRetry(() => import('./pages/Home.jsx'))
const Schedule = lazyRetry(() => import('./pages/Schedule.jsx'))
const Speakers = lazyRetry(() => import('./pages/Speakers.jsx'))
const Workshops = lazyRetry(() => import('./pages/Workshops.jsx'))
const Learn = lazyRetry(() => import('./pages/Learn.jsx'))
const Sponsors = lazyRetry(() => import('./pages/Sponsors.jsx'))
const Team = lazyRetry(() => import('./pages/Team.jsx'))
const Register = lazyRetry(() => import('./pages/Register.jsx'))
const Faq = lazyRetry(() => import('./pages/Faq.jsx'))
const About = lazyRetry(() => import('./pages/About.jsx'))
const Contact = lazyRetry(() => import('./pages/Contact.jsx'))
const CodeOfConduct = lazyRetry(() => import('./pages/CodeOfConduct.jsx'))
const Challenges = lazyRetry(() => import('./pages/Challenges.jsx'))
const ChallengePrompt = lazyRetry(() => import('./pages/ChallengePrompt.jsx'))
const TeamRegistration = lazyRetry(() => import('./pages/TeamRegistration.jsx'))
const NotFound = lazyRetry(() => import('./pages/NotFound.jsx'))

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
            <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
            <Route path="/organizers" element={<Navigate to="/team" replace />} />
            <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><Faq /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/code-of-conduct" element={<PageTransition><CodeOfConduct /></PageTransition>} />
            <Route path="/challenges" element={<PageTransition><Challenges /></PageTransition>} />
            <Route path="/challenges/:slug" element={<PageTransition><ChallengePrompt /></PageTransition>} />
            <Route path="/team-registration" element={<PageTransition><TeamRegistration /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  )
}
