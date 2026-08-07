import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useTheme from '../../hooks/useTheme.js'

// additive blending needs bright colors against a dark background to read;
// on a light background it washes out, so light mode uses darker, saturated
// colors with normal blending instead.
const PALETTE = {
  dark: [
    [0.13, 0.83, 0.93],
    [0.54, 0.25, 0.99],
    [0.85, 0.27, 0.94],
  ],
  light: [
    [0.055, 0.455, 0.565],
    [0.427, 0.157, 0.851],
    [0.745, 0.094, 0.365],
  ],
}

function useDotTexture() {
  return useMemo(() => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.6)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)
    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])
}

export default function ParticleField({ count = 700, radius = 6.5 }) {
  const points = useRef()
  const theme = useTheme()
  const dotTexture = useDotTexture()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const palette = PALETTE[theme]
    for (let i = 0; i < count; i++) {
      const r = radius * (0.35 + Math.random() * 0.65)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      pos[i * 3 + 2] = r * Math.cos(phi)

      const c = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3] = c[0]
      col[i * 3 + 1] = c[1]
      col[i * 3 + 2] = c[2]
    }
    return [pos, col]
  }, [count, radius, theme])

  useFrame((state, delta) => {
    if (!points.current) return
    points.current.rotation.y += delta * 0.025
    points.current.rotation.x = THREE.MathUtils.lerp(
      points.current.rotation.x,
      state.pointer.y * 0.08,
      0.02
    )
  })

  return (
    <points ref={points} key={theme}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={theme === 'light' ? 0.09 : 0.06}
        map={dotTexture}
        alphaTest={0.01}
        vertexColors
        transparent
        opacity={theme === 'light' ? 0.95 : 0.85}
        sizeAttenuation
        blending={theme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
