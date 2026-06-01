"use client";

const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tangguhriyadi/" },
  { label: "GitHub", href: "https://github.com/tangguhriyadi" },
  { label: "YouTube", href: "https://youtube.com/@tangguhriyadiyt" },
  { label: "Instagram", href: "https://www.instagram.com/mtangguhriyadi" },
  { label: "TikTok", href: "https://www.tiktok.com/@tangguhriy" },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #222222" }}
      className="px-5 py-8"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 items-center">

        {/* Brand */}
        <div
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "24px",
            fontWeight: 700,
            color: "#8fcdff",
          }}
        >
          Tangguh Riyadi
        </div>

        {/* Copyright */}
        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            color: "#a1a1aa",
            textAlign: "center",
          }}
        >
          © 2026 Tangguh Riyadi. Built for the future of AI automation.
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
                color: "#a1a1aa",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#8fcdff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#a1a1aa")}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
