"use client";

import Image from "next/image";

const socials = [
  {
    logo: "/youtube.webp",
    title: "YouTube",
    description: "15,000+ Subscribers — Free tutorials on AI automation from zero",
    href: "https://youtube.com/@tangguhriyadiyt",
  },
  {
    logo: "/linkedin.webp",
    title: "LinkedIn",
    description: "Professional updates, career tips, and networking for remote AI jobs.",
    href: "https://www.linkedin.com/in/tangguhriyadi/",
  },
  {
    logo: "/tiktok.avif",
    title: "TikTok",
    description: "Short-form content on remote working life and quick tech hacks.",
    href: "https://www.tiktok.com/@tangguhriy",
  },
];

export default function SocialGrid() {
  return (
    <section
      style={{ padding: "120px 20px", backgroundColor: "#0e0e0e" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: "56px",
            color: "#e5e2e1",
            marginBottom: "64px",
            textAlign: "center",
          }}
        >
          Where to Find Me
        </h2>

        <div
          style={{ display: "grid", gap: "32px" }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                background: "rgba(17,17,17,0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid #222222",
                padding: "32px",
                borderRadius: "16px",
                textDecoration: "none",
                transition: "border-color 0.2s",
                display: "block",
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = "#8fcdff")}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = "#222222")}
            >
              <div
                style={{
                  marginBottom: "24px",
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                }}
              >
                <Image
                  src={s.logo}
                  alt={s.title}
                  width={48}
                  height={48}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#e5e2e1",
                  marginBottom: "8px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#a1a1aa",
                }}
              >
                {s.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
