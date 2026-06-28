'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { roles, socials, stats } from '@/lib/portfolio-data'

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = 0, H = 0

    const PARTICLE_COUNT = 72

    interface Particle {
      x: number; y: number; vx: number; vy: number
      r: number; alpha: number; alphaDir: number
    }
    let particles: Particle[] = []

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const init = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.5 + 0.1,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99,179,237,${0.08 * (1 - dist / 130)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.alpha += p.alphaDir * 0.003
        if (p.alpha > 0.6 || p.alpha < 0.08) p.alphaDir *= -1
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147,197,253,${p.alpha})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => { resize(); init() })
    ro.observe(canvas)
    resize()
    init()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
    />
  )
}

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-4 pt-28 pb-16 sm:px-6 md:pt-36 flex flex-col"
    >
      <ParticleCanvas />

      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(70rem 40rem at 75% -5%, color-mix(in oklch, var(--brand) 18%, transparent), transparent), radial-gradient(45rem 28rem at 5% 25%, color-mix(in oklch, var(--accent-cyan) 10%, transparent), transparent), radial-gradient(30rem 20rem at 85% 85%, color-mix(in oklch, var(--brand) 8%, transparent), transparent)',
        }}
      />

      <div className="mx-auto grid max-w-6xl flex-1 items-center gap-16 md:grid-cols-[1.45fr_1fr]">
        {/* Left */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-cyan" />
            </span>
            Open to research & engineering roles
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="mt-7 text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            Weldesemayat
            <br />
            <span className="bg-gradient-to-r from-brand via-accent-cyan to-brand bg-clip-text text-transparent [background-size:200%] animate-[shimmer_4s_linear_infinite]">
              Teklay
            </span>
          </motion.h1>

          {/* Animated role */}
          <div className="mt-5 flex h-8 items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-base font-medium tracking-widest uppercase text-accent-cyan"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Building NLP and speech AI for{' '}
            <span className="text-foreground font-medium">low-resource languages</span>{' '}
            — making AI work for every human language, not just the well-resourced ones.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              nativeButton={false}
              render={
                <a href="/cv.pdf" download>
                  <Download className="size-4" />
                  Download CV
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#projects">View Research</a>}
            />
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { href: socials.github, icon: GithubIcon, label: 'GitHub' },
              { href: socials.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
              { href: socials.email, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-xl border border-border bg-card/40 text-muted-foreground backdrop-blur-sm transition-all hover:border-brand/60 hover:bg-brand/10 hover:text-brand hover:scale-105"
              >
                <Icon className="size-4.5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — photo + stat cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Glow ring */}
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/25 to-accent-cyan/15 blur-3xl" />

          {/* Photo */}
          <div className="overflow-hidden rounded-3xl border border-border glass">
            <Image
              src="/profile.png"
              alt="Portrait of Weldesemayat Teklay"
              width={420}
              height={500}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Floating stat chips */}
          {stats.map((s, i) => {
            const positions = [
              'top-4 -left-10',
              'top-1/3 -right-10',
              'bottom-24 -left-10',
              'bottom-6 -right-10',
            ]
            const delays = [0.5, 0.6, 0.7, 0.8]
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: delays[i] }}
                className={`absolute ${positions[i]} hidden sm:flex flex-col items-center rounded-2xl border border-border bg-card/80 backdrop-blur-md px-4 py-2.5 text-center shadow-xl`}
              >
                <span className="text-lg font-bold text-foreground leading-none">{s.value}</span>
                <span className="mt-0.5 text-xs text-muted-foreground whitespace-nowrap">{s.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mx-auto mt-12 hidden w-fit flex-col items-center gap-1.5 text-xs text-muted-foreground md:flex"
      >
        <span className="font-mono tracking-widest">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
