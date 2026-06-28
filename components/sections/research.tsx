import { Bot, Brain, Globe, Mic, Network, HeartHandshake } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'
import { researchInterests } from '@/lib/portfolio-data'

const icons = [Brain, Mic, Globe, Network, HeartHandshake, Bot]

export function Research() {
  return (
    <section id="research" className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Research Interests"
          title="What I Study & Build"
        />

        <Stagger className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((interest, i) => {
            const Icon = icons[i % icons.length]
            return (
              <StaggerItem
                key={interest}
                className="group glass flex items-center gap-4 rounded-xl p-5 transition-all duration-200 hover:border-accent-cyan/40 hover:bg-accent-cyan/5"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/15 transition-colors group-hover:bg-accent-cyan/20">
                  <Icon className="size-4.5" />
                </div>
                <span className="font-medium text-sm">{interest}</span>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
