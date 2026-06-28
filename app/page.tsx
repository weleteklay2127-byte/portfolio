import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Research } from '@/components/sections/research'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skills'
import { Publications } from '@/components/sections/publications'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 bg-grid opacity-[0.015]"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Experience />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
