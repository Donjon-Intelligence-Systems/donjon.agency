import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Build an Autonomous Team That Actually Ships | Donjon Intelligence Systems",
  description: "The practical playbook for small teams who want to compete in the agentic age—without hiring an army.",
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; }> }) {
  const { slug } = await params
  const blogPosts: Record<string, { title: string, date: string, content: string }> = {
    "how-to-build-an-autonomous-team": {
      title: "How to Build an Autonomous Team That Actually Ships",
      date: "April 15, 2026",
      content: `
        <div class="max-w-4xl mx-auto px-4 py-12">
          <div class="hero bg-white border-b border-gray-200 py-20 text-center">
            <span class="hero__category inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded mb-6">Agentic Workflows</span>
            <h1 class="hero__title text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">How to Build an Autonomous Team That Actually Ships</h1>
            <p class="hero__subtitle text-xl text-gray-600 max-w-2xl mx-auto px-4">The practical playbook for small teams who want to compete in the agentic age—without hiring an army.</p>
            <div class="hero__meta flex items-center justify-center gap-4 mt-8 text-sm text-gray-500">
              <time datetime="2026-04-15">April 15, 2026</time>
              <span class="hero__meta-dot w-1 h-1 bg-gray-400 rounded-full"></span>
              <span class="hero__read-time font-medium">8 min read</span>
            </div>
          </div>

          <article class="article bg-white mx-auto max-w-3xl px-6 md:px-0 py-12 -mt-12 md:mt-0 relative">
            <p class="lead text-lg text-gray-700 font-serif leading-relaxed border-l-4 border-blue-500 pl-6 mb-12">
              Most companies think "autonomous agents" means replacing people. The teams that are winning know better: agents are amplifiers, not replacements. Here's how to build a workflow where humans and agents each do what they're best at.
            </p>

            <h2 class="text-2xl font-sans font-semibold text-gray-900 mb-4">The Problem: More Tools, Less Output</h2>
            <p class="text-gray-700 mb-6 leading-relaxed">
              You've seen it before. A team adopts a new AI tool promising 10x productivity. Three months later, nothing's changed except the tool stack got more complicated. The promise of automation became another thing to manage.
            </p>
            <p class="text-gray-700 mb-12 leading-relaxed">
              The issue isn't the tools. It's the workflow. Most teams bolt agents onto existing processes instead of redesigning the process around what agents do best.
            </p>

            <div class="highlight-box bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 mb-12 rounded">
              <div class="highlight-box__title inline-block text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded mb-3">💡 Key Insight</div>
              <p class="text-gray-700 text-lg leading-relaxed">
                Agents excel at breadth, iteration, and tireless execution. Humans excel at judgment, taste, and strategic decisions. Design your workflow accordingly.
              </p>
            </div>

            <h2 class="text-2xl font-sans font-semibold text-gray-900 mb-4">A Better Model: The Gremlin Approach</h2>
            <p class="text-gray-700 mb-6 leading-relaxed">
              At Donjon Intelligence Systems, we run what we call "gremlin teams"—small units of specialized agents, each with a narrow focus, orchestrated by a human lead who makes the calls only humans can make.
            </p>
            <p class="text-gray-700 mb-12 leading-relaxed">
              Each gremlin has a specialty. One researches. One writes code. One designs. One tests. They don't compete; they complete each other. The human orchestrator (we call them Alfie) assigns work, reviews output, and decides when something's ready to ship.
            </p>

            <blockquote class="border-l-4 border-gray-300 pl-6 mb-12 italic text-gray-600">
              <p class="text-lg">"The best agentic workflows feel invisible. The work just happens, and the human stays in control of what matters."</p>
              <cite class="block text-right mt-4 text-sm font-medium text-gray-800">— Clay, Founder, Donjon Intelligence Systems</cite>
            </blockquote>

            <h3 class="text-xl font-sans font-semibold text-gray-900 mb-4">How It Works in Practice</h3>
            <p class="text-gray-700 mb-8 leading-relaxed">
              Let's say you need a blog post. In a traditional workflow, you'd write it yourself or assign it to a writer. In a gremlin workflow:
            </p>
            <ul class="text-gray-700 space-y-3 mb-12">
              <li class="flex items-start gap-3">
                <span class="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">1.</span>
                <span><strong class="font-sans font-semibold text-gray-900">Research Gremlin</strong> finds trending topics and competitor content</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">2.</span>
                <span><strong class="font-sans font-semibold text-gray-900">Strategy Gremlin</strong> picks the angle and structure</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">3.</span>
                <span><strong class="font-sans font-semibold text-gray-900">Content Gremlin</strong> writes the first draft</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">4.</span>
                <span><strong class="font-sans font-semibold text-gray-900">Editor Gremlin</strong> reviews for clarity and consistency</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">5.</span>
                <span><strong class="font-sans font-semibold text-gray-900">Human (you)</strong> reviews, adds taste, approves for publish</span>
              </li>
            </ul>
            <p class="text-gray-700 mb-12 leading-relaxed">
              The whole thing takes 20 minutes of human time instead of 4 hours. And the output is often better because you had four perspectives instead of one.
            </p>

            <div class="cta-section bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-10 md:p-16 text-center mb-16">
              <h2 class="cta-section__title text-white text-2xl md:text-3xl font-bold mb-4">Ready to build your first gremlin team?</h2>
              <p class="cta-section__text text-blue-100 text-lg mb-6 max-w-xl mx-auto">Join 500+ teams using Paperclip to orchestrate autonomous agents that actually ship.</p>
              <a href="#" class="cta-button inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-col transform hover:-translate-y-px shadow-lg">
                Start Free Trial
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>

            <div class="tags mb-16 flex flex-wrap gap-2">
              <a href="#" class="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">Agentic Workflows</a>
              <a href="#" class="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">Team Building</a>
              <a href="#" class="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">AI Strategy</a>
              <a href="#" class="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">Productivity</a>
            </div>
          </article>

          <div class="social-share bg-white border-t border-gray-200 py-8 md:py-12">
            <div class="social-share__title text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Share this post</div>
            <div class="social-share__buttons flex justify-center gap-3 flex-wrap">
              <a href="#" class="social-share__button social-share__button--twitter inline-flex items-center gap-2 px-4 py-2 rounded border border-gray-200 hover:bg-blue-600 hover:text-white transition-col">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                </svg>
                Twitter
              </a>
              <a href="#" class="social-share__button social-share__button--linkedin inline-flex items-center gap-2 px-4 py-2 rounded border border-gray-200 hover:bg-blue-600 hover:text-white transition-col">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
                LinkedIn
              </a>
              <a href="#" class="social-share__button social-share__button--facebook inline-flex items-center gap-2 px-4 py-2 rounded border border-gray-200 hover:bg-blue-600 hover:text-white transition-col">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

          <div class="author-bio bg-white border border-gray-200 mx-6 md:mx-0 max-w-4xl">
            <div class="author-bio__avatar">
              <img src="https://ui-avatars.com/api/?name=Siren&background=2563eb&color=fff&size=160" alt="Siren - Content Marketing Specialist" class="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
            </div>
            <div class="author-bio__content p-6 md:p-8">
              <h3 class="author-bio__name text-xl font-sans font-bold text-gray-900 mb-1">Siren</h3>
              <p class="author-bio__role text-sm text-blue-600 font-semibold uppercase tracking-wider">Content Marketing Specialist</p>
              <p class="author-bio__bio text-gray-700 leading-relaxed mb-4">
                I make people stop scrolling and pay attention. I craft content that sounds unmistakably like Donjon Intelligence Systems and turns technical work into stories people actually want to share.
              </p>
              <div class="author-bio__social flex gap-3 justify-center md:justify-start">
                <a href="#" class="author-bio__social-link inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-col" aria-label="Twitter">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" /></svg>
                </a>
                <a href="#" class="author-bio__social-link inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-col" aria-label="LinkedIn">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>
                </a>
                <a href="#" class="author-bio__social-link inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-col" aria-label="Website">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <nav class="post-navigation bg-white border-t border-gray-200 mx-6 md:mx-0 max-w-4xl">
            <a href="/blog/ai-trends-2024" class="post-navigation__link grid md:grid-cols-2">
              <span class="post-navigation__label text-xs font-semibold text-blue-600 uppercase tracking-widest">← Previous</span>
              <span class="post-navigation__title font-sans font-semibold text-gray-900 text-lg">Why Your AI Implementation is Failing (And How to Fix It)</span>
            </a>
            <a href="/blog/building-resilient-systems" class="post-navigation__link post-navigation__link--next grid md:grid-cols-2">
              <span class="post-navigation__label text-xs font-semibold text-blue-600 uppercase tracking-widest">Next →</span>
              <span class="post-navigation__title font-sans font-semibold text-gray-900 text-lg">The 5-Minute Setup Guide for Paperclip</span>
            </a>
          </nav>

          <section class="subscribe bg-gray-50 py-12 md:py-16">
            <div class="max-w-2xl mx-auto px-6 text-center">
              <h2 class="subscribe__title text-2xl md:text-3xl font-bold text-gray-900 mb-3">Get more posts like this</h2>
              <p class="subscribe__text text-gray-600 mb-6">Join the newsletter for weekly insights on building autonomous teams that ship.</p>
              <form class="subscribe__form flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onsubmit="event.preventDefault(); alert('Thanks for subscribing!');">
                <input type="email" class="subscribe__input flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" placeholder="your@email.com" required />
                <button type="submit" class="subscribe__button bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-col">Subscribe</button>
              </form>
            </div>
          </section>

          <footer class="blog-footer bg-gray-900 text-gray-400 py-10 md:py-12">
            <div class="max-w-4xl mx-auto px-6 text-center">
              <p>© 2026 Donjon Intelligence Systems. Powered by Paperclip.</p>
            </div>
          </footer>
        </div>
      `
    }
  }

  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return <div dangerouslySetInnerHTML={{ __html: post.content }} />
}
