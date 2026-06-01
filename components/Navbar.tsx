"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "services", "projects", "youtube", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{
        backgroundColor: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #222222",
      }}
    >
      {/* Top bar */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 flex justify-between items-center h-20">
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image src="/logo.png" alt="Logo" width={32} height={32} style={{ objectFit: "contain" }} />
          <span
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "20px",
              fontWeight: 700,
              color: "#e5e2e1",
              letterSpacing: "-0.02em",
            }}
          >
            Tangguh Riyadi
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter)",
                  fontSize: "16px",
                  fontWeight: active === id ? 700 : 400,
                  color: active === id ? "#8fcdff" : "#bdc8d3",
                  borderBottom: active === id ? "2px solid #8fcdff" : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          className="hidden md:block"
          style={{
            backgroundColor: "#00aeff",
            color: "#003450",
            fontWeight: 700,
            padding: "8px 24px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "opacity 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Hire Me
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10"
          style={{
            background: "none",
            border: "1px solid #222222",
            borderRadius: "8px",
            color: "#e5e2e1",
            cursor: "pointer",
            fontSize: "18px",
            transition: "border-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = "#8fcdff")}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = "#222222")}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          borderBottom: menuOpen ? "1px solid #222222" : "none",
        }}
      >
        <div
          className="flex flex-col px-5 py-4 gap-1"
          style={{ backgroundColor: "#0e0e0e" }}
        >
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left px-3 py-3 rounded-lg transition-colors duration-150"
                style={{
                  background: active === id ? "rgba(143,205,255,0.08)" : "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter)",
                  fontSize: "16px",
                  fontWeight: active === id ? 700 : 400,
                  color: active === id ? "#8fcdff" : "#bdc8d3",
                }}
              >
                {link.label}
              </button>
            );
          })}

          <button
            onClick={() => scrollTo("#contact")}
            className="mt-2"
            style={{
              backgroundColor: "#00aeff",
              color: "#003450",
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
