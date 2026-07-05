"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { DistributionModal } from "./distribution-modal"
import { useIsMobile } from "@/hooks/use-mobile"

export function DistributionSection() {
  const t = useTranslations('distribution')
  const isMobile = useIsMobile()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="distribution" style={{
        ...styles.section,
        ...(isMobile && { padding: "48px 0" }),
      }}>
        <div style={{
          ...styles.container,
          ...(isMobile && { padding: "0 16px" }),
        }}>
          <motion.div
            style={styles.content}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              ...styles.title,
              ...(isMobile && { fontSize: "24px" }),
            }}>{t('title')}</h2>
            <p style={styles.description}>
              {t('descriptionBefore')}
              <span style={styles.descriptionHighlight}>{t('descriptionHighlight')}</span>
              {t('descriptionAfter')}
            </p>
            <button style={{
              ...styles.ctaButton,
              ...(isMobile && { width: "100%", justifyContent: "center" }),
            }} onClick={() => setIsModalOpen(true)}>
              <Image src="/image/home/chevron-right.png" alt="" width={20} height={20} />
              {t('cta')}
            </button>
          </motion.div>
        </div>
      </section>

      <DistributionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

const styles = {
  section: {
    backgroundColor: "#081F5F",
    padding: "80px 0",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  content: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontFamily: "'Mona-Sans', sans-serif",
    fontSize: "36px",
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: "20px",
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: 1.6,
    marginBottom: "32px",
  },
  descriptionHighlight: {
    color: "#5EEC7D",
    fontWeight: 600,
  },
  ctaButton: {
    backgroundColor: "#5EEC7D",
    color: "#081C59",
    border: "none",
    borderRadius: "9999px",
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "Montserrat, sans-serif",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  },
} satisfies Record<string, React.CSSProperties>;
