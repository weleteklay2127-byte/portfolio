import { BrainCircuit, Languages, FlaskConical } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

const highlights = [
  {
    icon: BrainCircuit,
    title: 'Applied AI',
    text: 'RAG systems, knowledge graphs, and ML pipelines built for real-world deployment.',
  },
  {
    icon: Languages,
    title: 'Low-Resource NLP',
    text: "Speech & language AI for Tigrinya, Ge'ez — languages underserved by mainstream research.",
  },
  {
    icon: FlaskConical,
    title: 'Research-First',
    text: 'Published at AI4SD 2026. Methodical, reproducible, impact-driven experimentation.',
  },
]

export function About() {
  return (
    <section id="about" className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-medium tracking-widest uppercase text-accent-cyan">
            About
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            AI for languages that need it most
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            CS & Engineering graduate (GPA 3.91/4.0) from Mekelle University. I build AI systems
            that close the gap between frontier NLP research and the languages spoken by millions
            across East Africa.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-3">
          {highlights.map((item) => (
            <StaggerItem
              key={item.title}
              className="group glass rounded-2xl p-7 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_0_30px_-10px_color-mix(in_oklch,var(--brand)_30%,transparent)]"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 transition-colors group-hover:bg-brand/20">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
