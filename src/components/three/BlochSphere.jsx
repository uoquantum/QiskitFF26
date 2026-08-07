import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Html, Line } from '@react-three/drei'
import * as THREE from 'three'
import useTheme from '../../hooks/useTheme.js'

const RADIUS = 1.9

const PALETTE = {
  dark: {
    wireframe: '#4318A6',
    wireframeOpacity: 0.08,
    ringCyan: '#22D3EE',
    ringViolet: '#8A3FFC',
    ringMagenta: '#D946EF',
    pole: '#F4F2FB',
    vector: '#5EEAFF',
    labelIce: '#F4F2FB',
  },
  light: {
    wireframe: '#6929C4',
    wireframeOpacity: 0.22,
    ringCyan: '#0E7490',
    ringViolet: '#6929C4',
    ringMagenta: '#BE185D',
    pole: '#171123',
    vector: '#0E7490',
    labelIce: '#171123',
  },
}

function AxisLabel({ position, children, color }) {
  return (
    <Html position={position} center distanceFactor={8} zIndexRange={[1, 0]}>
      <div
        className="select-none whitespace-nowrap font-mono text-[11px] tracking-wide"
        style={{ color, textShadow: '0 0 8px rgba(0,0,0,0.9)' }}
      >
        {children}
      </div>
    </Html>
  )
}

function Ring({ rotation, color, opacity = 0.55 }) {
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * Math.PI * 2
      pts.push([Math.cos(a) * RADIUS, Math.sin(a) * RADIUS, 0])
    }
    return pts
  }, [])
  return (
    <Line
      points={points}
      color={color}
      rotation={rotation}
      transparent
      opacity={opacity}
      lineWidth={1.1}
    />
  )
}

function StateVector({ color }) {
  const lineRef = useRef()
  const tipRef = useRef()
  const t = useRef(0)

  useFrame((state, delta) => {
    t.current += delta * 0.35
    const mx = state.pointer.x
    const my = state.pointer.y

    const theta = Math.PI / 2 - (Math.sin(t.current * 0.6) * 0.55 + my * 0.6)
    const phi = t.current * 0.8 + mx * 1.1

    const x = RADIUS * Math.sin(theta) * Math.cos(phi)
    const y = RADIUS * Math.cos(theta)
    const z = RADIUS * Math.sin(theta) * Math.sin(phi)

    if (lineRef.current) {
      const positions = lineRef.current.geometry.attributes.position
      positions.setXYZ(1, x, y, z)
      positions.needsUpdate = true
    }
    if (tipRef.current) {
      tipRef.current.position.set(x, y, z)
    }
  })

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, RADIUS, 0)])
    return g
  }, [])

  return (
    <group>
      <line ref={lineRef} geometry={geom}>
        <lineBasicMaterial color={color} transparent opacity={0.9} />
      </line>
      <mesh ref={tipRef}>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  )
}

export default function BlochSphere() {
  const group = useRef()
  const inner = useRef()
  const { pointer } = useThree()
  const theme = useTheme()
  const c = PALETTE[theme]

  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    const targetX = pointer.y * 0.35
    const targetZ = -pointer.x * 0.35
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.04
    if (inner.current) inner.current.rotation.y -= delta * 0.25
  })

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[RADIUS, 48, 48]} />
        <meshBasicMaterial color={c.wireframe} wireframe transparent opacity={c.wireframeOpacity} />
      </mesh>

      <Ring rotation={[0, 0, 0]} color={c.ringCyan} opacity={0.5} />
      <Ring rotation={[Math.PI / 2, 0, 0]} color={c.ringViolet} opacity={0.5} />
      <Ring rotation={[Math.PI / 2.2, Math.PI / 3, 0]} color={c.ringMagenta} opacity={0.35} />

      <group ref={inner}>
        <mesh>
          <sphereGeometry args={[0.16, 24, 24]} />
          <meshBasicMaterial color={c.pole} toneMapped={false} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.34, 24, 24]} />
          <meshBasicMaterial color={c.ringViolet} transparent opacity={0.18} toneMapped={false} />
        </mesh>
      </group>

      <StateVector color={c.vector} />

      <mesh position={[0, RADIUS, 0]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color={c.pole} />
      </mesh>
      <mesh position={[0, -RADIUS, 0]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color={c.pole} />
      </mesh>

      <AxisLabel position={[0, RADIUS + 0.32, 0]} color={c.labelIce}>|0⟩</AxisLabel>
      <AxisLabel position={[0, -RADIUS - 0.32, 0]} color={c.labelIce}>|1⟩</AxisLabel>
      <AxisLabel position={[RADIUS + 0.3, 0, 0]} color={c.ringCyan}>|+⟩</AxisLabel>
      <AxisLabel position={[-RADIUS - 0.3, 0, 0]} color={c.ringCyan}>|−⟩</AxisLabel>
      <AxisLabel position={[0, 0, RADIUS + 0.3]} color={c.ringMagenta}>|+i⟩</AxisLabel>
      <AxisLabel position={[0, 0, -RADIUS - 0.3]} color={c.ringMagenta}>|−i⟩</AxisLabel>
    </group>
  )
}
