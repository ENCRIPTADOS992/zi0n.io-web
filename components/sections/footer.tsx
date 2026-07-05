"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useIsMobile } from "@/hooks/use-mobile";

const legalLinkIds = ["legalNotice", "terms", "cookies"];
const legalLinkHrefs: Record<string, string> = {
  legalNotice: "/legal",
  terms: "/terms",
  cookies: "/cookies",
};

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isMobile = useIsMobile();

  return (
    <footer style={styles.footer}>
      <div style={{
        ...styles.container,
        ...(isMobile && { padding: "0 16px" }),
      }}>
        <div style={{
          ...styles.content,
          ...(isMobile && { flexDirection: "column", gap: "32px" }),
        }}>
          {/* Logo & Description */}
          <div style={styles.brandColumn}>
            <Image src="/image/home/light-logo.png" alt="Zi0n" width={120} height={40} />
            <p style={styles.description}>{t("description")}</p>
          </div>

          {/* Legal Links */}
          <div style={{
            ...styles.linksColumn,
            ...(isMobile && { flexDirection: "column", alignItems: "flex-start", gap: "16px" }),
          }}>
            {legalLinkIds.map((id) => (
              <Link
                key={id}
                href={`/${locale}${legalLinkHrefs[id]}`}
                style={styles.legalLink}
              >
                {t(`legalLinks.${id}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#081F5F",
    padding: "48px 0 24px",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "48px",
    paddingBottom: "32px",
  },
  brandColumn: {
    maxWidth: "400px",
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    color: "#FFFFFF",
    lineHeight: 1.6,
    marginTop: "12px",
  },
  linksColumn: {
    display: "flex",
    gap: "32px",
    alignItems: "center",
  },
  legalLink: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "#00C3D0",
    textDecoration: "underline",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "20px",
  },
} satisfies Record<string, React.CSSProperties>;
