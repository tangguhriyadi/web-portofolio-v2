"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#000000",
    border: "1px solid #222222",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#e5e2e1",
    fontFamily: "var(--font-inter)",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-geist)",
    fontSize: "14px",
    color: "#a1a1aa",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontWeight: 500,
    marginBottom: "8px",
  };

  return (
    <section
      id="contact"
      style={{ padding: "120px 20px", backgroundColor: "#131313" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{ display: "grid", gap: "64px", alignItems: "start" }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Info */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "48px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: "56px",
                color: "#e5e2e1",
                marginBottom: "24px",
              }}
              className="text-[32px] md:text-[48px]"
            >
              Let&apos;s Work Together
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "18px",
                lineHeight: "28px",
                color: "#a1a1aa",
                marginBottom: "32px",
              }}
            >
              Have a process you want to automate? Or want to learn how to do it
              yourself? Let&apos;s talk about your project.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(143,205,255,0.1)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  ✉️
                </div>
                <a
                  href="mailto:mtangguh97@gmail.com"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "18px",
                    color: "#e5e2e1",
                    textDecoration: "none",
                  }}
                >
                  mtangguh97@gmail.com
                </a>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {[
                  { logo: "/youtube.webp", href: "https://youtube.com/@tangguhriyadiyt", label: "YouTube" },
                  { logo: "/linkedin.webp", href: "https://www.linkedin.com/in/tangguhriyadi/", label: "LinkedIn" },
                  { logo: "/github.svg", href: "https://github.com/tangguhriyadi", label: "GitHub" },
                  { logo: "/instagram.png", href: "https://www.instagram.com/mtangguhriyadi", label: "Instagram" },
                  { logo: "/tiktok.avif", href: "https://www.tiktok.com/@tangguhriy", label: "TikTok" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    style={{
                      width: "52px",
                      height: "52px",
                      border: "1px solid #222222",
                      borderRadius: "10px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      padding: "8px",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = "#8fcdff";
                      e.currentTarget.style.boxShadow = "0 0 12px rgba(143,205,255,0.3)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = "#222222";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Image src={s.logo} alt={s.label} width={32} height={32} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#0a0a0a",
              padding: "32px",
              borderRadius: "16px",
              border: "1px solid #222222",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {status === "success" && (
              <div
                style={{
                  backgroundColor: "rgba(143,205,255,0.1)",
                  border: "1px solid rgba(143,205,255,0.3)",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  color: "#8fcdff",
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                }}
              >
                ✓ Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div
                style={{
                  backgroundColor: "rgba(255,180,171,0.1)",
                  border: "1px solid rgba(255,180,171,0.3)",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  color: "#ffb4ab",
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                }}
              >
                ✕ Something went wrong. Please try again.
              </div>
            )}

            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#8fcdff")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#222222")}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#8fcdff")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#222222")}
              />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                placeholder="How can I help you?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#8fcdff")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#222222")}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%",
                backgroundColor: status === "loading" ? "#4a7a9b" : "#8fcdff",
                color: "#000000",
                fontWeight: 700,
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                fontFamily: "var(--font-inter)",
                fontSize: "16px",
                transition: "opacity 0.2s, background-color 0.2s",
              }}
              onMouseOver={(e) => { if (status !== "loading") e.currentTarget.style.opacity = "0.9"; }}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
