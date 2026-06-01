"use client";

import Image from "next/image";

const stats = [
  { value: "15,000+", label: "YouTube Subscribers" },
  { value: "400K+", label: "Total Views" },
  { value: "500+", label: "Deployed Production Workflows" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-[120px] px-5"
    >
      {/* flex-col on mobile, flex-row on desktop — photo goes below text on mobile */}
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-16 items-start">

        {/* Photo — shown first on mobile (order-first), right side on desktop (order-last) */}
        <div className="w-full lg:w-[380px] lg:flex-shrink-0 order-first lg:order-last">
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-4px",
                background: "linear-gradient(135deg, #8fcdff, #00aeff)",
                borderRadius: "16px",
                filter: "blur(16px)",
                opacity: 0.2,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                backgroundColor: "#131313",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #222222",
                aspectRatio: "4/5",
              }}
            >
              <Image
                src="/profile.png"
                alt="Tangguh Riyadi"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>

        {/* Text — below photo on mobile, left side on desktop */}
        <div className="flex-1 min-w-0 order-last lg:order-first">
          <h1
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: "1.1",
              fontSize: "clamp(40px, 6vw, 80px)",
              marginBottom: "24px",
              color: "#e5e2e1",
            }}
          >
            AI Automation
            <br />
            <span style={{ color: "#8fcdff" }}>Made Simple.</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              lineHeight: "28px",
              color: "#a1a1aa",
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            My name is Tangguh Riyadi. I help people learn AI automation, build
            real projects, and land remote jobs without an IT degree.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "64px" }}>
            <a
              href="https://youtube.com/@tangguhriyadiyt"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "#8fcdff",
                color: "#000000",
                fontWeight: 700,
                padding: "16px 32px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                fontSize: "16px",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              ▶ Watch on YouTube
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                border: "1px solid #222222",
                color: "#e5e2e1",
                fontWeight: 700,
                padding: "16px 32px",
                borderRadius: "12px",
                textDecoration: "none",
                fontSize: "16px",
                transition: "background-color 0.2s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#131313")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              paddingTop: "32px",
              borderTop: "1px solid #222222",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                    fontWeight: 600,
                    color: "#8fcdff",
                    lineHeight: "32px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontSize: "clamp(10px, 1.2vw, 14px)",
                    color: "#a1a1aa",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
