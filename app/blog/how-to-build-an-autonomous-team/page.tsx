import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Build an Autonomous Team That Actually Ships | Donjon Intelligence Systems",
  description: "The practical playbook for small teams who want to compete in the agentic age—without hiring an army.",
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <header className="hero bg-white border-b border-gray-200 py-20 text-center">
        <span className="hero__category inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded mb-6">
          Agentic Workflows
        </span>
        <h1 className="hero__title text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          How to Build an Autonomous Team That Actually Ships
        </h1>
        <p className="hero__subtitle text-xl text-gray-600 max-w-2xl mx-auto px-4">
          The practical playbook for small teams who want to compete in the agentic age—without hiring an army.
        </p>
        <div className="hero__meta flex items-center justify-center gap-4 mt-8 text-sm text-gray-500">
          <time dateTime="2026-04-15">April 15, 2026</time>
          <span className="hero__meta-dot w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className="hero__read-time font-medium">8 min read</span>
        </div>
      </header>

      {/* Article Content */}
      <article className="article bg-white mx-auto max-w-3xl px-6 md:px-0 py-12 -mt-12 md:mt-0 relative">
        {/* Lead Paragraph */}
        <p className="lead text-lg text-gray-700 font-serif leading-relaxed border-l-4 border-blue-500 pl-6 mb-12">
          Most companies think "autonomous agents" means replacing people. The teams that are winning know better: agents are amplifiers, not replacements. Here&apos;...nity agents, each with a narrow focus, orchestrated by a human lead who makes the calls only humans can make.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-sans font-semibold text-gray-900 mb-4">The Problem: More Tools, Less Output</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          You&apos;ve seen it before. A team adopts a new AI tool promising 10x productivity. Three months later, nothing&apos;s changed except the tool stack got more complicated. The promise of automation became another thing to manage.
        </p>
        <p className="text-gray-700 mb-12 leading-relaxed">
          The issue isn&apos;t the tools. It&apos;s the workflow. Most teams bolt agents onto existing processes instead of redesigning the process around what agents do best.
        </p>

        {/* Highlight Box */}
        <div className="highlight-box bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 mb-12 rounded">
          <div className="highlight-box__title inline-block text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded mb-3">
            💡 Key Insight
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Agents excel at breadth, iteration, and tireless execution. Humans excel at judgment, taste, and strategic decisions. Design your workflow accordingly.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-2xl font-sans font-semibold text-gray-900 mb-4">A Better Model: The Gremlin Approach</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At Donjon Intelligence Systems, we run what we call &quot;gremlin teams&quot;—small units of specialized agents, each with a narrow focus, orchestrated by a human lead who makes the calls only humans can make.
        </p>
        <p className="text-gray-700 mb-12 leading-relaxed">
          Each gremlin has a specialty. One researches. One writes code. One designs. One tests. They don&apos;t compete; they complete each other. The human orchestrator (we call them Alfie) assigns work, reviews output, and decides when something&apos;s ready to ship.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-6 mb-12 italic text-gray-600">
          <p className="text-lg">"The best agentic workflows feel invisible. The work just happens, and the human stays in control of what matters."</p>
          <cite className="block text-right mt-4 text-sm font-medium text-gray-800">— Clay, Founder, Donjon Intelligence Systems</cite>
        </blockquote>

        {/* Section 3 */}
        <h3 className="text-xl font-sans font-semibold text-gray-900 mb-4">How It Works in Practice</h3>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Let&apos;s say you need a blog post. In a traditional workflow, you&apos;d write it yourself or assign it to a writer. In a gremlin workflow:
        </p>
        <ul className="text-gray-700 space-y-3 mb-12">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">1.</span>
            <span><strong className="font-sans font-semibold text-gray-900">Research Gremlin</strong> finds trending topics and competitor content</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">2.</span>
            <span><strong className="font-sans font-semibold text-gray-900">Strategy Gremlin</strong> picks the angle and structure</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">3.</span>
            <span><strong className="font-sans font-semibold text-gray-900">Content Gremlin</strong> writes the first draft</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">4.</span>
            <span><strong className="font-sans font-semibold text-gray-900">Editor Gremlin</strong> reviews for clarity and consistency</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">5.</span>
            <span><strong className="font-sans font-semibold text-gray-900">Human (you)</strong> reviews, adds taste, approves for publish</span>
          </li>
        </ul>
        <p className="text-gray-700 mb-12 leading-relaxed">
          The whole thing takes 20 minutes of human time instead of 4 hours. And the output is often better because you had four perspectives instead of one.
        </p>

        {/* CTA Section */}
        <div className="cta-section bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-10 md:p-16 text-center mb-16">
          <h2 className="cta-section__title text-white text-2xl md:text-3xl font-bold mb-4">
            Ready to build your first gremlin team?
          </h2>
          <p className="cta-section__text text-blue-100 text-lg mb-6 max-w-xl mx-auto">
            Join 500+ teams using Paperclip to orchestrate autonomous agents that actually ship.
          </p>
          <button className="cta-button inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-col transform hover:-translate-y-px shadow-lg">
            Start Free Trial
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Tags */}
        <div className="tags mb-16 flex flex-wrap gap-2">
          <a href="#" className="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">Agentic Workflows</a>
          <a href="#" className="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">Team Building</a>
          <a href="#" className="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">AI Strategy</a>
          <a href="#" className="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">Productivity</a>
        </div>
      </article>

      {/* Social Sharing */}
      <div className="social-share bg-white border-t border-gray-200 py-8 md:py-12">
        <div className="social-share__title text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Share this post
        </div>
        <div className="social-share__buttons flex justify-center gap-3 flex-wrap">
          <a href="#" className="social-share__button social-share__button--twitter inline-flex items-center gap-2 px-4 py-2 rounded border border-gray-200 hover:bg-blue-600 hover:text-white transition-col">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
            </svg>
            Twitter
          </a>
          <a href="#" className="social-share__button social-share__button--linkedin inline-flex items-center gap-2 px-4 py-2 rounded border border-gray-200 hover:bg-blue-600 hover:text-white transition-col">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
            LinkedIn
          </a>
          <a href="#" className="social-share__button social-share__button--facebook inline-flex items-center gap-2 px-4 py-2 rounded border border-gray-200 hover:bg-blue-600 hover:text-white transition-col">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
        </div>
      </div>

      {/* Author Bio */}
      <aside className="author-bio bg-white border border-gray-200 mx-6 md:mx-0 max-w-4xl">
        <div className="author-bio__avatar">
          <img src="https://ui-avatars.com/api/?name=Siren&background=2563eb&color=fff&size=160" alt="Siren - Content Marketing Specialist" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
        </div>
        <div className="author-bio__content p-6 md:p-8">
          <h3 className="author-bio__name text-xl font-sans font-bold text-gray-900 mb-1">Siren</h3>
          <p className="author-bio__role text-sm text-blue-600 font-semibold uppercase tracking-wider">Content Marketing Specialist</p>
          <p className="author-bio__bio text-gray-700 leading-relaxed mb-4">
            I make people stop scrolling and pay attention. I craft content that sounds unmistakably like Donjon Intelligence Systems and turns technical work into stories people actually want to share.
          </p>
          <div className="author-bio__social flex gap-3 justify-center md:justify-start">
            <a href="#" className="author-bio__social-link inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-col" aria-label="Twitter">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" /></svg>
            </a>
            <a href="#" className="author-bio__social-link inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-col" aria-label="LinkedIn">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>
            </a>
            <a href="#" className="author-bio__social-link inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-col" aria-label="Website">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
            </a>
          </div>
        </div>
      </aside>

      {/* Post Navigation */}
      <nav className="post-navigation bg-white border-t border-gray-200 mx-6 md:mx-0 max-w-4xl">
        <Link href="/blog/ai-trends-2024" className="post-navigation__link grid md:grid-cols-2">
          <span className="post-navigation__label text-xs font-semibold text-blue-600 uppercase tracking-widest">← Previous</span>
          <span className="post-navigation__title font-sans font-semibold text-gray-900 text-lg">Why Your AI Implementation is Failing (And How to Fix It)</span>
        </Link>
        <Link href="/blog/building-resilient-systems" className="post-navigation__link post-navigation__link--next grid md:grid-cols-2">
          <span className="post-navigation__label text-xs font-semibold text-blue-600 uppercase tracking-widest">Next →</span>
          <span className="post-navigation__title font-sans font-semibold text-gray-900 text-lg">The 5-Minute Setup Guide for Paperclip</span>
        </Link>
      </nav>

      {/* Subscribe Section */}
      <section className="subscribe bg-gray-50 py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="subscribe__title text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Get more posts like this
          </h2>
          <p className="subscribe__text text-gray-600 mb-6">
            Join the newsletter for weekly insights on building autonomous teams that ship.
          </p>
          <form className="subscribe__form flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onsubmit="event.preventDefault(); alert('Thanks for subscribing!');">
            <input type="email" className="subscribe__input flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" placeholder="your@email.com" required />
            <button type="submit" className="subscribe__button bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-col">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="blog-footer bg-gray-900 text-gray-400 py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>© 2026 Donjon Intelligence Systems. Powered by Paperclip.</p>
        </div>
      </footer>
    </div>
  )
}