"use client";

import Image from "next/image";

export default function YouTube() {
  return (
    <section
      id="youtube"
      style={{ padding: "120px 20px", backgroundColor: "#0a0a0a" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#131313",
            borderRadius: "32px",
            padding: "64px",
            border: "1px solid #222222",
            overflow: "hidden",
            position: "relative",
          }}
          className="p-8 md:p-16"
        >
          {/* Glow blob */}
          <div
            style={{
              position: "absolute",
              top: "-128px",
              right: "-128px",
              width: "256px",
              height: "256px",
              backgroundColor: "#8fcdff",
              filter: "blur(120px)",
              opacity: 0.1,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "48px",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="lg:flex-row"
          >
            {/* Video player */}
            <div style={{ flex: 1, width: "100%", order: 2 }} className="lg:order-1">
              <a
                href="https://www.youtube.com/watch?v=ynjVnOerBe4&list=PL_4vOfbq6tgB147sBWg6jFx9zGnO9BLL9"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    aspectRatio: "16/9",
                    backgroundColor: "#000000",
                    borderRadius: "16px",
                    border: "1px solid #222222",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  className="group"
                >
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjK_b__KjF0QmF2p799dDoPlNFOhmsTIgYRNIgn8XyRZx1mYqhRrZhsFa4WS_Hdp4ZI7W38bfVKmlSkZuWw5YgqczG4i1QEgNU5jj4dKdKBzMIox7khphkWBeeQqBJ8fh-jYq4MwjuseidIuEcJ8iyltkGyVA5plEsMUbN5vFSOLH0Y6Qg2DHPSpZnwMB7BvLVl8RpGaHum7Bnc5UuRJitmXJM6CvkU-YV5nx6dGOrQ0eDYi2wJPNEZauUIgHgRcI2QxnSGXL92FQ"
                    alt="YouTube Channel"
                    fill
                    style={{ objectFit: "cover", opacity: 0.5 }}
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#8fcdff",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <span style={{ fontSize: "32px", color: "#000000", marginLeft: "4px" }}>▶</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Text */}
            <div
              style={{ flex: 1, order: 1, textAlign: "center" }}
              className="lg:order-2 lg:text-left"
            >

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
                Learn AI Automation —{" "}
                <span style={{ color: "#8fcdff" }}>Free on YouTube</span>
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
                Full course playlist:{" "}
                <strong style={{ color: "#e5e2e1" }}>AI Automation dari Nol</strong>. Join
                15,000+ others and start your automation journey today.
              </p>
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
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  fontSize: "16px",
                  transition: "opacity 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
