'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Mic, BarChart3 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'
import { projects } from '@/lib/portfolio-data'

const icons = [Cpu, Mic, BarChart3]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Research"
          title="Projects & Publications"
          description="AI systems built for real-world impact — from temporal knowledge graphs to low-resource speech."
        />

        <Stagger className="mt-16 grid gap-5 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = icons[i % icons.length]
            return (
              <StaggerItem key={project.title}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-brand/50 hover:bg-card/70 hover:shadow-[0_0_40px_-12px_color-mix(in_oklch,var(--brand)_40%,transparent)]">
                  {/* Top accent bar */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex flex-1 flex-col p-7">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 transition-colors group-hover:bg-brand/20">
                        <Icon className="size-5" />
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.badge && (
                          <span className="rounded-full bg-accent-cyan/10 px-2.5 py-0.5 text-xs font-medium text-accent-cyan ring-1 ring-accent-cyan/20">
                            {project.badge}
                          </span>
                        )}
                        {project.year && (
                          <span className="font-mono text-xs text-muted-foreground">
                            {project.year}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-balance">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Key outcomes */}
                    <ul className="mt-5 space-y-2.5">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
