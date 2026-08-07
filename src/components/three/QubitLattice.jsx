import { useRef, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COLS = 9
const ROWS = 6
const SPACING = 1.15

function Lattice() {
  const group = useRef()

  const { nodePositions, linePositions } = useMemo(() => {
    const nodes = []
    for (let x = 0; x < COLS; x++) {
      for (let y = 0; y < ROWS; y++) {
        nodes.push(
          new THREE.Vector3(
            (x - (COLS - 1) / 2) * SPACING,
            (y - (ROWS - 1) / 2) * SPACING,
            (Math.random() - 0.5) * 1.4
          )
        )
      }
    }
    const lines = []
    const idx = (x, y) => x * ROWS + y
    for (let x = 0; x < COLS; x++) {
      for (let y = 0; y < ROWS; y++) {
        if (x < COLS - 1) {
          lines.push(nodes[idx(x, y)], nodes[idx(x + 1, y)])
        }
        if (y < ROWS - 1) {
          lines.push(nodes[idx(x, y)], nodes[idx(x, y + 1)])
        }
      }
    }
    return { nodePositions: nodes, linePositions: lines }
  }, [])

  const lineGeom = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(linePositions)
    return g
  }, [linePositions])

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.z += delta * 0.015
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.12
  })

  return (
    <group ref={group} rotation={[0.15, 0.3, 0]}>
      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial color="#6929C4" transparent opacity={0.18} />
      </lineSegments>
      {nodePositions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial
            color={i % 7 === 0 ? '#22D3EE' : '#8A3FFC'}
            transparent
            opacity={i % 7 === 0 ? 0.85 : 0.4}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function QubitLatticeCanvas({ className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Lattice />
      </Canvas>
    </div>
  )
}
