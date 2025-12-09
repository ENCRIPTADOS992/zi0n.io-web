"use client"
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export function FooterYear() {
  const t = useTranslations('footer')
  const [year, setYear] = useState<number | null>(null)
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  if (year === null) return null
  return (
    <p className="text-white/50 text-sm">© {year} Zi0n. {t('rights')}</p>
  )
}
