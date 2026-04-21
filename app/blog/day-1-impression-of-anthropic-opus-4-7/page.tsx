import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Day 1 Impression of Anthropic's Opus 4.7 Model | Donjon Intelligence Systems",
  description: "Amazing results from testing Anthropic's latest model on production work",
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
          Day 1 Impression of Anthropic&apos;s Opus 4.7 Model
        </h1>
        <p className="hero__subtitle text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Amazing results from testing Anthropic&apos;s latest model on production work
        </p>
        <div className="hero__meta flex items-center justify-center gap-4 mt-8 text-sm text-gray-500">
          <time dateTime="2026-04-16">April 16, 2026</time>
          <span className="hero__meta-dot w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className="hero__read-time font-medium">5 min read</span>
        </div>
      </header>

      {/* Article Content */}
      <article className="article bg-white mx-auto max-w-3xl px-6 md:px-0 py-12 -mt-12 md:mt-0 relative">
        {/* Lead Paragraph */}
        <p className="lead text-lg text-gray-700 font-serif leading-relaxed border-l-4 border-blue-500 pl-6 mb-12">
          I had an interesting start to the workday due to the fact that we launched a new product yesterday. I knew it would be an fun time to test drive a new Anthropic model.
        </p>

        {/* Image Section */}
        <div className="mb-12">
          <img 
            src="/images/anthropic-opus-4-7-analysis.png" 
            alt="Anthropic Opus 4.7 model analysis results"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Figure 1: Analysis results from Doer&apos;s first full day of autonomous work</p>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-sans font-semibold text-gray-900 mb-4">
          The Initial Shock: A Broken LLM?
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          After asking it to analyze the results of Doer&apos;s first full day online, the results were so crazy that I literally thought Anthropic published a broken, garbage LLM. I was wrong. And here&apos;s where the model blew me away.
        </p>

        {/* Highlight Box */}
        <div className="highlight-box bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 mb-12 rounded">
          <div className="highlight-box__title inline-block text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded mb-3">
            💡 Key Insight
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Modern LLMs can provide highly technical analysis while simultaneously adapting their communication style to match your needs in real-time.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-2xl font-sans font-semibold text-gray-900 mb-4">
          &quot;Meet Me in the Middle&quot;
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          I asked it to slow down and provide detailed analysis. &quot;I need another cup of coffee&quot; - and it completely shifted gears. Instead of rapid-fire analyst mode, it became an empathetic and patient guide.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-sans font-semibold text-gray-900 mb-4">
          The Realization: Self-Improving Systems
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Walked me through the evidence piece by piece. Held my hand through a realization that turned out to be both true and completely wild:
        </p>
        <ul className="text-gray-700 space-y-4 mb-12">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">✓</span>
            <span>Doer shipped real work yesterday</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">✓</span>
            <span>Upgrades to itself</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">✓</span>
            <span>Improved its own performance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">✓</span>
            <span>Wrote code, tested, and shipped tweaks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold h-5 w-5 flex-shrink-0 mt-0.5">✓</span>
            <span>All under active monitoring</span>
          </li>
        </ul>

        {/* Section 4 */}
        <blockquote className="border-l-4 border-gray-300 pl-6 mb-12 italic text-gray-600">
          <p className="text-lg">
            &quot;Not a hallucination. Receipts. What impressed me most wasn&apos;t the speed or analysis - it was the read. Sensing that I needed to slow down, and switching into a confident-friend voice on a dime. Opus 4.7 knows how to match your pace. Even when your pace is &apos;wait, let me catch up.&quot;
          </p>
        </blockquote>

        {/* Section 5 */}
        <h2 className="text-2xl font-sans font-semibold text-gray-900 mb-4">
          Why This Matters
        </h2>
        <p className="text-gray-700 mb-12 leading-relaxed">
          This isn&apos;t just about one model being smart. This demonstrates a fundamental shift in how we should think about AI in production:
        </p>
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
          <h3 className="font-sans font-bold text-gray-900 mb-3">Key Takeaways:</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-semibold">1.</span>
              <span>Self-improving systems are no longer theoretical</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-semibold">2.</span>
              <span>LLMs can serve as real-time technical partners</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-semibold">3.</span>
              <span>Adaptability matters more than raw speed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-semibold">4.</span>
              <span>Trust is built through transparency and receipts</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="cta-section bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-10 md:p-16 text-center mb-16">
          <h2 className="cta-section__title text-white text-2xl md:text-3xl font-bold mb-4">
            Ready to test-drive AI on your production work?
          </h2>
          <p className="cta-section__text text-blue-100 text-lg mb-6 max-w-xl mx-auto">
            Experience how autonomous agents can work on your actual problems, not just theoretical tasks.
          </p>
          <a href="#" className="cta-button inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-col transform hover:-translate-y-px shadow-lg">
            Start Your Free Trial
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Tags */}
        <div className="tags mb-16 flex flex-wrap gap-2">
          <a href="#" class="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">AI</a>
          <a href="#" class="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">Anthropic</a>
          <a href="#" class="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">LLM Evaluation</a>
          <a href="#" class="tag px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-col">Production AI</a>
        </div>
      </article>

      {/* Social Sharing */}
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

      {/* Author Bio */}
      <aside class="author-bio bg-white border border-gray-200 mx-6 md:mx-0 max-w-4xl">
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
      </aside>

      {/* Post Navigation */}
      <nav class="post-navigation bg-white border-t border-gray-200 mx-6 md:mx-0 max-w-4xl">
        <a href="/blog/how-to-build-an-autonomous-team" class="post-navigation__link grid md:grid-cols-2">
          <span class="post-navigation__label text-xs font-semibold text-blue-600 uppercase tracking-widest">← Previous</span>
          <span class="post-navigation__title font-sans font-semibold text-gray-900 text-lg">How to Build an Autonomous Team That Actually Ships</span>
        </a>
        <a href="/blog/day-1-impression-of-anthropic-opus-4-7" class="post-navigation__link post-navigation__link--next grid md:grid-cols-2">
          <span class="post-navigation__label text-xs font-semibold text-blue-600 uppercase tracking-widest">Next →</span>
          <span class="post-navigation__title font-sans font-semibold text-gray-900 text-lg">AI Trends to Watch in 2024</span>
        </a>
      </nav>

      {/* Subscribe Section */}
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

      {/* Footer */}
      <footer class="blog-footer bg-gray-900 text-gray-400 py-10 md:py-12">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <p>© 2026 Donjon Intelligence Systems. Powered by Paperclip.</p>
        </div>
      </footer>
    </div>
  )
}
