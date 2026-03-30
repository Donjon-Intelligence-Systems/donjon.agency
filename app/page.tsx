import Link from "next/link"
import { ArrowRight, Sparkles, Calendar, ExternalLink, Beaker, Wrench, Users, Rocket, MessageSquare, Shield, Check, X, Zap, Target, Lock, Bot, Headphones, CalendarDays, Mail, Search, MapPin, Calculator, BarChart3, FileCheck, Timer, HelpCircle, Shell, BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BrandIcon, brandIcons } from "@/components/donjon/brand-icon"

const platforms = [
  {
    name: "Vibe Native",
    tagline: "AI-powered no-code platform for building beautiful, functional applications",
    href: "/platforms/vibe-native",
    externalUrl: "https://vibenative.studio/",
  },
  {
    name: "I'm K8",
    tagline: "Intelligent AI-powered communication and collaboration platform",
    href: "/platforms/im-k8",
    externalUrl: "https://im-k8.lovable.app/",
  },
  {
    name: "ServicePro",
    tagline: "Comprehensive platform for managing service-based businesses with AI automation",
    href: "/platforms/servicepro",
    externalUrl: "https://cleanmachinetulsa.com/dashboard",
  },
  {
    name: "Know-Defeat",
    tagline: "Algorithmic trading system with probability-driven execution",
    href: "/platforms/know-defeat",
    externalUrl: "https://github.com/claybowl/Know-Defeat",
  },
] as const

const comparisonFeatures = [
  { name: "Ownership", generic: "You rent forever", agency: "They own the IP", donjon: "You own everything", highlight: true },
  { name: "Integration Depth", generic: "APIs only", agency: "APIs + light scripting", donjon: "APIs, browsers, desktop apps", highlight: false },
  { name: "Security", generic: "Their cloud", agency: "Mixed", donjon: "Self-hosted or private cloud", highlight: true },
  { name: "Maintenance", generic: "Your problem", agency: "Extra fees", donjon: "Optional retainer", highlight: false },
  { name: "Complexity", generic: "Linear (A→B)", agency: "Linear", donjon: "Dynamic loops, retries, replanning", highlight: true },
  { name: "Result", generic: "Saves you clicks", agency: "Saves you some clicks", donjon: "Saves you headcount", highlight: true },
]

const capabilities = [
  {
    title: "Custom AI Skills + Workflows",
    description: "Beyond generic templates. We build agents that understand your business logic.",
    icon: Bot,
  },
  {
    title: "Hybrid Architectures",
    description: "Best of both worlds: deterministic reliability where it matters, AI autonomy where it helps.",
    icon: Zap,
  },
  {
    title: "Secure Deployment",
    description: "Self-hosted or private cloud. Your data stays yours.",
    icon: Lock,
  },
  {
    title: "Deep Integrations",
    description: "CRMs, phone systems, email, databases, legacy tools—if it has an interface, we connect it.",
    icon: Target,
  },
  {
    title: "Monitoring + Evaluation",
    description: "Systems that track their own performance and alert before problems become outages.",
    icon: BarChart3,
  },
  {
    title: "Full Handoff + Training",
    description: "Live walkthroughs, technical docs written for humans, 30-day support window.",
    icon: Users,
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    duration: "30–45 min",
    description: "A focused conversation about your operations. I ask direct questions, take notes, and leave with enough context to architect something real.",
    deliverables: ["Honest assessment of what's possible", "Rough scope and timeline", "No-pressure recommendation"],
  },
  {
    step: "02",
    title: "Scoped Roadmap",
    duration: "2–3 days",
    description: "I document the proposed solution, define deliverables, timeline, and investment—reviewed and approved before engineering begins.",
    deliverables: ["Written proposal with fixed pricing", "Technical architecture overview", "Risk assessment and mitigation"],
  },
  {
    step: "03",
    title: "Engineering & Launch",
    duration: "2–6 weeks",
    description: "I build the system, connect your tools, run real scenarios, and push it live. Weekly updates throughout.",
    deliverables: ["Working system deployed", "Access credentials and configuration", "Initial training session"],
  },
  {
    step: "04",
    title: "Handoff & Ownership",
    duration: "1 week + 30 days",
    description: "Live training for your team. Documentation delivered. 30-day support window—then it's fully yours.",
    deliverables: ["Technical documentation written for non-engineers", "Video walkthroughs of key workflows", "Direct access during support window"],
  },
]

const digitalRoles = [
  {
    title: "The Autonomous SDR",
    description: "Researches leads on LinkedIn, checks company size, drafts hyper-personalized intros—before a human touches the thread.",
    icon: Mail,
  },
  {
    title: "24/7 Customer Support",
    description: "Resolves common issues, escalates intelligently, logs everything. Your support load drops without hiring.",
    icon: Headphones,
  },
  {
    title: "The Ops Manager Agent",
    description: "Logs into your PM tool, nags about overdue tasks, generates Monday Morning Reports automatically.",
    icon: CalendarDays,
  },
  {
    title: "Lead Nurture Sequences",
    description: "Multi-step outreach that adapts to how prospects respond, keeping them warm until they're ready to buy.",
    icon: MessageSquare,
  },
  {
    title: "The 24/7 Chief of Staff",
    description: "'Where's that file?' Your team asks the agent, it pulls answers from Notion, Drive, Slack instantly.",
    icon: Search,
  },
  {
    title: "Dispatch & Scheduling Agent",
    description: "Handles bookings, reschedules, route optimization—keeps field teams efficient without the back-and-forth.",
    icon: MapPin,
  },
]

const tools = [
  { name: "AI ROI Calculator", description: "Estimate potential time and cost savings from automation.", icon: Calculator },
  { name: "Workflow Automation Score", description: "Score your processes for automation potential. 20 questions, prioritized list.", icon: FileCheck },
  { name: "Support Ticket Deflection", description: "How much of your support volume could AI handle?", icon: Headphones },
  { name: "Data Readiness Checklist", description: "Is your data ready for AI? Scored assessment with improvement roadmap.", icon: FileCheck },
  { name: "Lead Response Speed Calculator", description: "Calculate revenue lost to slow response times.", icon: Timer },
{ name: "AI Readiness Audit", description: "Comprehensive 10-minute assessment with custom report.", icon: BarChart3 },
]

const techStack = [
{ name: "OpenClaw", category: "Agent Framework", featured: true },
{ name: "Letta", category: "Memory & Agents", featured: true },
{ name: "OpenWork", category: "Agent Environment" },
{ name: "OpenCode", category: "Agent IDE" },
{ name: "OpenAI", category: "Models" },
{ name: "Anthropic", category: "Models" },
{ name: "Ollama", category: "Local Models" },
{ name: "LM Studio", category: "Local Runtime" },
{ name: "Llama", category: "Local Models" },
{ name: "Cursor", category: "AI Editor" },
{ name: "Warp", category: "Terminal" },
{ name: "Docker", category: "Containers" },
{ name: "Git", category: "Version Control" },
{ name: "PostgreSQL", category: "Database" },
{ name: "Neon", category: "Postgres" },
{ name: "Redis", category: "Cache" },
{ name: "Supabase", category: "Backend" },
{ name: "Vercel", category: "Hosting" },
{ name: "Notion", category: "Knowledge" },
{ name: "Miro", category: "Whiteboard" },
{ name: "n8n", category: "Automation" },
{ name: "E2B", category: "Sandbox" },
{ name: "Pi", category: "Infra AI" },
{ name: "Koala", category: "Analytics" },
{ name: "Next.js", category: "Frontend" },
{ name: "React", category: "UI" },
{ name: "TypeScript", category: "Language" },
{ name: "Node.js", category: "Runtime" },
{ name: "Python", category: "Language" },
{ name: "Slack", category: "Chat" },
{ name: "Discord", category: "Community" },
{ name: "Cal.com", category: "Scheduling" },
]

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen">
      {/* Book Banner */}
      <div className="bg-gradient-to-r from-sky-500/20 via-sky-500/10 to-indigo-500/20 border-b border-sky-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 text-sky-400" />
              </div>
              <div>
                <p className="text-white font-medium text-sm sm:text-base">
                  <span className="text-sky-400 font-semibold">New:</span> Donjon at Work — The playbook for building autonomous AI systems
                </p>
                <p className="text-slate-400 text-xs sm:text-sm">Free digital book. Download or read online.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button size="sm" className="bg-sky-500 hover:bg-sky-400 text-black font-bold" asChild>
                <Link href="/book">
                  Read Now
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/5" asChild>
                <a href="/donjon-at-work.pdf" download className="flex items-center">
                  <Download className="mr-1 h-3 w-3" />
                  PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-indigo-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="inline-flex items-center gap-2 glass-panel px-4 py-2">
                <Sparkles className="h-4 w-4 text-sky-400" />
                <span className="fira-label tracking-[0.3em] uppercase text-slate-400">
                  AI Solutions for Tulsa Businesses
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extralight leading-tight text-white">
                <span className="text-white">Agent Workers</span>
              </h1>
              <h2 className="text-5xl md:text-7xl font-extralight leading-tight text-white mt-2">
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400">
                  Built to Last
                </span>
              </h2>

              <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                We help small and medium businesses in the Tulsa metro area{" "}
                <span className="text-sky-400/80">save time</span>,{" "}
                <span className="text-indigo-400/80">close more deals</span>, and{" "}
                <span className="text-emerald-400/80">run smoother operations</span> — with AI tools built for how you actually work.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass-panel px-4 py-2 flex items-center gap-2 hover:border-emerald-500/30 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-300 font-mono">3 Years Building Agent Systems</span>
                </div>
                <div className="glass-panel px-4 py-2 flex items-center gap-2 hover:border-sky-500/30 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" style={{ animationDelay: '1s' }} />
                  <span className="text-xs text-slate-300 font-mono">Local Support</span>
                </div>
                <div className="glass-panel px-4 py-2 flex items-center gap-2 hover:border-indigo-500/30 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" style={{ animationDelay: '2s' }} />
                  <span className="text-xs text-slate-300 font-mono">End-to-End AI Systems</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-start pt-6">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-black font-bold group" asChild>
                  <Link href="/services" className="flex items-center">
                    <Rocket className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform flex-shrink-0" />
                    <span>Explore Services</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 group" asChild>
                  <Link href="/consultation" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>Schedule Consultation</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-sky-500/30 text-sky-400 hover:bg-sky-500/10 group" asChild>
                  <Link href="/login" className="flex items-center">
                    <Shield className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>Log In</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <div className="glass-panel p-8 border-sky-500/20 max-w-sm">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 border-4 border-sky-500/30 mb-6">
                    <AvatarImage src="/clayton-christian.jpg" alt="Clayton Christian" />
                    <AvatarFallback className="bg-sky-500/20 text-sky-400 text-2xl font-bold">CC</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-white mb-1">Clayton Christian</h3>
                  <p className="text-sky-400 font-mono text-sm mb-4">AI Systems Architect</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Tulsa-based implementation partner for SMBs. I ship working systems, not theoretical architectures. Security-first. Full ownership. End-to-end delivery.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Button variant="outline" size="sm" className="border-sky-500/30 text-sky-400" asChild>
                      <Link href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book a Call
                      </Link>
                    </Button>
                  </div>
                </div>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute bottom-24 left-0 right-0 text-center px-4">
    <p className="text-2xl md:text-3xl font-light italic text-slate-400 animate-pulse" style={{ animationDuration: '3s' }}>
      <span className="text-sky-400">don·jon</span>
      <span className="text-slate-500 mx-2">/</span>
      <span className="text-slate-300">ˈdənjən</span>
      <span className="text-slate-500 mx-3">·</span>
      <span className="text-slate-400">noun</span>
    </p>
    <p className="text-lg md:text-xl text-slate-500 mt-2 max-w-2xl mx-auto font-light">
      the innermost, most secure tower of a castle
    </p>
    <p className="text-sm md:text-base text-slate-600 mt-1 italic">
      the place you keep what matters most
    </p>
  </div>

  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
      <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
    </div>
  </div>
</section>

      <section className="py-16 px-6 bg-slate-900/20 border-y border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-10">
          <div className="text-center">
            <h2 className="text-2xl font-light text-white mb-2">Built With Production Stack</h2>
            <p className="text-slate-400">{techStack.length}+ Technologies • Agent-First Architecture • Full Ownership</p>
          </div>
        </div>

<div className="relative mb-6">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
<div className="flex gap-6 animate-scroll" style={{ width: 'fit-content' }}>
{[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => {
const brandData = brandIcons[tech.name]
return (
<div
key={`row1-${i}`}
className={`glass-panel px-6 py-4 flex items-center gap-3 hover:border-sky-500/30 transition-colors cursor-pointer group min-w-[180px] ${tech.featured ? 'border-sky-500/50 bg-sky-500/5' : ''}`}
>
<div
className={`h-10 w-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${tech.featured ? 'ring-2 ring-sky-500/30' : ''}`}
style={{ backgroundColor: `${brandData?.color}15` }}
>
<BrandIcon name={tech.name} size={20} />
</div>
<div>
<div
className={`font-medium text-sm ${tech.featured ? 'text-sky-400' : 'text-slate-200'}`}
style={tech.featured ? {} : { color: brandData?.color }}
>
{tech.name}
</div>
<div className="text-slate-500 text-xs">{tech.category}</div>
</div>
</div>
)
})}
</div>
</div>

<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
<div className="flex gap-6 animate-scroll-reverse" style={{ width: 'fit-content' }}>
{[...techStack.slice(15), ...techStack.slice(0, 15), ...techStack.slice(15), ...techStack.slice(0, 15)].map((tech, i) => {
const brandData = brandIcons[tech.name]
return (
<div
key={`row2-${i}`}
className={`glass-panel px-6 py-4 flex items-center gap-3 hover:border-indigo-500/30 transition-colors cursor-pointer group min-w-[180px] ${tech.featured ? 'border-sky-500/50 bg-sky-500/5' : ''}`}
>
<div
className={`h-10 w-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${tech.featured ? 'ring-2 ring-sky-500/30' : ''}`}
style={{ backgroundColor: `${brandData?.color}15` }}
>
<BrandIcon name={tech.name} size={20} />
</div>
<div>
<div
className={`font-medium text-sm ${tech.featured ? 'text-sky-400' : 'text-slate-200'}`}
style={tech.featured ? {} : { color: brandData?.color }}
>
{tech.name}
</div>
<div className="text-slate-500 text-xs">{tech.category}</div>
</div>
</div>
)
})}
</div>
</div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="glass-panel p-6 border-sky-500/20">
            <h3 className="text-sky-400 font-semibold mb-3 flex items-center justify-center gap-2">
              <Shell className="h-5 w-5" />
              OpenClaw Implementation Partners
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We architect, set up, and deploy agent systems using the OpenClaw framework.
              From initial configuration to full production deployment, we handle the technical complexity
              so you get working systems that remember context and execute autonomously.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs">OpenClaw Setup</span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">Agent Architecture</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">Letta Memory</span>
              <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs">Full Deployment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Stop Renting Your Automation.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Build a <span className="text-emerald-400 font-semibold">donjon</span> for your business — systems you <span className="text-emerald-400">own forever</span>, not tools you <span className="text-red-400">rent monthly</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-panel p-6 border-red-500/20 text-center">
              <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-red-400 font-bold text-xl">$</span>
              </div>
              <h3 className="text-red-400 font-semibold text-lg mb-2">The Rental Trap</h3>
              <ul className="text-slate-400 text-sm space-y-2 text-left">
                <li>• Monthly SaaS subscriptions</li>
                <li>• Platform lock-in</li>
                <li>• Data in their cloud</li>
                <li>• Price hikes every year</li>
                <li>• You're the product</li>
              </ul>
            </div>

            <div className="glass-panel p-6 border-amber-500/20 text-center">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-amber-400 font-semibold text-lg mb-2">Typical Agencies</h3>
              <ul className="text-slate-400 text-sm space-y-2 text-left">
                <li>• They own the IP</li>
                <li>• Black-box solutions</li>
                <li>• Ongoing dependency</li>
                <li>• Maintenance fees</li>
                <li>• Can't leave</li>
              </ul>
            </div>

            <div className="glass-panel p-6 border-emerald-500/20 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                Your Donjon
              </div>
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-emerald-400 font-semibold text-lg mb-2">Full Ownership</h3>
              <ul className="text-slate-400 text-sm space-y-2 text-left">
                <li>• You own the code</li>
                <li>• Self-hosted options</li>
                <li>• Your data stays yours</li>
                <li>• No monthly fees</li>
                <li>• Build equity, not debt</li>
              </ul>
            </div>
          </div>

          <div className="glass-panel overflow-hidden">
            <div className="grid grid-cols-4 gap-0 text-sm">
              <div className="p-4 border-b border-white/10 font-medium text-slate-400"></div>
              <div className="p-4 border-b border-white/10 font-medium text-red-400 text-center">SaaS Tools</div>
              <div className="p-4 border-b border-white/10 font-medium text-amber-400 text-center">Agencies</div>
              <div className="p-4 border-b border-white/10 font-medium text-emerald-400 text-center bg-emerald-500/5">Donjon</div>

              {comparisonFeatures.map((feature) => (
                <>
                  <div key={`${feature.name}-label`} className="p-4 border-b border-white/5 font-medium text-slate-300 flex items-center">
                    {feature.name}
                  </div>
                  <div key={`${feature.name}-generic`} className="p-4 border-b border-white/5 text-center text-slate-500">
                    {feature.generic}
                  </div>
                  <div key={`${feature.name}-agency`} className="p-4 border-b border-white/5 text-center text-slate-500">
                    {feature.agency}
                  </div>
                  <div key={`${feature.name}-donjon`} className={`p-4 border-b border-white/5 text-center text-slate-200 font-medium ${feature.highlight ? 'bg-emerald-500/10 text-emerald-300' : ''}`}>
                    {feature.donjon}
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold" asChild>
              <Link href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                Build Your Donjon — Schedule a Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">Let's Be Honest About Fit</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-panel border-emerald-500/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-emerald-400" />
                  </div>
                  <CardTitle className="text-emerald-400">Great Fit If...</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "You're doing $20K–$500K/month and drowning in admin",
                  "You have processes that don't need a human but currently require one",
                  "You want to own your automation, not rent it",
                  "You're Tulsa-based or willing to work with a local partner",
                  "You have messy workflows that 'should be simple' but aren't",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-panel border-red-500/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <CardTitle className="text-red-400">Not a Fit If...</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "You're pre-revenue with no processes to optimize",
                  "You want to watch me code live and approve every change",
                  "You're looking for a magic button that replaces thinking",
                  "You need enterprise-grade compliance yesterday",
                  "You're price-shopping for the cheapest hourly rate",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300">
                    <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-sky-500/30 text-sky-400" asChild>
              <Link href="/assessment">
                If you're a fit, take the AI Audit →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">End-to-End Systems, Built for Your Operations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <Card key={cap.title} className="glass-panel border-white/10 hover:border-sky-500/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <cap.icon className="h-6 w-6 text-sky-400" />
                  </div>
                  <CardTitle className="text-slate-50 text-lg">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-panel border-emerald-500/20 mt-6 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-emerald-400 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Ongoing Maintenance Retainer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Priority response if something breaks</li>
                <li>• Proactive updates when APIs change</li>
                <li>• Monthly health reports</li>
                <li>• Discounted rates on new features</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button className="bg-sky-500 hover:bg-sky-400 text-black font-bold" asChild>
              <Link href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                Apply for a Build
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">Four Platforms. Built for Real Operations.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform) => (
              <Card key={platform.name} className="glass-panel border-white/10 hover:border-sky-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Sparkles className="h-6 w-6 text-sky-400" />
                  </div>
                  <CardTitle className="text-sky-400 mb-2">{platform.name}</CardTitle>
                  <CardContent className="text-slate-400 p-0 mb-4">
                    {platform.tagline}
                  </CardContent>
                </CardHeader>
                <div className="px-6 pb-6 flex gap-2">
                  <Button variant="outline" className="flex-1 border-sky-500/30 text-sky-400 hover:bg-sky-500/10" asChild>
                    <Link href={platform.href}>
                      View Platform
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-sky-400 hover:bg-sky-500/10" asChild>
                    <Link href={platform.externalUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">Four Steps. Clear Expectations.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <Card key={step.title} className="glass-panel border-white/10 hover:border-sky-500/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-sky-500/30">{step.step}</span>
                    <Badge variant="outline" className="border-sky-500/30 text-sky-400 text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-slate-50 text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm">{step.description}</p>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">What you get:</p>
                    {step.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-sky-500 hover:bg-sky-400 text-black font-bold" asChild>
              <Link href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                Start with a Discovery Call →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">Not Templates. Not Triggers. Autonomous Agents.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalRoles.map((role) => (
              <Card key={role.title} className="glass-panel border-white/10 hover:border-violet-500/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <role.icon className="h-6 w-6 text-violet-400" />
                  </div>
                  <CardTitle className="text-slate-50 text-lg">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400 mb-4">
              Something specific on your mind? Bring your messiest process and I'll tell you honestly what AI can and can't do.
            </p>
            <Button variant="outline" className="border-sky-500/30 text-sky-400" asChild>
              <Link href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">Don't Build Blindly. Assess First.</h2>
            <p className="text-slate-400">Free tools to know where you stand before investing in automation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.name} className="glass-panel border-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <tool.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-slate-50 text-lg">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-4">{tool.description}</p>
                  <span className="text-emerald-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Try it → <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-4">Ready to Stop Wrestling with Manual Work?</h2>
          <p className="text-xl text-slate-400 mb-8">
            Let's discuss your operations and find the right solution—whether that's a platform, custom build, or just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-black font-bold" asChild>
              <Link href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-500/50 text-sky-400 hover:bg-sky-500/10" asChild>
              <Link href="/assessment">
                Take the AI Audit (10 min)
              </Link>
            </Button>
          </div>
          <p className="text-slate-500 text-sm mt-6">Response within 24 hours. No pressure, no spam.</p>
        </div>
      </section>

<section className="py-20 px-6 bg-slate-900/20 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<Link href="/agentic-workforce" className="glass-panel p-8 border-white/10 hover:border-sky-500/30 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 px-3 py-1 bg-sky-500/20 text-sky-400 text-xs font-mono uppercase">New</div>
<div className="h-14 w-14 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<Sparkles className="h-7 w-7 text-sky-400" />
</div>
<h3 className="text-xl font-semibold text-slate-50 mb-3">Agentic Workforce</h3>
<p className="text-slate-400 mb-4">
38 AI employees working 24/7. Your complete AI team that never sleeps, from developers to analysts.
</p>
<span className="text-sky-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
Meet Your Team <ArrowRight className="h-4 w-4" />
</span>
</Link>

<Link href="/consulting" className="glass-panel p-8 border-white/10 hover:border-sky-500/30 transition-all duration-300 group">
<div className="h-14 w-14 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<Users className="h-7 w-7 text-sky-400" />
</div>
<h3 className="text-xl font-semibold text-slate-50 mb-3">Consulting</h3>
<p className="text-slate-400 mb-4">
$250 per session — 90 minutes with deliverables, 7-day follow-up support, and priority booking.
</p>
<span className="text-sky-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
Book a Session <ArrowRight className="h-4 w-4" />
</span>
</Link>

<Link href="/services" className="glass-panel p-8 border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
<div className="h-14 w-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<Wrench className="h-7 w-7 text-emerald-400" />
</div>
<h3 className="text-xl font-semibold text-slate-50 mb-3">Services</h3>
<p className="text-slate-400 mb-4">
Platform architecture, database design, workflow automation, and full-stack development.
</p>
<span className="text-emerald-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
View Services <ArrowRight className="h-4 w-4" />
</span>
</Link>

<Link href="/labs" className="glass-panel p-8 border-white/10 hover:border-violet-500/30 transition-all duration-300 group">
<div className="h-14 w-14 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<Beaker className="h-7 w-7 text-violet-400" />
</div>
<h3 className="text-xl font-semibold text-slate-50 mb-3">Labs</h3>
<p className="text-slate-400 mb-4">
Experimental AI agents, creative projects, and innovative tools in development.
</p>
<span className="text-violet-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
Explore Labs <ArrowRight className="h-4 w-4" />
</span>
</Link>
</div>
</div>
</section>
    </main>
  )
}
