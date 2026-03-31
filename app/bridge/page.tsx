import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, ExternalLink, Zap, Users, Clock, Target, Code, Shield, BarChart3, MessageSquare, Rocket, Brain, FileText, Wrench, Lightbulb, Bot, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Bridge Funding | Donjon Intelligence Systems",
  description: "Help us get the word out about Donjon's AI Workforce. $200-$600 bridge funding with repayment in 90 days. Thank you gift: your own AI agent, website, or consulting.",
}

const teamMembers = [
  { emoji: "🎯", role: "Director", title: "Chief Orchestrator" },
  { emoji: "💻", role: "Developer", title: "Code Creation" },
  { emoji: "📈", role: "Market Researcher", title: "Trend Analysis" },
  { emoji: "🗺️", role: "Strategist", title: "Product Strategy" },
  { emoji: "🧪", role: "QA Tester", title: "Adversarial Testing" },
  { emoji: "📢", role: "Content Writer", title: "Marketing Copy" },
  { emoji: "🔒", role: "Security Officer", title: "Security & Payments" },
  { emoji: "🌙", role: "Night Analysts", title: "Overnight Processing" },
]

const timeline = [
  { time: "6:00 AM", title: "🌅 Morning Briefing", desc: "Night Analysts hand off insights. Director reviews priorities." },
  { time: "8:00 AM", title: "📧 Lead Processing", desc: "Overnight leads auto-qualified. Profiles built. Outreach prioritized." },
  { time: "10:00 AM", title: "💻 Development Sprint", desc: "Feature request → Developer writes → Optimizer cleans → Bug Fixer tests." },
  { time: "2:00 PM", title: "🚀 Deploy Window", desc: "Ship to production. Security checks. QA stress tests." },
  { time: "6:00 PM", title: "📊 Competitive Intel", desc: "Competitor moves flagged. Trends analyzed. Strategy memo drafted." },
  { time: "10:00 PM", title: "🌙 Deep Learning", desc: "Night Analysts process data, extract patterns, update knowledge graph. Repeat at 6 AM." },
]

const deliverables = [
  {
    icon: Bot,
    title: "Your Own AI Agent",
    items: [
      "Stateful, persistent Letta agent",
      "Remembers you forever",
      "Personalized to your life or business",
      "Calendar, research, email — you choose",
    ],
  },
  {
    icon: Globe,
    title: "Custom Website",
    items: [
      "Professional site built by our workforce",
      "Landing page, portfolio, or business site",
      "Modern, fast, mobile-ready",
      "Deployed for you",
    ],
  },
  {
    icon: Lightbulb,
    title: "AI Consulting",
    items: [
      "Personal or business consulting",
      "Workflow automation strategy",
      "AI agent recommendations",
      "As much guidance as you need",
    ],
  },
  {
    icon: Target,
    title: "Something Custom",
    items: [
      "Have something else in mind?",
      "Research, data analysis, tools...",
      "Whatever would help you",
      "Built by our AI workforce",
    ],
  },
]

export default function BridgeFundingPage() {
  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-indigo-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
            <Zap className="h-4 w-4 text-orange-400" />
            <span className="text-sm font-mono text-orange-400 uppercase tracking-wider">Bridge Funding</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Donjon Intelligence Systems
          </h1>

          <p className="text-xl text-orange-400 font-semibold mb-4">
            Your AI Workforce, Always On
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            38 specialized AI employees working together as one coordinated team.
            They handle everything from sales research to shipping code — around the clock.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">38</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">AI Employees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Always Working</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">0</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Sick Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-3">The Problem</div>
          <h2 className="text-3xl font-bold text-white mb-6">Small Business Can't Afford to Fall Behind</h2>

          <p className="text-slate-400 mb-4">
            Local and mid-sized businesses — the backbone of our communities — are at risk of being left in the dust by corporate powerhouses with entire departments dedicated to automation and AI.
          </p>
          <p className="text-slate-400 mb-4">
            The tools exist. The technology is ready. But it's stuck behind a knowledge gap — locked away for companies with six-figure tech budgets and dedicated innovation teams.
          </p>
          <p className="text-slate-200 font-semibold mb-6">
            Donjon puts that power in the hands of the people who actually run the businesses.
          </p>

          <div className="glass-panel border-l-4 border-l-orange-500 p-6 my-8">
            <p className="text-slate-300 italic text-lg">
              "This isn't about replacing people. It's about giving small business owners the same advantages the big guys have — without the enterprise price tag."
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-3">The Solution</div>
          <h2 className="text-3xl font-bold text-white mb-6">An Autonomous AI Workforce</h2>

          <p className="text-slate-400 mb-8">
            38 specialized agents that collaborate like a real team. Dev agents, marketing agents, research agents, creative agents. They write code, analyze markets, build brand strategies, and manage knowledge graphs.
          </p>

          <h3 className="text-xl font-semibold text-slate-50 mb-6">How Tasks Flow</h3>

          <div className="space-y-4">
            {[
              { num: 1, title: "Intake", desc: "Request enters, gets validated & prioritized" },
              { num: 2, title: "Leadership Review", desc: "Strategic fit and resource needs assessed" },
              { num: 3, title: "Assignment", desc: "Right team selected and briefed on task" },
              { num: 4, title: "Execution & Delivery", desc: "Autonomous work with progress tracking → ship" },
            ].map((step) => (
              <div key={step.num} className="glass-panel p-4 border-white/10 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <div className="font-semibold text-slate-50">{step.title}</div>
                  <div className="text-sm text-slate-400">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 px-6 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-3">Meet the Workforce</div>
          <h2 className="text-3xl font-bold text-white mb-4">Every Role You'd Find in an Office</h2>
          <p className="text-slate-400 mb-8">Filled by AI employees who know their job inside and out.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {teamMembers.map((member) => (
              <div key={member.role} className="glass-panel p-4 border-white/10 text-center hover:border-orange-500/30 transition-colors">
                <div className="text-3xl mb-2">{member.emoji}</div>
                <div className="text-sm font-semibold text-indigo-400">{member.role}</div>
                <div className="text-xs text-slate-500">{member.title}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm">+ 30 more specialists</p>
        </div>
      </section>

      {/* A Day in the Life */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-3">24/7 Operations</div>
          <h2 className="text-3xl font-bold text-white mb-8">A Day in the Office</h2>

          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div key={item.time} className="flex gap-6 py-4 border-b border-white/5 last:border-0">
                <div className="w-20 text-right flex-shrink-0">
                  <div className="text-sm font-mono text-orange-400">{item.time}</div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-50 mb-1">{item.title}</div>
                  <div className="text-sm text-slate-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 px-6 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-3">Current Status</div>
          <h2 className="text-3xl font-bold text-white mb-8">The Product Is Real. Now We Need the Word Out.</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-panel border-white/10">
              <CardHeader>
                <CardTitle className="text-emerald-400 text-lg">✅ Built</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["38 AI employees deployed", "Built on Paperclip (open source)", "Powered by Letta's persistent memory", "Easy-to-use control center"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <ArrowRight className="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-panel border-white/10">
              <CardHeader>
                <CardTitle className="text-sky-400 text-lg">🔧 Running</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Works 24/7, no breaks", "Generates its own work when idle", "Learns and remembers forever", "Real production system"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <ArrowRight className="h-3 w-3 text-sky-400 mt-1 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-panel border-white/10">
              <CardHeader>
                <CardTitle className="text-orange-400 text-lg">🚀 Ready</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Product is complete", "Ready for marketing push", "Brand & messaging done", "Just need the word out"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <ArrowRight className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-900/40 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-3">The Ask</div>
          <div className="text-6xl md:text-7xl font-bold text-orange-400 mb-2">$200 — $600</div>
          <p className="text-slate-500 mb-2">Total goal: $6,000</p>
          <p className="text-sm text-slate-500 mb-8">Reaching out to multiple friends and supporters who've backed me before</p>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500/10 border border-orange-500/30 mb-8">
            <Zap className="h-4 w-4 text-orange-400" />
            <span className="text-sm font-mono text-orange-400">Repayment within 90 days • Deadline: June 30, 2026</span>
          </div>

          <div className="glass-panel border-l-4 border-l-orange-500 p-6 text-left">
            <p className="text-slate-300 italic text-lg">
              "I need runway for marketing and sales. Our first sales will support the venture. I wasn't expecting to have a product this good, this fast."
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-3">Thank You</div>
          <h2 className="text-3xl font-bold text-white mb-4">Pick Your Deliverable</h2>
          <p className="text-slate-400 mb-8">
            A thank-you gift that's also a demo of what we build. You can have any of these — or all of them. Whatever you want:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <Card key={item.title} className="glass-panel border-white/10 hover:border-indigo-500/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <CardTitle className="text-indigo-400 text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.items.map((listItem) => (
                      <li key={listItem} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 px-6 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-3">Timing</div>
          <h2 className="text-3xl font-bold text-white mb-6">Why Now?</h2>

          <p className="text-slate-400 mb-6">
            I'm one of the first people with a prototype of this scope. I've been ahead of the curve on tech a time or two before — but this is different. This is a unique position.
          </p>
          <p className="text-slate-400 mb-6">
            The window is open right now. I have a chance to build a marketing campaign before word gets out and everyone else catches up.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { label: "First mover", desc: "very few people have what I've built" },
              { label: "Timing is everything", desc: "AI is moving fast, and the market isn't saturated yet" },
              { label: "Product is done", desc: "building it took every bit of runway I had" },
              { label: "Now I need the word out", desc: "marketing and sales, not more building" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <ArrowRight className="h-4 w-4 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-slate-50">{item.label}</span>
                  <span className="text-slate-400"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel border-l-4 border-l-orange-500 p-6">
            <p className="text-slate-300 italic text-lg">
              "Building this took every bit of runway I had left. Now I need to get the word out before everyone else figures it out."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">(539) 314-9375</div>
          <div className="text-lg text-slate-400 mb-8">clay@donjon.agency</div>

          <p className="text-slate-500 mb-8">
            Text or call — whatever's easiest.<br />
            Happy to demo the agents or answer any questions.
          </p>

          <p className="text-sm text-slate-500 mb-8">
            Building the future of small business automation.
          </p>

          <Button
            size="lg"
            variant="outline"
            className="border-white/10 text-slate-400 hover:text-orange-400 hover:border-orange-500/30 hover:bg-orange-500/5"
            asChild
          >
            <a href="https://www.youtube.com/watch?v=sWacu0cKV3c" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Watch Video Explanation
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          <p>donjon.agency • @donjonintel</p>
          <p className="mt-2">© 2026 Donjon Intelligence Systems</p>
        </div>
      </section>
    </div>
  )
}
