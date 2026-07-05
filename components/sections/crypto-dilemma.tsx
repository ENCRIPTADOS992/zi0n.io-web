"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const cardIcons = {
  hardware: "/image/home/section-2/icon-card-1.png",
  zion: "/image/home/section-2/icon-card-2.png",
  hot: "/image/home/section-2/icon-card-3.png",
};

export function CryptoDilemma() {
  const t = useTranslations("cryptoDilemma");

  return (
    <section id="crypto-dilemma" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.whiteCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={styles.header}>
            <h2 style={styles.title}>{t("title")}</h2>
            <p style={styles.subtitle}>{t("subtitle")}</p>
          </div>

          <div style={styles.cardsRow}>
            <motion.div
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div style={styles.iconWrapper}>
                <Image src={cardIcons.hardware} alt={t("cards.hardware.title")} width={56} height={56} />
              </div>
              <h3 style={styles.cardTitle}>{t("cards.hardware.title")}</h3>
              <p style={styles.cardText}>{t("cards.hardware.description")}</p>
            </motion.div>

            <motion.div
              style={styles.cardHighlighted}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div style={styles.iconWrapper}>
                <Image src={cardIcons.zion} alt={t("cards.zion.title")} width={64} height={64} />
              </div>
              <h3 style={styles.cardTitleLight}>{t("cards.zion.title")}</h3>
              <p style={styles.cardTextLight}>{t("cards.zion.description")}</p>
            </motion.div>

            <motion.div
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div style={styles.iconWrapper}>
                <Image src={cardIcons.hot} alt={t("cards.hot.title")} width={56} height={56} />
              </div>
              <h3 style={styles.cardTitle}>{t("cards.hot.title")}</h3>
              <p style={styles.cardText}>{t("cards.hot.description")}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#F4F6FA",
    padding: "80px",
    paddingTop: "0px",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  whiteCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    padding: "32px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "40px",
    fontWeight: 600,
    color: "#081C59",
    marginBottom: "8px",
  },
  subtitle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    color: "#626262",
    margin: "0 auto",
  },
  cardsRow: {
    display: "flex",
    gap: "16px",
    maxWidth: "1036px",
    margin: "0 auto",
  },
  card: {
    flex: 1,
    backgroundColor: "#E9EDF5",
    borderRadius: "24px",
    padding: "32px 25px",
    textAlign: "center",
  },
  cardHighlighted: {
    flex: 1,
    backgroundColor: "#081F5F",
    borderRadius: "24px",
    padding: "32px 25px",
    textAlign: "center",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
  },
  cardTitle: {
    fontFamily: "'Mona-Sans', sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#56799A",
    marginBottom: "8px",
  },
  cardTitleLight: {
    fontFamily: "'Mona-Sans', sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: "8px",
  },
  cardText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "#56799A",
    lineHeight: "24px",
  },
  cardTextLight: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "#FFFFFF",
    lineHeight: "24px",
  },
} satisfies Record<string, React.CSSProperties>;
