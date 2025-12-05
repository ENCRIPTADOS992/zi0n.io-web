import Image from "next/image"

interface LogoProps {
  variant?: "light" | "dark"
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ variant = "light", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { height: 24, width: showText ? 120 : 24 },
    md: { height: 32, width: showText ? 140 : 32 },
    lg: { height: 48, width: showText ? 160 : 48 },
  }

  // Use logo claro (light) for dark backgrounds, logo azul (blue) for light backgrounds
  const logoSrc = variant === "light" 
    ? (showText ? "/logos/logo-claro.svg" : "/logos/icono-logo-claro.svg")
    : (showText ? "/logos/logo-azul.svg" : "/logos/icono-logo-azul.svg")

  return (
    <div className="flex items-center">
      <Image
        src={logoSrc}
        alt="Zi0n logo"
        width={sizes[size].width}
        height={sizes[size].height}
        priority
        style={{ width: sizes[size].width, height: sizes[size].height }}
      />
    </div>
  )
}
