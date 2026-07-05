"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const benefitIds = ["1", "2", "3"];

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section style={styles.section}>
      <div style={styles.outerContainer}>
        <motion.div
          style={styles.blueCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={styles.title}>{t("title")}</h2>
          <h3 style={styles.highlight}>{t("highlight")}</h3>
          <p style={styles.description}>{t("description")}</p>

          {/* Benefits */}
          <div style={styles.benefitsRow}>
            {benefitIds.map((id) => (
              <div key={id} style={styles.benefitItem}>
                <Image
                  src="/image/home/check.png"
                  alt="check"
                  width={24}
                  height={24}
                />
                <span style={styles.benefitText}>{t(`benefits.${id}`)}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#F4F6FA",
  },
  outerContainer: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  blueCard: {
    backgroundColor: "#081F5F",
    borderRadius: "24px",
    padding: "64px",
    textAlign: "center",
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "38px",
    fontWeight: 400,
    color: "#FFFFFF",
    marginBottom: "8px",
  },
  highlight: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "38px",
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: "16px",
  },
  description: {
    fontFamily: "Hanken Grotesk, sans-serif",
    fontSize: "20px",
    fontWeight: 400,
    color: "#FFFFFF",
    maxWidth: "980px",
    margin: "0 auto 32px",
    lineHeight: 1.6,
  },
  benefitsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    flexWrap: "wrap",
  },
  benefitItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  benefitText: {
    fontFamily: "Hanken Grotesk, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.8)",
  },
} satisfies Record<string, React.CSSProperties>;
