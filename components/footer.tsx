import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { socials } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-mono text-base font-semibold">
            <span className="text-brand">W</span>eldesemayat Teklay
            <span className="text-accent-cyan">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            AI Engineer | Software Developer | NLP Researcher
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Building intelligent systems for social impact.
          </p>
        </div>

        <div className="flex items-center gap-3">
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
              className="grid size-10 place-items-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-muted-foreground md:text-left">
        &copy; {new Date().getFullYear()} Weldesemayat Teklay. All rights
        reserved.
      </p>
    </footer>
  )
}
