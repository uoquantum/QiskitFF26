import GlowButton from '../components/ui/GlowButton.jsx'

export default function NotFound() {
  return (
    <div className="section min-h-[60vh] flex flex-col items-center justify-center text-center">
      <p className="font-mono text-cyan-text text-sm mb-4 tracking-widest">STATE COLLAPSED</p>
      <h1 className="font-display text-6xl text-ink mb-4">404</h1>
      <p className="text-ink-muted mb-8 max-w-sm">
        This qubit measured into a state that doesn't exist. Let's get you back on track.
      </p>
      <GlowButton to="/">Back home</GlowButton>
    </div>
  )
}
