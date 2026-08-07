import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import BlochSphere from './BlochSphere.jsx'
import ParticleField from './ParticleField.jsx'

export default function QuantumCanvas() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.6, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={['#050409', 6, 13]} />
        <ambientLight intensity={0.5} />
        <ParticleField />
        <BlochSphere />
      </Suspense>
    </Canvas>
  )
}
