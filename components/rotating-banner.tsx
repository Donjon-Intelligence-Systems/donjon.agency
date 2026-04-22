"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BookOpen, Newspaper, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BannerSlide {
  id: string
  icon: React.ReactNode
  text: string
  cta: string
  href: string
  bgClass: string
  textClass: string
  ctaClass: string
}

const slides: BannerSlide[] = [
  {
    id: "book",
    icon: <BookOpen className="h-4 w-4" />,
    text: "New Book: Engineering Resilient Intelligence — Pre-order now",
    cta: "Learn More",
    href: "/book",
    bgClass: "bg-sky-500/10 border-sky-500/20",
    textClass: "text-sky-300",
    ctaClass: "text-sky-400 hover:text-sky-300",
  },
  {
    id: "blog",
    icon: <Newspaper className="h-4 w-4" />,
    text: "Fresh from the blog: How to Build an Autonomous Team",
    cta: "Read Now",
    href: "/blog",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
    textClass: "text-emerald-300",
    ctaClass: "text-emerald-400 hover:text-emerald-300",
  },
]

export function RotatingBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
        setIsVisible(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[currentIndex]

  return (
    <div
      className={cn(
        "w-full border-b transition-all duration-300",
        slide.bgClass,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
      )}
    >
      <div className="container flex items-center justify-center gap-3 px-4 py-2">
        <div className={cn("flex items-center gap-2 text-sm font-medium", slide.textClass)}>
          {slide.icon}
          <span>{slide.text}</span>
        </div>
        <Link
          href={slide.href}
          className={cn(
            "inline-flex items-center gap-1 text-sm font-semibold transition-colors",
            slide.ctaClass
          )}
        >
          {slide.cta}
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}
