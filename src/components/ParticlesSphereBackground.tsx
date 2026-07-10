import { useEffect, useRef } from 'react'
import { ParticlesSwarm } from '../lib/ParticlesSwarm'

export function ParticlesSphereBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let swarm: ParticlesSwarm | null = null
    let resizeObserver: ResizeObserver | null = null

    try {
      swarm = new ParticlesSwarm(container, 1800)
      resizeObserver = new ResizeObserver(() => {
        if (swarm && container.clientWidth && container.clientHeight) {
          swarm.resize(container.clientWidth, container.clientHeight)
        }
      })
      resizeObserver.observe(container)
    } catch {
      // WebGL unavailable, silently skip the effect
    }

    return () => {
      resizeObserver?.disconnect()
      swarm?.dispose()
    }
  }, [])

  return <div ref={containerRef} className="particles-sphere-bg" />
}
