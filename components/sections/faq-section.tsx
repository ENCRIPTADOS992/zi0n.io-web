"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const questionKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

export function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftQuestions = questionKeys.filter((_, i) => i % 2 === 0);
  const rightQuestions = questionKeys.filter((_, i) => i % 2 !== 0);

  const renderQuestion = (
    key: (typeof questionKeys)[number],
    index: number,
  ) => {
    const isOpen = openIndex === index;
    return (
      <div key={key} style={isOpen ? styles.questionItemOpen : styles.questionItem}>
        <button onClick={() => toggle(index)} style={styles.questionButton}>
          <span style={styles.questionText}>
            {t(`questions.${key}.question`)}
          </span>
          <Image
            src={isOpen ? "/image/home/minus.png" : "/image/home/plus.png"}
            alt={isOpen ? "Cerrar" : "Abrir"}
            width={32}
            height={32}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <div style={styles.answerDivider} />
              <p style={styles.answerText}>{t(`questions.${key}.answer`)}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="faq" style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={styles.title}>{t("title")}</h2>
          <p style={styles.subtitle}>{t("subtitle")}</p>
        </motion.div>

        {/* FAQ Grid - 2 columns */}
        <div style={styles.grid}>
          <div style={styles.column}>
            {leftQuestions.map((key, i) => renderQuestion(key, i * 2))}
          </div>
          <div style={styles.column}>
            {rightQuestions.map((key, i) => renderQuestion(key, i * 2 + 1))}
          </div>
        </div>
      </div>
    </section>
  );
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
    fontFamily: "'Mona-Sans', sans-serif",
    fontSize: "36px",
    fontWeight: 700,
    color: "#081C59",
    marginBottom: "12px",
  },
  subtitle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "#626262",
  },
  grid: {
    display: "flex",
    gap: "48px",
  },
  column: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  questionItem: {
    backgroundColor: "transparent",
    borderRadius: "12px",
    padding: "4px 16px",
    borderBottom: "1px solid #C8D1E0",
  },
  questionItemOpen: {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: "4px 16px",
    border: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  questionButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    background: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
  },
  questionText: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "15px",
    fontWeight: 500,
    color: "#081C59",
    paddingRight: "16px",
  },
  answerDivider: {
    height: "1px",
    backgroundColor: "#C8D1E0",
    margin: "0 0 16px",
  },
  answerText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#626262",
    lineHeight: 1.6,
    paddingBottom: "16px",
  },
} satisfies Record<string, React.CSSProperties>;
