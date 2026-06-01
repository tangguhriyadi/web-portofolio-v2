"use client";

const testimonials = [
  {
    stars: 5,
    quote:
      "Video YouTube-nya sangat membantu, jelas dan padat. Sangat inspiratif!",
    initial: "N",
    name: "Nova",
    role: "HR Professional",
  },
  {
    stars: 5,
    quote:
      "Materinya mudah dipahami bahkan untuk orang non-tech seperti saya. Berhasil build automasi pertama saya dalam semalam.",
    initial: "S",
    name: "Subscriber",
    role: "YouTube Student",
  },
  {
    stars: 5,
    quote:
      "Sudah subs, semoga bisa serap semua ilmunya. Keep sharing! Kontennya daging semua bang.",
    initial: "A",
    name: "@MArifinIlhamm",
    role: "Community Member",
  },
];

export default function Testimonials() {
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
            textAlign: "center",
          }}
        >
          Wall of Love
        </h2>

        <div
          style={{ display: "grid", gap: "32px", alignItems: "start" }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  stars,
  quote,
  initial,
  name,
  role,
}: {
  stars: number;
  quote: string;
  initial: string;
  name: string;
  role: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#131313",
        border: "1px solid #222222",
        padding: "32px",
        borderRadius: "16px",
      }}
    >
      {stars > 0 && (
        <div style={{ color: "#8fcdff", marginBottom: "16px", fontSize: "20px" }}>
          {"★".repeat(stars)}
        </div>
      )}
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#e5e2e1",
          fontStyle: "italic",
          marginBottom: "24px",
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(143,205,255,0.2)",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#8fcdff",
            fontWeight: 700,
            fontFamily: "var(--font-montserrat)",
          }}
        >
          {initial}
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              color: "#e5e2e1",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "14px",
              color: "#a1a1aa",
              fontWeight: 500,
            }}
          >
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}
