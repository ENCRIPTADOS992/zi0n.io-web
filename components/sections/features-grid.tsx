"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

const featureKeys = [
  'cableWipe',
  'securityPin',
  'extraPin',
  'simProtection',
  'disableCam',
  'blockCaptures',
  'noSignal',
  'timedDestruction',
  'panicButton',
  'securityNotes',
  'dynamicVpn',
  'esim',
] as const

const featureIcons: Record<string, string> = {
  cableWipe: "/image/home/section-5/icon-card-1.png",
  securityPin: "/image/home/section-5/icon-card-2.png",
  extraPin: "/image/home/section-5/icon-card-3.png",
  simProtection: "/image/home/section-5/icon-card-4.png",
  disableCam: "/image/home/section-5/icon-card-5.png",
  blockCaptures: "/image/home/section-5/icon-card-6.png",
  noSignal: "/image/home/section-5/icon-card-7.png",
  timedDestruction: "/image/home/section-5/icon-card-8.png",
  panicButton: "/image/home/section-5/icon-card-9.png",
  securityNotes: "/image/home/section-5/icon-card-10.png",
  dynamicVpn: "/image/home/section-5/icon-card-11.png",
  esim: "/image/home/section-5/icon-card-12.png",
}

export function FeaturesGrid() {
  const t = useTranslations('features')

  return (
    <section id="features" style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={styles.title}>{t('title')}</h2>
          <p style={styles.subtitle}>{t('subtitle')}</p>
        </motion.div>

        {/* Features Grid */}
        <div style={styles.grid}>
          {featureKeys.map((key, index) => (
            <motion.div
              key={key}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div style={styles.iconWrapper}>
                <Image src={featureIcons[key]} alt={t(`items.${key}.title`)} width={48} height={48} />
              </div>
              <h3 style={styles.cardTitle}>{t(`items.${key}.title`)}</h3>
              <p style={styles.cardText}>{t(`items.${key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: "#F4F6FA",
    padding: "80px 0",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  header: {
    textAlign: "center",
    marginBottom: "48px",
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "40px",
    fontWeight: 700,
    color: "#081C59",
    marginBottom: "12px",
  },
  subtitle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    color: "#626262",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
  },
  card: {
    backgroundColor: "#E6EAF3",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid #E9EDF5",
  },
  iconWrapper: {
    marginBottom: "24px",
  },
  cardTitle: {
    fontFamily: "Hanken Grotesk, sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#081C59",
    marginBottom: "8px",
    lineHeight: 1.3,
  },
  cardText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "#6E6E6E",
    lineHeight: 1.3,
  },
} satisfies Record<string, React.CSSProperties>;
