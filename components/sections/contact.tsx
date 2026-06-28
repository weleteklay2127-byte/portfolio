'use client'

import { CheckCircle2, Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { socials } from '@/lib/portfolio-data'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <span className="font-mono text-sm font-medium tracking-wide text-accent-cyan">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Let&apos;s Build Something Meaningful Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Have a project, research idea, or opportunity in mind? I&apos;d love
            to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <Reveal className="flex flex-col gap-4">
            {[
              { href: socials.email, icon: Mail, label: 'Email', value: 'weleteklay2127@gmail.com' },
              { href: socials.linkedin, icon: LinkedinIcon, label: 'LinkedIn', value: 'Connect with me' },
              { href: socials.github, icon: GithubIcon, label: 'GitHub', value: 'View my code' },
            ].map(({ href, icon: Icon, label, value }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-brand/40"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-brand/15 text-brand">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="glass flex h-full flex-col items-center justify-center rounded-2xl p-10 text-center">
                <CheckCircle2 className="size-12 text-accent-cyan" />
                <h3 className="mt-4 text-xl font-semibold">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="you@example.com"
                      className="rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="Tell me about your project or idea..."
                      className="resize-none rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30"
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-2 w-full">
                    <Send className="size-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
