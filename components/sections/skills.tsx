import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'
import { skillGroups } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section id="skills" className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Technical Skills" title="Stack & Tools" />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <StaggerItem key={group.category} className="glass rounded-2xl p-6">
              <h3 className="font-mono text-xs font-semibold tracking-widest uppercase text-accent-cyan">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-brand/50 hover:text-brand cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
