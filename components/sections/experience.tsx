'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/portfolio-data'

const typeColors: Record<string, string> = {
  Internship: 'text-brand bg-brand/10 ring-brand/20',
  Volunteer: 'text-accent-cyan bg-accent-cyan/10 ring-accent-cyan/20',
  Leadership: 'text-purple-400 bg-purple-400/10 ring-purple-400/20',
}

function TimelineItem({ item, index }: { item: typeof experience[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="relative flex gap-8 pb-12 last:pb-0">
      {/* Line + dot */}
      <div className="relative flex flex-col items-center">
        {/* Animated dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 }}
          className="relative z-10 mt-1 grid size-4 place-items-center rounded-full border-2 border-brand bg-background shadow-[0_0_12px_color-mix(in_oklch,var(--brand)_50%,transparent)]"
        >
          <span className="size-1.5 rounded-full bg-brand" />
        </motion.div>
        {/* Animated line */}
        <div className="mt-2 w-px flex-1 overflow-hidden bg-border">
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
            className="h-full w-full bg-gradient-to-b from-brand/60 to-border"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.12 + 0.1 }}
        className="flex-1 pb-2"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-medium tracking-wider text-accent-cyan">
            {item.period}
          </span>
          {item.type && (
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${typeColors[item.type] ?? 'text-muted-foreground bg-secondary/40 ring-border'}`}
            >
              {item.type}
            </span>
          )}
        </div>

        <h3 className="mt-1.5 text-lg font-semibold leading-snug">
          {item.role}
        </h3>
        <p className="text-sm text-muted-foreground">
          {item.organization}
          {item.location && (
            <span className="ml-1.5 text-muted-foreground/60">· {item.location}</span>
          )}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </motion.div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Experience" title="Journey & Impact" />
        <div className="mt-16">
          {experience.map((item, i) => (
            <TimelineItem key={item.role + item.organization} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
