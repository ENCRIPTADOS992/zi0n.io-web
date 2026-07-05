"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

interface DistributionModalProps {
  isOpen: boolean
  onClose: () => void
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function DistributionModal({ isOpen, onClose }: DistributionModalProps) {
  const t = useTranslations('distributionModal')
  const isMobile = useIsMobile()
  const isCompact = useIsMobile(975)
  const [form, setForm] = useState({ name: '', email: '', country: '', budget: '', comments: '' })
  const [status, setStatus] = useState<SubmitStatus>('idle')

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/distribution', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error()

      // If preview mode, open emails in new tabs
      if (data.preview && data.emails) {
        const previewHtml = `
          <!DOCTYPE html><html><head><title>Email Preview</title>
          <style>body{font-family:sans-serif;padding:40px;max-width:800px;margin:0 auto}
          .email-block{border:1px solid #ddd;border-radius:8px;padding:24px;margin-bottom:24px}
          .meta{background:#f5f5f5;padding:8px 12px;border-radius:4px;margin-bottom:16px;font-size:13px}</style></head><body>
          <h1>📧 Email Preview</h1>
          <div class="email-block">
            <div class="meta"><strong>Para:</strong> ${data.emails.admin.to}<br/><strong>Asunto:</strong> ${data.emails.admin.subject}</div>
            ${data.emails.admin.html}
          </div>
          <div class="email-block">
            <div class="meta"><strong>Para:</strong> ${data.emails.client.to}<br/><strong>Asunto:</strong> ${data.emails.client.subject}</div>
            ${data.emails.client.html}
          </div>
          </body></html>`
        const blob = new Blob([previewHtml], { type: 'text/html' })
        const url = URL.createObjectURL(blob)
        window.open(url, '_blank')
      }

      setStatus('success')
      setForm({ name: '', email: '', country: '', budget: '', comments: '' })
      setTimeout(() => { setStatus('idle'); onClose() }, 2500)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={{
        ...styles.modal,
        ...(isCompact && {
          flexDirection: "column",
          maxWidth: isMobile ? "390px" : "540px",
          maxHeight: "95vh",
        }),
      }} onClick={e => e.stopPropagation()}>
        {/* Image */}
        {isCompact ? (
          <div style={styles.imageTop}>
            <Image
              src="/image/home/Free iPhone 14 Pro on a Plane Mockup (Mockuuups Studio).webp"
              alt="Zi0n distribuidor"
              width={540}
              height={200}
              style={styles.modalImageTop}
            />
          </div>
        ) : (
          <div style={styles.imageColumn}>
            <Image
              src="/image/home/Free iPhone 14 Pro on a Plane Mockup (Mockuuups Studio).webp"
              alt="Zi0n distribuidor"
              fill
              style={styles.modalImage}
            />
          </div>
        )}

        {/* Form */}
        <div style={{
          ...styles.formColumn,
          ...(isMobile && { padding: "24px 20px" }),
        }}>
          <button style={styles.closeButton} onClick={onClose}>✕</button>

          <h2 style={{
            ...styles.modalTitle,
            ...(isMobile && { fontSize: "20px" }),
          }}>{t('title')}</h2>
          <p style={styles.modalSubtitle}>{t('subtitle')}</p>

          {status === 'success' && (
            <div style={styles.successMsg}>{t('success')}</div>
          )}
          {status === 'error' && (
            <div style={styles.errorMsg}>{t('error')}</div>
          )}

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={{
              ...styles.formRow,
              ...(isMobile && { flexDirection: "column" }),
            }}>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>{t('nameLabel')}</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('namePlaceholder')}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>{t('emailLabel')}</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('emailPlaceholder')}
                  required
                  style={styles.input}
                />
              </div>
            </div>

            <div style={{
              ...styles.formRow,
              ...(isMobile && { flexDirection: "column" }),
            }}>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>{t('countryLabel')}</label>
                <div style={styles.selectWrapper}>
                  <select name="country" value={form.country} onChange={handleChange} style={styles.select}>
                    <option value="">{t('choosePlaceholder')}</option>
                    <option value="Colombia">Colombia</option>
                    <option value="México">México</option>
                    <option value="Argentina">Argentina</option>
                    <option value="España">España</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Perú">Perú</option>
                    <option value="Chile">Chile</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Otro">Otro</option>
                  </select>
                  <span style={styles.selectArrow}>▾</span>
                </div>
              </div>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>{t('budgetLabel')}</label>
                <div style={styles.selectWrapper}>
                  <select name="budget" value={form.budget} onChange={handleChange} style={styles.select}>
                    <option value="">{t('choosePlaceholder')}</option>
                    <option value="< $1,000">{`< $1,000`}</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="> $10,000">{`> $10,000`}</option>
                  </select>
                  <span style={styles.selectArrow}>▾</span>
                </div>
              </div>
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>{t('commentsLabel')}</label>
              <textarea
                name="comments"
                value={form.comments}
                onChange={handleChange}
                placeholder={t('commentsPlaceholder')}
                rows={4}
                style={styles.textarea}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              style={styles.submitButton}
            >
              {status === 'loading' ? t('sending') : t('submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "24px",
  },
  modal: {
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    display: "flex",
    maxWidth: "880px",
    width: "100%",
    overflow: "hidden",
    maxHeight: "90vh",
  },
  imageColumn: {
    flex: "0 0 340px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "24px 0 0 24px",
  },
  imageTop: {
    width: "100%",
    height: "180px",
    overflow: "hidden",
    borderRadius: "24px 24px 0 0",
  },
  modalImage: {
    objectFit: "cover",
    objectPosition: "center",
  },
  modalImageTop: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  formColumn: {
    flex: 1,
    padding: "40px",
    overflowY: "auto",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#6E6E6E",
    lineHeight: 1,
  },
  modalTitle: {
    fontFamily: "'Mona-Sans', sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#081C59",
    marginBottom: "8px",
    paddingRight: "32px",
  },
  modalSubtitle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6E6E6E",
    lineHeight: 1.6,
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  formRow: {
    display: "flex",
    gap: "16px",
  },
  fieldGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    color: "#081C59",
  },
  input: {
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "14px",
    fontFamily: "Roboto, sans-serif",
    color: "#081C59",
    outline: "none",
  },
  select: {
    width: "100%",
    border: "none",
    background: "none",
    padding: "10px 14px",
    fontSize: "14px",
    fontFamily: "Roboto, sans-serif",
    color: "#081C59",
    outline: "none",
    appearance: "none",
    cursor: "pointer",
  },
  selectWrapper: {
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  selectArrow: {
    paddingRight: "12px",
    color: "#081C59",
    fontSize: "14px",
    pointerEvents: "none",
    flexShrink: 0,
  },
  textarea: {
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "14px",
    fontFamily: "Roboto, sans-serif",
    color: "#081C59",
    outline: "none",
    resize: "none",
  },
  submitButton: {
    backgroundColor: "#5EEC7D",
    color: "#081C59",
    border: "none",
    borderRadius: "9999px",
    padding: "14px",
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "Montserrat, sans-serif",
    cursor: "pointer",
    width: "100%",
    marginTop: "8px",
  },
  successMsg: {
    backgroundColor: "rgba(94, 236, 125, 0.15)",
    border: "1px solid #5EEC7D",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#081C59",
    marginBottom: "16px",
    fontFamily: "Roboto, sans-serif",
  },
  errorMsg: {
    backgroundColor: "rgba(255, 80, 80, 0.1)",
    border: "1px solid #ff5050",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#c00",
    marginBottom: "16px",
    fontFamily: "Roboto, sans-serif",
  },
} satisfies Record<string, React.CSSProperties>
