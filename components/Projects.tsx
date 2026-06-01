"use client";

import Image from "next/image";

const projects = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqtcvA3dwCjwhkOjJsHm5fx9miosOqXaGv_yS0ss5A8zN_1P7r4aX052BQ3lqgUKLyAjtS4ThO1b3_vEq6smcBSYP_5eZpStY2J-BpsJ2_I6-t4z7W90MPmtgc5vxu79o0dsrG5H2UbKYS5FmEpiwF2WGMTOz2_AWD5mlL7dhUwZIfwmvxltnvVYV4ekiTzctgpEkxOrmdCl0d-Gp_ME5KiU61iAD5A3gXfMi-8NNyGDwD-c-YxH4qRdkZo2l5-F18CR6OUTxi8ho",
    tags: ["n8n", "AI", "Google Sheets"],
    title: "AI CV Screening System",
    description:
      "Automated screening of 500+ CVs using AI. Saves 90% of recruitment processing time.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH5Dqu0LW3hDMihqUFhaiZjzK8frHNHrP2EcDQdnDRyMfD_CaHMr3HsJqWaBH60eHyyXN7lML08BoDFHi-RgUoSEShVMRQ3gPJ6qsIqFq-6pL6u3iju72i3LHY7zKz_IFBiWaYrWSUep2QiRcY-ul14jcLsjtEiZ5kjZZZDNybs8r7EqWmTNKJ7y5McMOkgEXpEmCXxS8ZqbmMa6CclegiQW5ZENAVA3srKwsrAd6mVTsJPBqB5-i_CEiT7kPN_HdQwQ3FuIsPb1Y",
    tags: ["n8n", "AI", "Google Drive"],
    title: "Document Sorting & Summarize",
    description:
      "Automatically sort, classify, and summarize incoming documents using AI — reducing manual review time by over 80%.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCwefQgSctBdz5K7_68v-2WXRTQEUkWuF5dVrximrHxqVUcJsjU0EzqI-A890ekQG_c_esS3fsq1GRefQZYlyuufm7bvsIU4kDQ8rNjYKSfjcQWva_cHrf25Xm8dpufOIyoYfIArrT8UvPzIM9AMHKCByGJnjLr5IgTflqtFIwxLmOB9AuCeSXZveKdt9OAI0wcNO4d1BaESqEiGN_56X1EQ4FkpdbbsbhBjeqUIwK8uXsIqBDeOYkIgRpcae7ZST41sp63xKKoeYQ",
    tags: ["n8n", "Fonnte", "AI"],
    title: "WhatsApp AI Chatbot",
    description: "Auto-reply WhatsApp chatbot integrated with AI for smart responses.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 20px",
        backgroundColor: "#0e0e0e",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "64px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "48px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: "56px",
              color: "#e5e2e1",
            }}
          >
            Featured Projects
          </h2>
          <a
            href="#"
            style={{
              color: "#8fcdff",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "16px",
              display: "none",
            }}
            className="md:block"
          >
            View all work →
          </a>
        </div>

        <div
          style={{ display: "grid", gap: "32px" }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  image,
  tags,
  title,
  description,
}: {
  image: string;
  tags: string[];
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="group">
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #222222",
          marginBottom: "24px",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover",
            transition: "transform 0.5s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
        />
      </div>

      <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: "rgba(143,205,255,0.1)",
              color: "#8fcdff",
              fontFamily: "var(--font-geist)",
              fontSize: "14px",
              fontWeight: 500,
              padding: "4px 12px",
              borderRadius: "9999px",
              border: "1px solid rgba(143,205,255,0.2)",
            }}
          >
            {tag}
          </span>
        ))}
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
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#a1a1aa",
          flex: 1,
        }}
      >
        {description}
      </p>
    </div>
  );
}
