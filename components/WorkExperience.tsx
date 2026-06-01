"use client";

const experiences = [
  {
    period: "Nov 2025 – Present",
    role: "AI Automation Engineer",
    company: "Apartment Specialists NZ",
    type: "Full-time",
    location: "Auckland, New Zealand · Remote",
    current: true,
  },
  {
    period: "May 2025 – Nov 2025",
    role: "AI Automation Engineer",
    company: "Motiolabs",
    type: "Full-time",
    location: "Bandung · On-site",
    current: false,
  },
  {
    period: "Aug 2025 – Nov 2025",
    role: "AI Automation Specialist",
    company: "Talenta Bangsa",
    type: "Part-time",
    location: "Jakarta · Remote",
    current: false,
  },
  {
    period: "Jul 2025 – Sept 2025",
    role: "n8n Expert",
    company: "Weaver",
    type: "Part-time",
    location: "France · Remote",
    current: false,
  },
  {
    period: "Jun 2025 – Jul 2025",
    role: "n8n Expert",
    company: "Reef",
    type: "Part-time",
    location: "Australia · Remote",
    current: false,
  },
  {
    period: "Des 2022 – May 2025",
    role: "Software Engineer",
    company: "Motiolabs",
    type: "Full-time",
    location: "Bandung · On-site",
    current: false,
  },
];

export default function WorkExperience() {
  return (
    <section style={{ padding: "120px 20px", backgroundColor: "#0a0a0a" }}>
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
          }}
        >
          Work Experience
        </h2>

        <div style={{ position: "relative", paddingLeft: "32px" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "7px",
              top: "6px",
              bottom: "6px",
              width: "2px",
              background: "linear-gradient(to bottom, #8fcdff, #222222)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  paddingBottom: i < experiences.length - 1 ? "48px" : "0",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-29px",
                    top: "6px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "9999px",
                    backgroundColor: exp.current ? "#8fcdff" : "#222222",
                    border: `2px solid ${exp.current ? "#8fcdff" : "#444444"}`,
                    boxShadow: exp.current ? "0 0 12px rgba(143,205,255,0.6)" : "none",
                    zIndex: 1,
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    backgroundColor: "#131313",
                    border: `1px solid ${exp.current ? "rgba(143,205,255,0.3)" : "#222222"}`,
                    borderRadius: "16px",
                    padding: "24px 28px",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = "#8fcdff";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(143,205,255,0.08)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = exp.current ? "rgba(143,205,255,0.3)" : "#222222";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Top row */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#e5e2e1",
                          margin: 0,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#8fcdff",
                          margin: "4px 0 0",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                      {/* Period */}
                      <span
                        style={{
                          fontFamily: "var(--font-geist)",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#a1a1aa",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {exp.period}
                      </span>

                      {/* Badges */}
                      <div style={{ display: "flex", gap: "8px" }}>
                        {exp.current && (
                          <span
                            style={{
                              fontFamily: "var(--font-geist)",
                              fontSize: "11px",
                              fontWeight: 500,
                              color: "#8fcdff",
                              backgroundColor: "rgba(143,205,255,0.1)",
                              border: "1px solid rgba(143,205,255,0.3)",
                              borderRadius: "9999px",
                              padding: "2px 10px",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                            }}
                          >
                            Current
                          </span>
                        )}
                        <span
                          style={{
                            fontFamily: "var(--font-geist)",
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "#a1a1aa",
                            backgroundColor: "#1c1b1b",
                            border: "1px solid #2a2a2a",
                            borderRadius: "9999px",
                            padding: "2px 10px",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-inter)",
                      fontSize: "14px",
                      color: "#a1a1aa",
                    }}
                  >
                    <span>📍</span>
                    {exp.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
