"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const t = useTranslations("hero");
  const isMobile = useIsMobile();
  const isCompact = useIsMobile(1100);

  return (
    <section id="hero" style={{
      ...styles.section,
      ...(isCompact && { height: "auto", padding: "100px 0 0" }),
    }}>
      <div style={{
        ...styles.container,
        ...(isMobile && { padding: "0 16px" }),
      }}>
        <div style={{
          ...styles.grid,
          ...(isCompact && { flexDirection: "column", alignItems: "flex-start", height: "auto" }),
        }}>
          {/* Text Content */}
          <motion.div
            style={{
              ...styles.textColumn,
              ...(isCompact && { flex: "none", width: "100%" }),
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{
              ...styles.heading,
              ...(isMobile && { fontSize: "36px" }),
            }}>
              <span style={styles.headingLine1}>{t("titleLine1")}</span>
              <br />
              <span style={styles.headingLine2}>{t("titleLine2")}</span>
              <br />
              <span style={styles.headingLine3}>{t("titleLine3")}</span>
            </h1>

            <p style={styles.description}>{t("description")}</p>

            <div style={styles.ctaWrapper}>
              <button
                style={{
                  ...styles.ctaButton,
                  ...(isMobile && { width: "100%" }),
                }}
                onClick={() =>
                  document
                    .getElementById("crypto-dilemma")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("cta")}
              </button>
            </div>
          </motion.div>

          {/* Phone Image */}
          <motion.div
            style={{
              ...styles.imageColumn,
              ...(isCompact && { flex: "none", width: "100%", justifyContent: "center", marginTop: "16px" }),
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/image/home/hero/Free iPhone Hand Mockup (Mockuuups Studio).png"
              alt="Zi0n Crypto Phone"
              width={isMobile ? 313 : 543}
              height={isMobile ? 290 : 504}
              priority
              style={{
                ...styles.phoneImage,
                ...(isMobile && { maxHeight: "290px", width: "313px" }),
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#F4F6FA",
    height: "579px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    width: "100%",
    padding: "0 24px",
    height: "100%",
  },
  grid: {
    display: "flex",
    alignItems: "flex-end",
    height: "100%",
  } as React.CSSProperties,
  textColumn: {
    flex: 1,
    alignSelf: "center",
  },
  imageColumn: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  heading: {
    fontSize: "48px",
    fontWeight: 700,
    color: "#071C59",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    fontFamily: "Montserrat, sans-serif",
  },
  headingLine1: {
    fontWeight: 800,
  },
  headingLine2: {
    fontWeight: 600,
  },
  headingLine3: {
    fontWeight: 400,
  },
  description: {
    marginTop: "24px",
    fontSize: "16px",
    color: "#6E6E6E",
    maxWidth: "512px",
    lineHeight: 1.6,
    fontFamily: "Roboto, sans-serif",
  },
  ctaWrapper: {
    marginTop: "32px",
  },
  ctaButton: {
    border: "1px solid #071C59",
    color: "#071C59",
    backgroundColor: "transparent",
    borderRadius: "9999px",
    padding: "12px 32px",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "Montserrat, sans-serif",
  },
  phoneImage: {
    objectFit: "contain",
    maxHeight: "504px",
    width: "auto",
  },
} satisfies Record<string, React.CSSProperties>;
