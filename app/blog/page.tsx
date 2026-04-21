import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Donjon Intelligence Systems",
  description: "Insights, stories, and updates from our team",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="space-y-8">
          <article className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-2">
              <Link href="/blog/how-to-build-an-autonomous-team" className="hover:underline">
                How to Build an Autonomous Team That Actually Ships
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Published on April 15, 2026
            </p>
            <p className="text-muted-foreground">
              Most companies think "autonomous agents" means replacing people. The teams that are winning know better: agents are amplifiers, not replacements. Here&apos;...nity agents, each with a narrow focus, orchestrated by a human lead who makes the calls only humans can make.
            </p>
          </article>

          <article className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-2">
              <Link href="/blog/ai-trends-2024" className="hover:underline">
                AI Trends to Watch in 2024
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Published on April 15, 2026
            </p>
            <p className="text-muted-foreground">
              Exploring the latest developments in artificial intelligence and what they mean for the future of technology...
            </p>
          </article>

          <article className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-2">
              <Link href="/blog/building-resilient-systems" className="hover:underline">
                Building Resilient Intelligence Systems
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Published on April 15, 2026
            </p>
            <p className="text-muted-foreground">
              Our approach to creating systems that can withstand challenges and adapt to change...
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
