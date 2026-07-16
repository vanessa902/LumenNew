import { useState, useRef, useEffect } from 'react'

const DASHBOARD = '/LumenNew/preview/dashboard.png'

interface Fx { rx: number; ry: number; gx: number; gy: number }

export function ParallaxMockup() {
  const [fx, setFx] = useState<Fx>({ rx: 0, ry: 0, gx: 50, gy: 30 })
  const target = useRef<Fx>({ rx: 0, ry: 0, gx: 50, gy: 30 })
  const curr   = useRef<Fx>({ rx: 0, ry: 0, gx: 50, gy: 30 })
  const tiltRef = useRef<HTMLDivElement>(null)
  const rafRef  = useRef<number>(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth  - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      target.current.rx = -ny * 5
      target.current.ry =  nx * 7
      const r = tiltRef.current?.getBoundingClientRect()
      if (r) {
        target.current.gx = ((e.clientX - r.left) / r.width)  * 100
        target.current.gy = ((e.clientY - r.top)  / r.height) * 100
      }
    }

    const loop = () => {
      const t = target.current
      const c = curr.current
      c.rx += (t.rx - c.rx) * 0.08
      c.ry += (t.ry - c.ry) * 0.08
      c.gx += (t.gx - c.gx) * 0.12
      c.gy += (t.gy - c.gy) * 0.12
      setFx({ rx: c.rx, ry: c.ry, gx: c.gx, gy: c.gy })
      rafRef.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className="w-full pointer-events-none select-none"
      style={{ perspective: '1400px' }}
    >
      <div
        ref={tiltRef}
        className="relative will-change-transform"
        style={{
          transform: `rotateX(${fx.rx}deg) rotateY(${fx.ry}deg)`,
          transformOrigin: 'bottom center',
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src={DASHBOARD}
          alt="Dashboard"
          draggable={false}
          className="block w-full rounded-t-2xl md:rounded-t-[1.5rem] overflow-hidden"
        />
        {/* Glass reflection overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-t-2xl md:rounded-t-[1.5rem] overflow-hidden"
          style={{
            WebkitMaskImage: `url(${DASHBOARD})`,
            maskImage:        `url(${DASHBOARD})`,
            WebkitMaskSize:   '100% 100%',
            maskSize:         '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat:       'no-repeat',
            mixBlendMode:     'screen',
            background: [
              `radial-gradient(260px circle at ${fx.gx}% ${fx.gy}%, rgba(255,255,255,0.32), rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 70%)`,
              `linear-gradient(115deg, rgba(255,255,255,0) 42%, rgba(255,255,255,0.10) 49%, rgba(255,255,255,0) 56%)`,
            ].join(', '),
          }}
        />
      </div>
    </div>
  )
}
