import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, MessageSquare, Calendar, Sparkles, Zap, Terminal, Rocket, Users, Clock, Check } from "lucide-react"
import { ConsultationProcess } from "@/components/consultation-process"

export const metadata: Metadata = {
  title: "AI Automation Services | Donjon Systems",
  description: "AI chatbots, booking systems, and complete digital automation for Tulsa service businesses. Done in 24 hours.",
}

const packages = [
  {
    icon: MessageSquare,
    title: "24-Hour AI Chatbot",
    price: "$497",
    description: "AI chatbot on your website that answers 10-15 common customer questions, captures leads with name/phone/service needed, and works 24/7 even when you're working.",
    features: [
      "Answers customer questions 24/7",
      "Captures leads with contact info",
      "Mobile-friendly interface",
      "Works while you're on the job",
      "Done in 24 hours",
    ],
    ideal: "Businesses with no website chat, solo operators missing calls",
    color: "sky",
  },
  {
    icon: Calendar,
    title: "Instant Booking System",
    price: "$697",
    description: "Everything in Package 1, PLUS online booking calendar that syncs to Google Calendar, SMS reminders to customers, and 'Book Now' buttons on your site and social.",
    features: [
      "Everything in Package 1",
      "Online booking calendar",
      "Syncs to Google Calendar",
      "SMS reminders to customers",
      "Simple intake form",
      "'Book Now' button everywhere",
    ],
    ideal: "Service businesses taking bookings by phone only",
    color: "emerald",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Complete Digital Overhaul",
    price: "$1,297",
    description: "Everything in Packages 1+2, PLUS Google Business Profile optimization, review request automation, simple 1-page website, email capture, and 30 days of support.",
    features: [
      "Everything in Packages 1 & 2",
      "Google Business Profile optimization",
      "Review request automation",
      "Simple 1-page website",
      "Email capture system",
      "30 days of support",
    ],
    ideal: "Established businesses ready to scale, 2+ years old",
    color: "violet",
  },
]

const consultingServices = [
  {
    title: "AI Readiness Audit",
    price: "$500 - $1,000",
    description: "Comprehensive assessment of your business's AI automation potential",
  },
  {
    title: "Workflow Optimization",
    price: "$300 - $500/hr",
    description: "Streamline operations with custom AI-powered workflows",
  },
  {
    title: "Strategic Planning",
    price: "$400/hr",
    description: "Expert guidance on AI implementation strategy",
  },
  {
    title: "Technology Stack Review",
    price: "$600 - $1,200",
    description: "Full analysis and recommendations for your tech infrastructure",
  },
]

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 ambient-bg opacity-30" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 mb-6">
              <Zap className="h-4 w-4 text-sky-400" />
              <span className="text-sm font-mono text-sky-400">DONE IN 24 HOURS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6">
              Stop Missing Calls.<br />Start Making Money.
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
              AI chatbots and booking automation for Tulsa service businesses.
              <span className="text-sky-400 font-semibold"> Flat fee. No monthly BS. Done tomorrow.</span>
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-400 text-black font-bold transition-all duration-300"
                asChild
              >
                <a href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                  Book Free 10-Min Call
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sky-500/50 text-sky-400 hover:bg-sky-500/10"
                asChild
              >
                <Link href="#packages">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-violet-500/5 to-sky-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }} />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="glass-panel border-sky-500/20 p-8 rounded-2xl text-center hover:border-sky-500/40 transition-all duration-500 group cursor-pointer">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 mb-6 group-hover:bg-sky-500/20 group-hover:border-sky-500/50 transition-all duration-300">
              <Users className="h-5 w-5 text-sky-400" />
              <span className="text-sm font-mono text-sky-400 uppercase tracking-wider">Client Portal</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Access Your Consultation Hub
            </h2>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              View your active consultations, join video sessions, share files, and collaborate with your consultant in real-time.
            </p>

            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-400 text-black font-bold text-lg px-8 py-6 h-auto transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 group-hover:scale-105"
              asChild
            >
              <Link href="/dashboard">
                <span className="flex items-center gap-2">
                  Open Consultation Hub
                  <Rocket className="h-5 w-5" />
                </span>
              </Link>
            </Button>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Video Sessions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Whiteboard Collaboration
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Code Sandbox
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">Choose Your Package</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              One-time setup fee. No monthly subscriptions. You own everything.
            </p>
            <div className="neon-line mx-auto w-24 mt-6" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`glass-panel border-white/10 hover:border-${pkg.color}-500/30 transition-all duration-300 ${pkg.featured ? 'border-emerald-500/30 ring-1 ring-emerald-500/20' : ''}`}
              >
                <CardHeader className="flex flex-col items-start">
                  <div className={`h-12 w-12 rounded-xl bg-${pkg.color}-500/10 flex items-center justify-center mb-4`}>
                    <pkg.icon className={`h-6 w-6 text-${pkg.color}-400`} />
                  </div>
                  <CardTitle className={`text-${pkg.color}-400 mb-2 text-2xl`}>{pkg.title}</CardTitle>
                  <div className="text-4xl font-bold text-slate-50 mb-2">{pkg.price}</div>
                  {pkg.featured && (
                    <div className="text-xs font-mono px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 mb-2">
                      MOST POPULAR
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-4 text-sm">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-slate-500">
                      <span className="text-slate-400 font-medium">Ideal for:</span> {pkg.ideal}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-400 text-black font-bold"
              asChild
            >
              <a href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                Book a Free 10-Minute Call
              </a>
            </Button>
            <p className="text-slate-500 text-sm mt-4">
              Big agencies take weeks and charge thousands. I'm local, I'm fast, and I charge once—not monthly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">Strategic Consulting</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              For businesses needing deeper AI strategy, audits, and ongoing optimization.
            </p>
            <div className="neon-line mx-auto w-24 mt-6" />
          </div>

          <div className="glass-panel border-white/10 p-8 rounded-2xl mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-emerald-400 font-mono mb-1">FIRST-TIME CLIENTS</div>
                    <div className="text-4xl font-bold text-slate-50">$85/hr</div>
                    <p className="text-slate-400 text-sm mt-1">Introductory rate for new clients</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-sky-400 font-mono mb-2">ONGOING CONSULTING</div>
                {consultingServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-start py-3 border-b border-white/5 last:border-0">
                    <div>
                      <div className="font-medium text-slate-200">{service.title}</div>
                      <div className="text-sm text-slate-400">{service.description}</div>
                    </div>
                    <div className="text-sky-400 font-bold whitespace-nowrap ml-4">{service.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24 Hours</div>
              <div className="text-slate-400">Average delivery time</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">$497+</div>
              <div className="text-slate-400">One-time fee, no monthly costs</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Local</div>
              <div className="text-slate-400">Tulsa-based, in-person available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">Our Agent Systems Framework</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A structured approach to building AI agents with persistent memory, autonomous capabilities, and real business impact.
            </p>
          </div>
          <ConsultationProcess />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-4">Ready to Stop Missing Calls?</h2>
          <p className="text-xl text-slate-400 mb-8">
            Your first $497 is one conversation away. Book a free 10-minute call.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-400 text-black font-bold"
              asChild
            >
              <a href="https://cal.com/clayton-c" target="_blank" rel="noopener noreferrer">
                Book Free Call
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sky-500/50 text-sky-400 hover:bg-sky-500/10"
              asChild
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            (539) 314-9375 · claydonjon@proton.me
          </p>
        </div>
      </section>
    </div>
  )
}
