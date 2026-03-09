"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export function ConsultationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What exactly is an AI agent system?",
      answer:
        "AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional automation that follows rigid rules, agents use memory (via Letta) to remember context across conversations, adapt their behavior based on feedback, and handle complex, multi-step workflows. Think of them as digital workers that can research, analyze, communicate, and execute tasks independently.",
    },
    {
      question: "What's the difference between agents and regular automation?",
      answer:
        "Traditional automation (like Zapier) follows linear if-then rules and moves data between apps. AI agents are different: they have memory (they remember past interactions), they can reason through complex problems, they adapt based on context, and they can handle exceptions without breaking. Agents don't just move data—they make decisions, learn from outcomes, and improve over time.",
    },
    {
      question: "How does the OpenClaw framework fit in?",
      answer:
        "OpenClaw is an open-source agent framework that provides the foundation for building autonomous systems. It handles agent orchestration, tool integration, memory management (via Letta), and multi-step reasoning. We use OpenClaw because it's transparent, customizable, and doesn't lock you into proprietary platforms. You own the code, the agents, and the data.",
    },
    {
      question: "What happens during the agent systems consultation?",
      answer:
        "We start by mapping your current workflows and identifying tasks that consume human time but don't require human judgment. Then we design an agent architecture using OpenClaw and Letta memory systems. We discuss integration points (your existing CRM, email, databases), security requirements, and deployment options. You'll leave with a clear roadmap for implementation.",
    },
    {
      question: "How long does it take to build and deploy an agent system?",
      answer:
        "Most initial agent systems are live in 2-4 weeks. Simple automations (single-task agents) can be deployed in days. Complex multi-agent systems with deep integrations take 6-8 weeks. We scope everything upfront so there are no surprises, and you see progress weekly throughout the build.",
    },
    {
      question: "Do I need technical expertise to manage the agents?",
      answer:
        "No. We design for operators, not developers. You get a dashboard to monitor agent activity, training documentation written for humans, and 30-day support. Most clients run their agent systems without ongoing technical help. If you want changes later, you own the system and can either make them yourself or engage us for updates.",
    },
    {
      question: "What about data security and privacy?",
      answer:
        "Security is built in from day one. We prioritize self-hosted deployments where your data never leaves your infrastructure. For cloud deployments, we use private instances (not shared APIs) with encrypted connections. Agents can be configured to work entirely offline for sensitive data. You control where data lives, who has access, and what the agents can do.",
    },
    {
      question: "Can agents integrate with our existing tools?",
      answer:
        "Absolutely. We connect agents to CRMs (Salesforce, HubSpot), communication platforms (Slack, email), databases (PostgreSQL, Supabase), APIs, and even legacy systems. If it has an interface—web, API, or desktop—we can integrate it. Common integrations include Notion, Google Workspace, Stripe, Twilio, and custom internal systems.",
    },
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card
          key={index}
          className={`border-2 ${
            openIndex === index ? "border-[#0076FF]" : "border-gray-200 dark:border-gray-700"
          } transition-all`}
        >
          <CardContent className="p-0">
            <button
              className="flex items-center justify-between w-full p-6 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg font-medium text-[#1A365D] dark:text-blue-300">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-[#0076FF]" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
