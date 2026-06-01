"use client";

import Image from "next/image";

const services = [
  {
    icon: "📊",
    title: "AI Automation Consulting",
    description:
      "Analyze your business processes and design automation solutions that save time and cost.",
  },
  {
    icon: null,
    logo: "/n8n-icon.webp",
    title: "n8n Implementation",
    description:
      "Build end-to-end workflow automation using n8n, from setup to deployment.",
  },
  {
    icon: "🎓",
    title: "Private Mentoring",
    description: "Learn AI automation hands-on using your real business case.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 20px",
        backgroundColor: "#0a0a0a",
      }}
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
            textAlign: "left",
          }}
        >
          What I Do
        </h2>

        <div
          style={{ display: "grid", gap: "32px" }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  logo,
  title,
  description,
}: {
  icon: string | null;
  logo?: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#131313",
        border: "1px solid #222222",
        padding: "32px",
        borderRadius: "16px",
        transition: "border-color 0.2s",
        cursor: "default",
      }}
      onMouseOver={(e) => (e.currentTarget.style.borderColor = "#8fcdff")}
      onMouseOut={(e) => (e.currentTarget.style.borderColor = "#222222")}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: "rgba(143,205,255,0.1)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          marginBottom: "24px",
          padding: logo ? "6px" : undefined,
        }}
      >
        {logo ? (
          <Image src={logo} alt={title} width={36} height={36} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
        ) : (
          icon
        )}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "32px",
          color: "#e5e2e1",
          marginBottom: "16px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#a1a1aa",
        }}
      >
        {description}
      </p>
    </div>
  );
}
