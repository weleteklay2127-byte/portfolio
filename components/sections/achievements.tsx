import { Award, FileText, GraduationCap, Trophy } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'
import { achievements } from '@/lib/portfolio-data'

const icons = [Trophy, Award, GraduationCap, FileText]

export function Achievements() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & Recognition"
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <StaggerItem
                key={item}
                className="glass flex flex-col items-start gap-3 rounded-2xl p-6 transition-colors hover:border-brand/40"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-brand/15 text-brand">
                  <Icon className="size-5" />
                </div>
                <span className="font-medium text-balance">{item}</span>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
