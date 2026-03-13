import Link from "next/link"
import { BookOpen, Download, ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BookPage() {
  return (
    <main className="bg-[#030712] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-indigo-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2">
              <Sparkles className="h-4 w-4 text-sky-400" />
              <span className="fira-label tracking-[0.3em] uppercase text-slate-400">
                New Release
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extralight leading-tight text-white">
              Donjon at <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400">Work</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The playbook for building autonomous AI systems that actually ship. 
              How we build agent workers that remember, adapt, and get shit done.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-sky-500 hover:bg-sky-400 text-black font-bold group"
                asChild
              >
                <a href="/donjon-at-work.pdf" download className="flex items-center">
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  Download PDF
                </a>
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                asChild
              >
                <a href="/donjon-at-work.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Online
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                100+ Pages
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                Production-Ready Patterns
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                Free Download
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-panel p-8 border-sky-500/20">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">01</div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">The Philosophy</h3>
                <p className="text-slate-400 text-sm">Why agent systems beat traditional automation. The memory advantage.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">02</div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">The Architecture</h3>
                <p className="text-slate-400 text-sm">How we structure multi-agent systems that don't fall apart.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">03</div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">The Implementation</h3>
                <p className="text-slate-400 text-sm">Real code, real patterns, real deployments.</p>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-slate-900 rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="/donjon-at-work.pdf#toolbar=1&navpanes=0"
                className="w-full h-full"
                title="Donjon at Work - Book Preview"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-slate-500 text-sm">
                Having trouble viewing? <a href="/donjon-at-work.pdf" download className="text-sky-400 hover:text-sky-300">Download the PDF</a> instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 px-6 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-8 text-center">What is Inside</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Building agents with persistent memory",
              "Multi-agent orchestration patterns",
              "Security-first deployment strategies",
              "Real-world case studies from our work",
              "The OpenClaw framework explained",
              "Production monitoring and evaluation",
              "Common failure modes and how to avoid them",
              "The future of autonomous business systems",
            ].map((topic, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-300">
                <span className="text-sky-400">→</span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-50">Ready to build your own donjon?</h2>
          <p className="text-slate-400">
            This book covers the theory and practice. When you are ready to implement, 
            we are here to help you ship.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-sky-500 hover:bg-sky-400 text-black font-bold" asChild>
              <Link href="/consulting">Schedule a Consultation</Link>
            </Button>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5" asChild>
              <Link href="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
