"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

const cardIcons = {
  apps: "/image/home/section-3/icon-card-1.png",
  wipe: "/image/home/section-3/icon-card-2.png",
  restore: "/image/home/section-3/icon-card-3.png",
};

export function OperaCripto() {
  const t = useTranslations("operaCripto");
  const isMobile = useIsMobile();
  const isCompact = useIsMobile(1100);

  const featureCards = (
    <>
      {(["apps", "wipe", "restore"] as const).map((key, i) => (
        <motion.div
          key={key}
          style={{
            ...styles.card,
            ...(isMobile && { minWidth: "236px", width: "236px", flex: "none" }),
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
        >
          <div style={styles.iconWrapper}>
            <Image
              src={cardIcons[key]}
              alt={t(`features.${key}.title`)}
              width={32}
              height={32}
            />
          </div>
          <h4 style={styles.cardTitle}>{t(`features.${key}.title`)}</h4>
          <p style={styles.cardText}>{t(`features.${key}.description`)}</p>
        </motion.div>
      ))}
    </>
  );

  return (
    <section id="opera-cripto" style={styles.section}>
      <div style={{
        ...styles.container,
        ...(isMobile && { padding: "0 16px" }),
      }}>
        <div style={{
          ...styles.grid,
          ...(isCompact && { flexDirection: "column-reverse", gap: "32px" }),
        }}>
          {/* Left - Phone Image (desktop) */}
          <motion.div
            style={{
              ...styles.imageColumn,
              ...(isCompact && { width: "100%" }),
            }}
            initial={{ opacity: 0, x: isCompact ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/image/home/section-3/Free Transparent iPhone 17e Mockup (Mockuuups Studio).png"
              alt="Zi0n Crypto Security"
              width={317}
              height={500}
              style={styles.phoneImage}
            />
          </motion.div>

          {/* Right - Text Content (desktop) */}
          <motion.div
            style={{
              ...styles.textColumn,
              ...(isCompact && { maxWidth: "100%", paddingBottom: "0" }),
            }}
            initial={{ opacity: 0, x: isCompact ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              ...styles.title,
              ...(isMobile && { fontSize: "24px" }),
            }}>{t("title")}</h2>
            <p style={styles.subtitle}>{t("subtitle")}</p>
            <p style={styles.description}>{t("description")}</p>

            {/* Feature Cards */}
            {isMobile ? (
              <div className="hide-scrollbar" style={styles.cardsScrollOuter}>
                <div className="hide-scrollbar" style={styles.cardsScroll}>
                  {featureCards}
                </div>
              </div>
            ) : (
              <div style={styles.cardsRow}>
                {featureCards}
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#F4F6FA",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  grid: {
    display: "flex",
    alignItems: "flex-end",
    gap: "43px",
  },
  imageColumn: {
    width: "317px",
    display: "flex",
    justifyContent: "center",
  },
  phoneImage: {
    objectFit: "contain",
    maxHeight: "500px",
    width: "auto",
  },
  textColumn: {
    width: "100%",
    alignSelf: "center",
    paddingBottom: "35px",
    maxWidth: "740px",
  },
  title: {
    fontFamily: "'Mona-Sans', sans-serif",
    fontSize: "32px",
    fontWeight: 600,
    color: "#071C59",
    marginBottom: "16px",
  },
  subtitle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 800,
    color: "#071C59",
    marginBottom: "16px",
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "#626262",
    lineHeight: 1.6,
    marginBottom: "32px",
  },
  cardsRow: {
    display: "flex",
    gap: "16px",
  },
  cardsScrollOuter: {
    marginLeft: "-16px",
    marginRight: "-16px",
  },
  cardsScroll: {
    display: "flex",
    gap: "16px",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  card: {
    flex: 1,
    backgroundColor: "#081F5F",
    borderRadius: "16px",
    padding: "24px",
  },
  iconWrapper: {
    marginBottom: "16px",
  },
  cardTitle: {
    fontFamily: "Hanken Grotesk, sans-serif",
    fontSize: "16px",
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: "8px",
  },
  cardText: {
    fontFamily: "Hanken Grotesk, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#FFFFFF",
    lineHeight: "20px",
  },
} satisfies Record<string, React.CSSProperties>;
