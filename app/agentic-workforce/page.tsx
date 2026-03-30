"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Play, Pause, RotateCcw, Sparkles, Zap, Clock, Users } from "lucide-react"
import { cn } from "@/lib/utils"

// Agent types
interface Agent {
  name: string
  title: string
  group: string
  avatar: string
  type: "core" | "super" | "gremlin"
}

interface TimelineEvent {
  time: string
  title: string
  description: string
  agents: string[]
  activeName: string
}

interface ActivityMessage {
  id: number
  icon: string
  text: string
}

const AGENTS: Agent[] = [
  // Leadership
  { name: "The Director", title: "Chief Orchestrator", group: "Leadership", avatar: "🎯", type: "core" },
  { name: "Operations Lead", title: "Resource & Scheduling", group: "Leadership", avatar: "📋", type: "core" },
  { name: "Team Commander", title: "Task Deployment", group: "Leadership", avatar: "🎖️", type: "core" },
  { name: "Intake Coordinator", title: "Queue & Triage", group: "Leadership", avatar: "📥", type: "core" },
  // Senior Staff
  { name: "Systems Director", title: "Platform Authority", group: "Senior Staff", avatar: "🖥️", type: "super" },
  { name: "Ops Coordinator", title: "Cross-Team Execution", group: "Senior Staff", avatar: "⚙️", type: "super" },
  { name: "Knowledge Manager", title: "Institutional Memory", group: "Senior Staff", avatar: "📚", type: "super" },
  { name: "Lead Architect", title: "System Design", group: "Senior Staff", avatar: "🏗️", type: "super" },
  { name: "Intel Analyst", title: "Competitive Research", group: "Senior Staff", avatar: "🔭", type: "super" },
]

const GREMLINS: Agent[] = [
  { name: "Code Optimizer", title: "Refactoring", group: "Specialist", avatar: "⚗️", type: "gremlin" },
  { name: "Memory Keeper", title: "Context & Archives", group: "Specialist", avatar: "🗃️", type: "gremlin" },
  { name: "Developer", title: "Code Creation", group: "Specialist", avatar: "💻", type: "gremlin" },
  { name: "Compliance Officer", title: "Legal & Policy", group: "Specialist", avatar: "⚖️", type: "gremlin" },
  { name: "Data Architect", title: "Database Design", group: "Specialist", avatar: "📐", type: "gremlin" },
  { name: "Account Executive", title: "Deal Closing", group: "Specialist", avatar: "🤝", type: "gremlin" },
  { name: "Deploy Engineer", title: "Deployment & Infra", group: "Specialist", avatar: "🚀", type: "gremlin" },
  { name: "Account Researcher", title: "Prospect Profiling", group: "Specialist", avatar: "🔍", type: "gremlin" },
  { name: "QA Tester", title: "Adversarial Testing", group: "Specialist", avatar: "🧪", type: "gremlin" },
  { name: "Full-Stack Dev", title: "End-to-End Build", group: "Specialist", avatar: "🏗️", type: "gremlin" },
  { name: "Product Manager", title: "Roadmap & Specs", group: "Specialist", avatar: "📊", type: "gremlin" },
  { name: "Bug Fixer", title: "Issue Resolution", group: "Specialist", avatar: "🔧", type: "gremlin" },
  { name: "Deck Builder", title: "Presentations", group: "Specialist", avatar: "📊", type: "gremlin" },
  { name: "Lead Generator", title: "Prospecting", group: "Specialist", avatar: "⛏️", type: "gremlin" },
  { name: "Pkg. Manager", title: "Dependencies", group: "Specialist", avatar: "📦", type: "gremlin" },
  { name: "Code Explorer", title: "Codebase Navigation", group: "Specialist", avatar: "🔬", type: "gremlin" },
  { name: "Tech Writer", title: "Documentation", group: "Specialist", avatar: "✍️", type: "gremlin" },
  { name: "Content Writer", title: "Marketing Copy", group: "Specialist", avatar: "📢", type: "gremlin" },
  { name: "Market Researcher", title: "Trend Analysis", group: "Specialist", avatar: "📈", type: "gremlin" },
  { name: "Competitor Analyst", title: "Competitive Intel", group: "Specialist", avatar: "🔎", type: "gremlin" },
  { name: "Strategist", title: "Product Strategy", group: "Specialist", avatar: "🗺️", type: "gremlin" },
  { name: "Integration Specialist", title: "API & Tools", group: "Specialist", avatar: "🔌", type: "gremlin" },
  { name: "Security Officer", title: "Security & Payments", group: "Specialist", avatar: "🔒", type: "gremlin" },
  { name: "Night Analysts", title: "Overnight Processing", group: "Specialist", avatar: "🌙", type: "gremlin" },
]

const TIMELINE_DATA: TimelineEvent[] = [
  {
    time: "06:00 AM",
    title: "🌅 Morning Briefing",
    description: "The Night Analysts wrap up overnight processing and hand off insights. The Director reviews the day's priorities and approves the work queue.",
    agents: ["🌙 Night Analysts", "🎯 The Director"],
    activeName: "Night Analysts + The Director",
  },
  {
    time: "08:00 AM",
    title: "📧 Inbox & Lead Processing",
    description: "New leads from overnight web traffic are automatically qualified. The Lead Generator finds prospects, the Account Researcher builds profiles, and the Account Executive prioritizes outreach.",
    agents: ["⛏️ Lead Generator", "🔍 Account Researcher", "🤝 Account Executive"],
    activeName: "Sales Team",
  },
  {
    time: "10:00 AM",
    title: "💻 Development Sprint",
    description: "A new feature request kicks off. The Developer writes the initial implementation, Code Optimizer cleans it up, Code Explorer maps integration points, and Bug Fixer runs tests.",
    agents: ["💻 Developer", "⚗️ Code Optimizer", "🔬 Code Explorer", "🔧 Bug Fixer"],
    activeName: "Engineering Team",
  },
  {
    time: "02:00 PM",
    title: "🚀 Deployment Window",
    description: "The Deploy Engineer ships the morning's code to production. The Security Officer runs automated checks. QA Tester hammers the new endpoints to find edge cases before users do.",
    agents: ["🚀 Deploy Engineer", "🔒 Security Officer", "🧪 QA Tester"],
    activeName: "Release Team",
  },
  {
    time: "04:00 PM",
    title: "📊 Competitive Intelligence",
    description: "The Competitor Analyst flags new competitor moves. Market Researcher digs into emerging trends. The Strategist turns raw findings into a memo the Director will have waiting at morning standup.",
    agents: ["🔎 Competitor Analyst", "📈 Market Researcher", "🗺️ Strategist"],
    activeName: "Strategy Team",
  },
  {
    time: "06:00 PM",
    title: "📝 Content & Comms",
    description: "Tech Writer updates the product docs with today's new features. Content Writer drafts tomorrow's blog post. Deck Builder preps a client presentation for the morning meeting.",
    agents: ["✍️ Tech Writer", "📢 Content Writer", "📊 Deck Builder"],
    activeName: "Content Team",
  },
  {
    time: "10:00 PM",
    title: "🔧 Nightly Maintenance",
    description: "The Lead Architect reviews infrastructure health. Memory Keeper optimizes the knowledge base. Security Officer audits the day's logs. Integration Specialist checks all external API connections.",
    agents: ["🏗️ Lead Architect", "🗃️ Memory Keeper", "🔒 Security Officer", "🔌 Integration Specialist"],
    activeName: "Systems Team",
  },
  {
    time: "02:00 AM",
    title: "🌙 Deep Learning Window",
    description: "The Night Analysts process the day's data, extract patterns, update the knowledge graph, and stage insights for the morning briefing. They'll be the first ones 'in' again at 6 AM.",
    agents: ["🌙 Night Analysts"],
    activeName: "Night Analysts",
  },
]

const ACTIVITY_MESSAGES = [
  { icon: "⛏️", text: "Lead Generator found 4 new prospects in target segment" },
  { icon: "🔍", text: "Account Researcher built profile for Acme Corp" },
  { icon: "💻", text: "Developer committed 3 files to feature/dashboard" },
  { icon: "⚗️", text: "Code Optimizer reduced function complexity by 40%" },
  { icon: "🚀", text: "Deploy Engineer shipped v2.3.1 to production" },
  { icon: "🔒", text: "Security Officer: 0 vulnerabilities detected" },
  { icon: "🧪", text: "QA Tester ran 47 test cases — all passed" },
  { icon: "📈", text: "Market Researcher flagged new industry report" },
  { icon: "🔎", text: "Competitor Analyst: rival launched new pricing page" },
  { icon: "✍️", text: "Tech Writer updated 6 documentation pages" },
  { icon: "📢", text: "Content Writer drafted 'What is an AI workforce?' post" },
  { icon: "🗃️", text: "Memory Keeper archived 12 completed task records" },
  { icon: "🔌", text: "Integration Specialist: all 8 APIs healthy" },
  { icon: "🌙", text: "Night Analysts: pattern detected in conversion data" },
  { icon: "🎯", text: "The Director approved tomorrow's task queue" },
  { icon: "📋", text: "Operations Lead scheduled 3 parallel workstreams" },
]

const COUNCIL_MESSAGES = [
  {
    agent: "Intake Coordinator",
    avatar: "📥",
    text: "Task DON-8 ingested. High priority client request for demo materials. Flagged 2 sub-tasks. Routing to leadership for decision.",
  },
  {
    agent: "Operations Lead",
    avatar: "📋",
    text: "Capacity check: Team Commander's crew has bandwidth. Deploy Engineer is available. No scheduling conflicts. Estimated completion: same day.",
  },
  {
    agent: "Team Commander",
    avatar: "🎖️",
    text: "This is a showpiece deliverable — it needs to look sharp. Recommend Deploy Engineer for technical implementation and Memory Keeper to pull past context. I'll oversee quality.",
  },
  {
    agent: "The Director",
    avatar: "🎯",
    text: "Approved. Team Commander, spin up your team. Target: EOD. Report at 50% and 100%. Let's make this one count.",
  },
]

export default function AgenticWorkforcePage() {
  const [activeStage, setActiveStage] = useState(0)
  const [isWorkdayRunning, setIsWorkdayRunning] = useState(false)
  const [workdayIndex, setWorkdayIndex] = useState(-1)
  const [workdaySpeed, setWorkdaySpeed] = useState(3600)
  const [activeActivities, setActiveActivities] = useState<ActivityMessage[]>([])
  const [councilVisible, setCouncilVisible] = useState([false, false, false, false])
  const [speakingAgent, setSpeakingAgent] = useState<number | null>(null)
  const workdayTimer = useRef<NodeJS.Timeout | null>(null)
  const activityTimer = useRef<NodeJS.Timeout | null>(null)

  // Council animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          playCouncilSequence()
        }
      },
      { threshold: 0.3 }
    )

    const councilElement = document.getElementById("council-section")
    if (councilElement) {
      observer.observe(councilElement)
    }

    return () => observer.disconnect()
  }, [])

  const playCouncilSequence = useCallback(() => {
    COUNCIL_MESSAGES.forEach((_, idx) => {
      setTimeout(() => {
        setCouncilVisible((prev) => {
          const newState = [...prev]
          newState[idx] = true
          return newState
        })
        setSpeakingAgent(idx)
      }, idx * 4500)
    })
  }, [])

  const replayCouncil = useCallback(() => {
    setCouncilVisible([false, false, false, false])
    setSpeakingAgent(null)
    setTimeout(playCouncilSequence, 100)
  }, [playCouncilSequence])

  // Workday simulation
  const toggleWorkday = useCallback(() => {
    if (isWorkdayRunning) {
      setIsWorkdayRunning(false)
      if (workdayTimer.current) clearTimeout(workdayTimer.current)
      if (activityTimer.current) clearInterval(activityTimer.current)
    } else {
      setIsWorkdayRunning(true)
      if (workdayIndex < 0) {
        setWorkdayIndex(0)
      }
    }
  }, [isWorkdayRunning, workdayIndex])

  const advanceWorkday = useCallback(() => {
    if (!isWorkdayRunning) return

    if (workdayIndex >= TIMELINE_DATA.length) {
      setIsWorkdayRunning(false)
      return
    }

    setWorkdayIndex((prev) => prev + 1)

    // Add random activity
    if (Math.random() > 0.3) {
      const randomMsg = ACTIVITY_MESSAGES[Math.floor(Math.random() * ACTIVITY_MESSAGES.length)]
      setActiveActivities((prev) => [
        { id: Date.now(), ...randomMsg },
        ...prev.slice(0, 3),
      ])
    }
  }, [isWorkdayRunning, workdayIndex])

  useEffect(() => {
    if (isWorkdayRunning) {
      workdayTimer.current = setTimeout(advanceWorkday, workdaySpeed)
    }
    return () => {
      if (workdayTimer.current) clearTimeout(workdayTimer.current)
    }
  }, [isWorkdayRunning, workdayIndex, advanceWorkday, workdaySpeed])

  const resetWorkday = useCallback(() => {
    setIsWorkdayRunning(false)
    setWorkdayIndex(-1)
    setActiveActivities([])
    if (workdayTimer.current) clearTimeout(workdayTimer.current)
    if (activityTimer.current) clearInterval(activityTimer.current)
  }, [])

  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-indigo-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 mb-6">
            <Sparkles className="h-4 w-4 text-sky-400" />
            <span className="text-sm font-mono text-sky-400 uppercase tracking-wider">38 AI Employees</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extralight leading-tight text-white mb-6">
            Your AI Workforce,<br />
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400">
              Always On
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            38 specialized AI employees working together as one coordinated team.
            They handle everything from sales research to shipping code — around the clock,
            without a coffee break.
          </p>

          <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">38</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">Specialized Employees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">24/7</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">Always Working</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">0</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">Sick Days</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center mt-12">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-black font-bold" asChild>
              <a href="#hierarchy">
                Meet the Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-500/50 text-sky-400 hover:bg-sky-500/10" asChild>
              <a href="#day-demo">
                <Play className="mr-2 h-4 w-4" />
                See It Work
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Hierarchy Section */}
      <section id="hierarchy" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">Meet the Team</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every role you'd find in a modern office — filled by AI employees who know their job inside and out.
            </p>
          </div>

          {/* Leadership */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="glass-panel px-6 py-3 border-sky-500/30">
                <span className="text-sky-400 font-mono text-sm">LEADERSHIP</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {AGENTS.filter(a => a.type === "core").map((agent) => (
                <div
                  key={agent.name}
                  className="glass-panel p-6 border-white/10 hover:border-sky-500/30 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
                >
                  <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform">
                    {agent.avatar}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-50 mb-1">{agent.name}</div>
                    <div className="text-sm text-slate-400">{agent.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Senior Staff */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="glass-panel px-6 py-3 border-indigo-500/30">
                <span className="text-indigo-400 font-mono text-sm">SENIOR STAFF</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {AGENTS.filter(a => a.type === "super").map((agent) => (
                <div
                  key={agent.name}
                  className="glass-panel p-4 border-white/10 hover:border-indigo-500/30 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-3 text-2xl group-hover:scale-110 transition-transform">
                    {agent.avatar}
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-slate-50 text-sm mb-1">{agent.name}</div>
                    <div className="text-xs text-slate-400">{agent.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialists */}
          <div>
            <div className="flex justify-center mb-8">
              <div className="glass-panel px-6 py-3 border-emerald-500/30">
                <span className="text-emerald-400 font-mono text-sm">SPECIALISTS</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {GREMLINS.map((agent) => (
                <div
                  key={agent.name}
                  className="glass-panel p-4 border-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
                >
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-2 text-xl group-hover:scale-110 transition-transform">
                    {agent.avatar}
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-slate-50 text-xs mb-1">{agent.name}</div>
                    <div className="text-xs text-slate-400">{agent.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">How Tasks Flow</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Watch how a task moves through the system. From initial request to completed deliverable,
              each employee plays their part.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
            {["Task Ingestion", "Leadership Review", "Assignment", "Execution", "Completion"].map((stage, idx) => (
              <button
                key={stage}
                onClick={() => setActiveStage(idx)}
                className={cn(
                  "glass-panel p-6 text-left transition-all duration-300",
                  activeStage === idx
                    ? "border-sky-500/50 bg-sky-500/5"
                    : "border-white/10 hover:border-sky-500/30"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                    activeStage === idx ? "bg-sky-500 text-black" : "bg-slate-800 text-slate-400"
                  )}>
                    {idx + 1}
                  </div>
                  <span className="font-medium text-slate-50">{stage}</span>
                </div>
                <p className="text-sm text-slate-400">
                  {idx === 0 && "Request enters system, gets validated and prioritized"}
                  {idx === 1 && "Leadership reviews strategic fit and resource needs"}
                  {idx === 2 && "Right employees selected and briefed on task"}
                  {idx === 3 && "Work happens autonomously with progress tracking"}
                  {idx === 4 && "Deliverable reviewed, tested, and handed off"}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-8 glass-panel p-8 border-white/10">
            <h3 className="text-lg font-semibold text-slate-50 mb-4">
              Stage {activeStage + 1}: {["Task Ingestion", "Leadership Review", "Assignment", "Execution", "Completion"][activeStage]}
            </h3>
            <p className="text-slate-400 mb-6">
              {activeStage === 0 && "A new request enters the system. This could be anything from a sales inquiry to a bug report to a feature request. The Intake Coordinator receives the task and performs initial triage: validates format, checks for duplicates, assigns priority, and routes to the appropriate team."}
              {activeStage === 1 && "High-priority tasks are escalated to the leadership council for strategic review. The Director assesses strategic fit, Operations Lead evaluates resource availability, and Team Commander determines which specialists to deploy."}
              {activeStage === 2 && "Based on leadership direction, the appropriate employees are assigned and briefed. Each receives clear task description, access to relevant context, dependencies, and deadline. Employees can request clarification or escalate blockers at any time."}
              {activeStage === 3 && "Employees work independently or in teams to complete their assigned tasks. During execution, they research, write code or content, run tests, log progress, and request help if blocked. Progress is tracked automatically."}
              {activeStage === 4 && "When work is complete, employees deliver their output. Deliverables are reviewed against acceptance criteria, automatically tested where applicable, packaged with documentation, and linked to the original request. Stakeholders are notified."}
            </p>
            <div className="flex gap-2 flex-wrap">
              {activeStage === 0 && <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs">📥 Intake Coordinator</span>}
              {activeStage === 1 && (
                <>
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs">🎯 The Director</span>
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs">📋 Operations Lead</span>
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs">🎖️ Team Commander</span>
                </>
              )}
              {activeStage === 2 && (
                <>
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs">🎖️ Team Commander</span>
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs">🚀 Deploy Engineer</span>
                </>
              )}
              {activeStage === 3 && (
                <>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">💻 Developer</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">⚗️ Code Optimizer</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">🧪 QA Tester</span>
                </>
              )}
              {activeStage === 4 && (
                <>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">📄 donjon-playground.html</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">📄 agent-workflow-demo.html</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Council Section */}
      <section id="council-section" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">Leadership in Action</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our leadership team functions like any strong management group. They review, debate, and decide on strategy — and then they get out of the way and let the team execute.
            </p>
          </div>

          <div className="glass-panel border-white/10 p-8 rounded-2xl">
            <div className="text-center mb-8 pb-6 border-b border-white/10">
              <div className="text-2xl font-semibold text-slate-50 mb-2">🏢 Daily Leadership Standup</div>
              <div className="text-sm text-slate-400">Reviewing Task DON-8: Create interactive demos</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { name: "Intake Coordinator", role: "Triage & Queue", avatar: "📥" },
                { name: "Operations Lead", role: "Resources & Schedule", avatar: "📋" },
                { name: "Team Commander", role: "Task Deployment", avatar: "🎖️" },
                { name: "The Director", role: "Final Authority", avatar: "🎯" },
              ].map((council, idx) => (
                <div
                  key={council.name}
                  className={cn(
                    "text-center transition-all duration-300",
                    speakingAgent === idx ? "scale-105" : ""
                  )}
                >
                  <div className={cn(
                    "w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-3xl mx-auto mb-3 transition-all duration-300",
                    speakingAgent === idx ? "border-2 border-sky-500 shadow-lg shadow-sky-500/20" : "border-2 border-transparent"
                  )}>
                    {council.avatar}
                  </div>
                  <div className="font-medium text-slate-50 text-sm">{council.name}</div>
                  <div className="text-xs text-slate-400">{council.role}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6">
              {COUNCIL_MESSAGES.map((msg, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex gap-4 p-4 rounded-lg transition-all duration-500",
                    councilVisible[idx] ? "bg-slate-800/50 opacity-100" : "opacity-0 -translate-y-4 absolute"
                  )}
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xl flex-shrink-0">
                    {msg.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-50 text-sm mb-1">{msg.agent}</div>
                    <div className="text-sm text-slate-400">{msg.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                onClick={replayCouncil}
                className="border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-500/30"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Replay Discussion
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Day Demo Section */}
      <section id="day-demo" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">A Day in the Office</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Hit play and watch your AI workforce move through a real workday — from morning briefings to overnight analysis.
            </p>
          </div>

          <div className="glass-panel border-white/10 p-8 rounded-2xl mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-sky-400">
                  {workdayIndex >= 0 && workdayIndex < TIMELINE_DATA.length ? TIMELINE_DATA[workdayIndex].time : "06:00 AM"}
                </div>
                <div className="text-xs text-slate-500 mt-1">Office Time</div>
              </div>
              
              <Button
                onClick={isWorkdayRunning ? toggleWorkday : toggleWorkday}
                className={cn(
                  "font-bold",
                  isWorkdayRunning 
                    ? "bg-transparent border border-white/10 text-slate-400 hover:border-sky-500/30 hover:text-sky-400" 
                    : "bg-sky-500 hover:bg-sky-400 text-black"
                )}
              >
                {isWorkdayRunning ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" /> Pause
                  </>
                ) : workdayIndex >= TIMELINE_DATA.length ? (
                  <>
                    <RotateCcw className="mr-2 h-4 w-4" /> Replay
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" /> Simulate Workday
                  </>
                )}
              </Button>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="h-4 w-4" />
                <select
                  value={workdaySpeed}
                  onChange={(e) => setWorkdaySpeed(Number(e.target.value))}
                  className="bg-slate-800 border border-white/10 rounded px-2 py-1 text-sm"
                >
                  <option value="8000">Slow (Read Comfortably)</option>
                  <option value="5000">Normal Speed</option>
                  <option value="3000">Fast</option>
                  <option value="1500">Very Fast</option>
                </select>
              </div>

              {isWorkdayRunning && (
                <div className="ml-auto flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-800 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-xs text-slate-500">Currently Working</div>
                    <div className="text-sm font-medium text-slate-50">
                      {workdayIndex >= 0 && workdayIndex < TIMELINE_DATA.length ? TIMELINE_DATA[workdayIndex].activeName : "—"}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {TIMELINE_DATA.map((event, idx) => (
                <div
                  key={event.time}
                  className={cn(
                    "flex gap-6 transition-all duration-500",
                    workdayIndex === idx ? "opacity-100 scale-100" : workdayIndex > idx ? "opacity-50" : "opacity-30"
                  )}
                >
                  <div className="w-24 text-right flex-shrink-0">
                    <div className="text-sm font-mono text-slate-500">{event.time}</div>
                  </div>
                  
                  <div className="flex-1 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800" />
                    <div className={cn(
                      "absolute left-0 top-1 w-2 h-2 rounded-full transition-all",
                      workdayIndex > idx ? "bg-emerald-400" : workdayIndex === idx ? "bg-sky-400 scale-125" : "bg-slate-800"
                    )} />
                    
                    <div className={cn(
                      "ml-6 p-4 rounded-lg border transition-all",
                      workdayIndex === idx 
                        ? "bg-sky-500/5 border-sky-500/30" 
                        : "bg-slate-800/30 border-white/5"
                    )}>
                      <div className="font-medium text-slate-50 mb-2">{event.title}</div>
                      <div className="text-sm text-slate-400 mb-3">{event.description}</div>
                      <div className="flex gap-2 flex-wrap">
                        {event.agents.map((agent) => (
                          <span key={agent} className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400">
                            {agent}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Activity Feed */}
          {isWorkdayRunning && (
            <div className="fixed bottom-6 left-6 w-80 glass-panel border-white/10 p-4 z-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div className="text-xs font-mono text-slate-500 uppercase">Live Activity</div>
              </div>
              <div className="space-y-2 max-h-48 overflow-hidden">
                {activeActivities.slice(0, 4).map((activity) => (
                  <div key={activity.id} className="text-xs text-slate-400 flex gap-2">
                    <span>{activity.icon}</span>
                    <span>{activity.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-white mb-4">Ready to Build Your AI Team?</h2>
          <p className="text-xl text-slate-400 mb-8">
            Join the businesses already using Donjon Intelligence to stay competitive in the age of AI.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-black font-bold" asChild>
              <a href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                Schedule Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-500/50 text-sky-400 hover:bg-sky-500/10" asChild>
              <a href="/contact">Contact Sales</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}