"use client";

const tools = ["n8n", "Google Workspace", "Fonnte", "Docker", "Claude AI", "DeepSeek"];

export default function Marquee() {
  return (
    <div
      style={{
        padding: "48px 0",
        backgroundColor: "rgba(19,19,19,0.5)",
        borderTop: "1px solid #222222",
        borderBottom: "1px solid #222222",
        overflow: "hidden",
      }}
    >
      <div className="animate-marquee">
        {[...tools, ...tools].map((tool, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "24px",
              fontWeight: 700,
              color: "#a1a1aa",
              opacity: 0.5,
              padding: "0 48px",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s, color 0.2s",
              cursor: "default",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.color = "#8fcdff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "0.5";
              e.currentTarget.style.color = "#a1a1aa";
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
