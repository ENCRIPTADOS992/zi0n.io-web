"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

const stepKeys = ['install', 'isolate', 'protect', 'control'] as const

export function HowItWorks() {
  const t = useTranslations('howItWorks')

  return (
    <section id="how-it-works" style={styles.section}>
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

        {/* Content Grid */}
        <div style={styles.grid}>
          {/* Left Steps (1 & 2) */}
          <motion.div
            style={styles.stepsColumn}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {(['install', 'isolate'] as const).map((key) => (
              <div key={key} style={styles.step}>
                <div style={styles.stepHeader}>
                  <span style={styles.stepNumber}>{t(`steps.${key}.number`)}.</span>
                  <h3 style={styles.stepTitle}>{t(`steps.${key}.title`)}</h3>
                </div>
                <p style={styles.stepDescription}>{t(`steps.${key}.description`)}</p>
              </div>
            ))}
          </motion.div>

          {/* Center Phone Image */}
          <motion.div
            style={styles.imageColumn}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/image/home/section-4/Capa 1.png"
              alt="Zi0n Crypto"
              width={221}
              height={150}
              style={styles.phoneImage}
            />
          </motion.div>

          {/* Right Steps (3 & 4) */}
          <motion.div
            style={styles.stepsColumn}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {(['protect', 'control'] as const).map((key) => (
              <div key={key} style={styles.step}>
                <div style={styles.stepHeader}>
                  <span style={styles.stepNumber}>{t(`steps.${key}.number`)}.</span>
                  <h3 style={styles.stepTitle}>{t(`steps.${key}.title`)}</h3>
                </div>
                <p style={styles.stepDescription}>{t(`steps.${key}.description`)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: "#071C59",
    padding: "80px 0",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  header: {
    textAlign: "center",
    marginBottom: "64px",
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "40px",
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: "8px",
  },
  subtitle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    color: "#FFFFFF",
    maxWidth: "400px",
    margin: "0 auto",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    gap: "93px",
  },
  stepsColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  imageColumn: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  phoneImage: {
    objectFit: "contain",
    maxHeight: "460px",
    width: "auto",
  },
  step: {
    // empty — just a container
  },
  stepHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
  },
  stepNumber: {
    fontFamily: "Hanken Grotesk, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#5EEC7D",
  },
  stepTitle: {
    fontFamily: "Hanken Grotesk, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#5EEC7D",
  },
  stepDescription: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "#FFFFFF",
    lineHeight: 1.6,
  },
} satisfies Record<string, React.CSSProperties>;
