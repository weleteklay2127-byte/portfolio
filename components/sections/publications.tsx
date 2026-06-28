import { BookOpen, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/motion'

export function Publications() {
  return (
    <section id="publications" className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-5">
        <Reveal>
          <span className="font-mono text-sm font-medium tracking-widest uppercase text-accent-cyan">
            Publications
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Research Output</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 glass rounded-2xl p-7 transition-all duration-300 hover:border-brand/40">
            <div className="flex items-start gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                <BookOpen className="size-5" />
              </div>
              <div className="flex-1">
                <p className="font-mono text-xs text-accent-cyan tracking-wider">Conference Paper · 2026</p>
                <h3 className="mt-1.5 font-semibold leading-snug">
                  Systematic Evaluation of Automatic Speech Recognition Systems for Tigrinya
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Presented at the International Conference on Artificial Intelligence for Sustainable
                  Development (AI4SD 2026), Mekelle University, Ethiopia. April 27–28, 2026.
                </p>
                <p className="mt-3 text-xs text-muted-foreground/70">
                  Camera-ready manuscript under preparation for journal publication.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
