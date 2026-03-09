import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Users, PieChart, Lightbulb, FileText, Zap } from "lucide-react"

export function ConsultationProcess() {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-[#0076FF]" />,
      title: "Workflow Discovery",
      description:
        "We map your current business processes to identify tasks that consume human time but don't require human judgment—prime candidates for agent automation.",
      timeframe: "Week 1",
    },
    {
      icon: <Users className="h-8 w-8 text-[#0076FF]" />,
      title: "Agent Architecture Design",
      description:
        "We design your agent system using OpenClaw framework—defining agent roles, memory structures (Letta), tool integrations, and decision-making flows.",
      timeframe: "Week 1-2",
    },
    {
      icon: <PieChart className="h-8 w-8 text-[#0076FF]" />,
      title: "Memory & Context Planning",
      description:
        "We architect persistent memory systems so your agents remember context across conversations, learn from interactions, and build institutional knowledge over time.",
      timeframe: "Week 2-3",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#0076FF]" />,
      title: "Integration Mapping",
      description:
        "We identify all integration points—CRMs, email platforms, databases, APIs—and design secure connections that keep your data in your control.",
      timeframe: "Week 3-4",
    },
    {
      icon: <FileText className="h-8 w-8 text-[#0076FF]" />,
      title: "Agent Build & Testing",
      description:
        "We build the agent system, connect your tools, create memory schemas, and run real scenarios to ensure everything works before going live.",
      timeframe: "Week 4-5",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#0076FF]" />,
      title: "Deployment & Handoff",
      description:
        "We deploy to your infrastructure (self-hosted or cloud), provide training documentation, and transfer full ownership so you control your agent system.",
      timeframe: "Week 5-6",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1A365D] dark:text-blue-300 mb-6">Our Agent Systems Framework</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          A battle-tested approach to building autonomous AI agents with persistent memory. From workflow analysis to full deployment, 
          we architect systems that remember, reason, and deliver real business impact.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={index} className="border-2 border-[#0076FF]/10 hover:border-[#0076FF] transition-all dark:border-blue-800/50 dark:hover:border-blue-700">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-[#0076FF]/10 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1A365D] dark:text-blue-300">{step.title}</h3>
                <span className="text-sm font-medium text-[#0076FF] bg-[#0076FF]/10 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {step.timeframe}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

    <div className="bg-[#0076FF]/5 dark:bg-blue-900/20 p-6 rounded-lg max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-[#1A365D] dark:text-blue-300 mb-4">Why Agent Systems Over Traditional Automation</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0076FF] flex items-center justify-center text-white text-xs mr-2 mt-0.5">
            ✓
          </div>
          <span className="text-gray-700 dark:text-gray-200"><strong>Memory & Context:</strong> Agents remember past interactions and adapt behavior—unlike rigid automation</span>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0076FF] flex items-center justify-center text-white text-xs mr-2 mt-0.5">
            ✓
          </div>
          <span className="text-gray-700 dark:text-gray-200"><strong>Full Ownership:</strong> You own the code, the agents, and your data—no monthly SaaS fees or vendor lock-in</span>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0076FF] flex items-center justify-center text-white text-xs mr-2 mt-0.5">
            ✓
          </div>
          <span className="text-gray-700 dark:text-gray-200"><strong>Decision-Making:</strong> Agents analyze, reason, and take action—moving data is just the beginning</span>
        </li>
        <li className="flex items-start">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0076FF] flex items-center justify-center text-white text-xs mr-2 mt-0.5">
            ✓
          </div>
          <span className="text-gray-700 dark:text-gray-200"><strong>Scalable Architecture:</strong> Built on OpenClaw with Letta memory—designed for complex, multi-step workflows</span>
        </li>
      </ul>
    </div>
    </div>
  )
}
