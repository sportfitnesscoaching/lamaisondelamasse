"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "The Concept", href: "#concept" },
  { label: "Amenities", href: "#amenities" },
  { label: "Membership", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const navBg = scrolled
    ? "rgba(11,11,11,0.94)"
    : "transparent";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          background: navBg,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(212,175,55,0.1)"
            : "1px solid transparent",
          transition:
            "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          aria-label="La Maison de la Masse — Home"
          style={{
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            fontSize: "13.5px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          La Maison{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #D4AF37 0%, #E8CC7A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            de la Masse
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden md:flex"
          style={{
            marginLeft: "auto",
            marginRight: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                fontSize: "10.5px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#888",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#888")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Book Now */}
        <a
          href="https://la-maison-de-la-masse-dubai.gymdesk.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
          aria-label="Book your session"
          style={{
            padding: "10px 22px",
            background: "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)",
            color: "#0B0B0B",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            fontSize: "10.5px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.82")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
          }
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            marginLeft: "auto",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background:
                  open && i === 1 ? "transparent" : "#D4AF37",
                transformOrigin: "center",
                transform:
                  open
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "none"
                    : "none",
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            />
          ))}
        </button>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: "72px",
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(11,11,11,0.98)",
          backdropFilter: "blur(20px)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              fontWeight: 600,
              fontSize: "20px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://la-maison-de-la-masse-dubai.gymdesk.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={{
            marginTop: "1rem",
            padding: "16px 40px",
            background: "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)",
            color: "#0B0B0B",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Book Your Session
        </a>
      </div>
    </>
  );
}
