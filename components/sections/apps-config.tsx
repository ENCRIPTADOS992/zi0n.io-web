"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

const tabKeys = ['privacy', 'exchange', 'communications', 'encrypted'] as const

const tabFolders: Record<typeof tabKeys[number], string> = {
  privacy: "logos-tienda-privacy",
  exchange: "logos-tienda-exchange",
  communications: "logos-tienda-comunicaciones",
  encrypted: "logos-tienda-encriptados",
}

const appNames: Record<typeof tabKeys[number], string[]> = {
  privacy: [
    "CoinGecko", "CoinMarketCap", "Ledger", "Trezor", "Uniswap", "MaxWallet", "Trust", "Monero", "Exodus",
    "Rabbit Wallet", "Metamask", "Tron link", "Phantom", "DuckDuck Go", "Calculadora", "Encriptados", "Xe", "DeepL",
    "Proton mail", "Proton Drive", "Proton Auth", "Authy", "Signal", "Molly", "Threema", "Silentphone", "Telegram",
    "Whatsapp", "ccoins",
  ],
  exchange: [
    "CoinGecko", "CoinMarketCap", "Binance", "KuCoin", "Kraken", "Bitget", "Bybit", "Coinbase", "Huobi",
    "Gemini", "Bittrex", "Bitstamp", "OKX", "Gate.io", "Crypto.com", "Poloniex", "Rabby Wallet", "Gmail",
    "Ledger", "Trezor", "Uniswap", "MaxWallet", "Trust", "Monero", "Exodus", "Metamask", "Tron link",
    "Phantom", "DuckDuck Go", "Calculadora", "Encriptados", "Xe", "DeepL", "Proton mail", "Proton Drive",
    "Proton Auth", "Authy", "Signal", "Molly", "Threema", "Silentphone", "Telegram", "Whatsapp",
  ],
  communications: [
    "Mega", "Slynumber", "Zangi Messenger", "xPal Ultra Secure", "WhatsApp Business", "Facebook", "Messenger", "X", "Snapchat",
    "YouTube", "Tiktok", "Amazon", "Airbnb", "Bitrefill", "Uber Eats", "What3Words", "UBoxPro", "PAJ Portal",
    "PlanetGPS", "Trust", "Monero", "MaxWallet", "DuckDuck Go", "Calculadora", "Encriptados", "Xe", "DeepL",
    "Proton mail", "Proton Drive", "Proton Auth", "Signal", "Molly", "Threema", "Silentphone", "Telegram", "Whatsapp",
  ],
  encrypted: [
    "MaxWallet", "Trust", "Calculadora", "Encriptados", "Xe", "DeepL", "Proton mail", "Proton Drive", "Signal",
    "Molly", "Threema", "Silentphone", "Telegram", "Mega", "Armadillo Chat", "Zangi Private", "xPal Ultra Secure",
  ],
}

function getLogos(tab: typeof tabKeys[number]): { src: string; name: string }[] {
  const folder = tabFolders[tab]
  const names = appNames[tab]
  return names.map((name, i) => ({
    src: `/image/home/${folder}/${i === 0 ? 'mensaje' : `mensaje-${i}`}.png`,
    name,
  }))
}

export function AppsConfig() {
  const t = useTranslations('appsConfig')
  const [activeTab, setActiveTab] = useState<typeof tabKeys[number]>('privacy')

  const logos = getLogos(activeTab)

  return (
    <section id="apps" style={styles.section}>
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

        {/* Tabs */}
        <div style={styles.tabsContainer}>
          <div style={styles.tabsWrapper}>
            {tabKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={activeTab === key ? styles.tabActive : styles.tab}
              >
                {t(`tabs.${key}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        <motion.div
          key={activeTab}
          style={styles.grid}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {logos.map((app, i) => (
            <div key={i} style={styles.appItem}>
              <Image
                src={app.src}
                alt={app.name}
                width={64}
                height={64}
                style={styles.appIcon}
              />
              <span style={styles.appName}>{app.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: "#F4F6FA",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    height: "722px",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
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
  tabsContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  tabsWrapper: {
    display: "flex",
    gap: "0px",
    backgroundColor: "#081F5F",
    borderRadius: "9999px",
    padding: "6px",
  },
  tab: {
    padding: "10px 24px",
    borderRadius: "9999px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: "Montserrat, sans-serif",
  },
  tabActive: {
    padding: "10px 24px",
    borderRadius: "9999px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#081C59",
    backgroundColor: "#5EEC7D",
    border: "none",
    cursor: "pointer",
    fontFamily: "Montserrat, sans-serif",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    gap: "24px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  appItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  appIcon: {
    borderRadius: "16px",
    objectFit: "contain",
  },
  appName: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "11px",
    fontWeight: 400,
    color: "#081C59",
    textAlign: "center",
  },
} satisfies Record<string, React.CSSProperties>;
