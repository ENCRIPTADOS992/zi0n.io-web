import { Shield } from "lucide-react"

interface LogoProps {
  variant?: "light" | "dark"
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ variant = "light", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 40, text: "text-2xl" },
  }

  const colors = {
    light: "text-white",
    dark: "text-[#071C59]",
  }

  return (
    <div className={`flex items-center gap-2 ${colors[variant]}`}>
      <div className="relative">
        <Shield size={sizes[size].icon} strokeWidth={2.5} className="fill-current opacity-20" />
        <Shield size={sizes[size].icon} strokeWidth={2.5} className="absolute inset-0" />
      </div>
      {showText && <span className={`font-bold tracking-tight ${sizes[size].text}`}>z10n</span>}
    </div>
  )
}
