"use client"

import type { IconType } from "react-icons"
import {
SiOpenai,
SiAnthropic,
SiOllama,
SiDocker,
SiGit,
SiPostgresql,
SiSupabase,
SiVercel,
SiNotion,
SiMiro,
SiN8N,
SiNextdotjs,
SiReact,
SiTypescript,
SiNodedotjs,
SiPython,
SiSlack,
SiDiscord,
SiRedis,
} from "react-icons/si"
import {
FiHexagon,
FiCode,
FiHeart,
} from "react-icons/fi"


const OpenClawIcon = ({ className, color }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 16.54V9.09l7 3.5v7.45l-7-3.5zm9 3.5v-7.45l7-3.5v7.45l-7 3.5z"/>
  </svg>
)

const LettaIcon = ({ className, color }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
)

const OpenWorkIcon = ({ className, color }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 16.54V9.09l7 3.5v7.45l-7-3.5zm9 3.5v-7.45l7-3.5v7.45l-7 3.5z"/>
  </svg>
)

const OpenCodeIcon = ({ className, color }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
    <path d="M8.05 8.15L3.88 12l4.17 3.85 1.38-1.5L6.62 12l2.81-2.35-1.38-1.5zm7.9 0l-1.38 1.5L17.38 12l-2.81 2.35 1.38 1.5L20.12 12l-4.17-3.85zM12 2L1 7v10l11 5 11-5V7L12 2zm0 2.18l8.5 3.87v8.9L12 20.82 3.5 16.95v-8.9L12 4.18z"/>
  </svg>
)

const LmStudioIcon = ({ className, color }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 3.5v7l-7 3.5-7-3.5V8l7-3.5z"/>
    <path d="M12 8v8M8 12h8"/>
  </svg>
)

const WarpIcon = ({ className, color }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)

const CursorIcon = ({ className, color }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
    <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z"/>
  </svg>
)

const CalComIcon = ({ className, color }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
)

const E2BIcon = ({ className, color }: { className?: string; color?: string }) => (
<svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
<path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
</svg>
)

const LlamaIcon = ({ className, color }: { className?: string; color?: string }) => (
<svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"/>
</svg>
)

const NeonIcon = ({ className, color }: { className?: string; color?: string }) => (
<svg viewBox="0 0 24 24" className={className} fill={color || "currentColor"}>
<path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7.5 3.75v7.5L12 19.5 4.5 15.75V8.25L12 4.5z"/>
<circle cx="12" cy="12" r="4" fill={color || "currentColor"} opacity="0.5"/>
</svg>
)


export const brandIcons: Record<string, { icon: IconType | typeof OpenClawIcon; color: string }> = {
  "OpenClaw": { icon: OpenClawIcon, color: "#FF6B35" },
  "Letta": { icon: LettaIcon, color: "#faf9f5" },
  "OpenWork": { icon: OpenWorkIcon, color: "#8B5CF6" },
  "OpenCode": { icon: OpenCodeIcon, color: "#000000" },
  "OpenAI": { icon: SiOpenai, color: "#10A37F" },
  "Anthropic": { icon: SiAnthropic, color: "#d97757" },
  "Ollama": { icon: SiOllama, color: "#8B5CF6" },
  "LM Studio": { icon: LmStudioIcon, color: "#3B82F6" },
  "Llama": { icon: LlamaIcon, color: "#3B82F6" },
  "Cursor": { icon: CursorIcon, color: "#000000" },
  "Warp": { icon: WarpIcon, color: "#7C3AED" },
  "Docker": { icon: SiDocker, color: "#1D63ED" },
  "Git": { icon: SiGit, color: "#F05032" },
  "PostgreSQL": { icon: SiPostgresql, color: "#336791" },
  "Neon": { icon: NeonIcon, color: "#3DFFFF" },
  "Redis": { icon: SiRedis, color: "#D82C20" },
  "Supabase": { icon: SiSupabase, color: "#34B27B" },
  "Vercel": { icon: SiVercel, color: "#0070F3" },
  "Notion": { icon: SiNotion, color: "#000000" },
  "Miro": { icon: SiMiro, color: "#FFD02F" },
  "n8n": { icon: SiN8N, color: "#EA4B71" },
  "E2B": { icon: E2BIcon, color: "#6366F1" },
  "Pi": { icon: FiHexagon, color: "#EC4899" },
  "Koala": { icon: FiHeart, color: "#F43F5E" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Python": { icon: SiPython, color: "#306998" },
  "Slack": { icon: SiSlack, color: "#4A154B" },
  "Discord": { icon: SiDiscord, color: "#5865F2" },
  "Cal.com": { icon: CalComIcon, color: "#141414" },
}

interface BrandIconProps {
  name: string
  className?: string
  size?: number
}

export function BrandIcon({ name, className = "", size = 24 }: BrandIconProps) {
  const brandData = brandIcons[name]
  
  if (!brandData) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <FiCode size={size} className="text-slate-400" />
      </div>
    )
  }
  
  const { icon: Icon, color } = brandData
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Icon size={size} color={color} />
    </div>
  )
}

export default BrandIcon
