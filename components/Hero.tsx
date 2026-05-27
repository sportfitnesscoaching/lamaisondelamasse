"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const reveal = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(20px)",
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section
      id="hero"
      role="banner"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#0B0B0B",
      }}
    >
      {/* Radial gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(212,175,55,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.025) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          pointerEvents: "none",
        }}
      />

      {/* Corner brackets */}
      {[
        { top: "28px", left: "28px", borderTop: "1px solid rgba(212,175,55,0.35)", borderLeft: "1px solid rgba(212,175,55,0.35)" },
        { top: "28px", right: "28px", borderTop: "1px solid rgba(212,175,55,0.35)", borderRight: "1px solid rgba(212,175,55,0.35)" },
        { bottom: "28px", left: "28px", borderBottom: "1px solid rgba(212,175,55,0.35)", borderLeft: "1px solid rgba(212,175,55,0.35)" },
        { bottom: "28px", right: "28px", borderBottom: "1px solid rgba(212,175,55,0.35)", borderRight: "1px solid rgba(212,175,55,0.35)" },
      ].map((style, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{ position: "absolute", width: "32px", height: "32px", pointerEvents: "none", ...style }}
        />
      ))}

      {/* Top nav strip */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.75rem 2rem",
        }}
      >
        <span
          style={{
            color: "rgba(136,136,136,0.7)",
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
          }}
        >
          ABA Avenue, Dubai
        </span>
        <a
          href="https://www.instagram.com/lamaisondelamasse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram @lamaisondelamasse"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(136,136,136,0.7)",
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color =
              "rgba(136,136,136,0.7)")
          }
        >
          <InstagramIcon size={13} />
          @lamaisondelamasse
        </a>
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1.5rem",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        {/* Label */}
        <div style={{ ...reveal(0), display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2.25rem" }}>
          <GoldLine direction="right" />
          <span
            style={{
              color: "#D4AF37",
              fontSize: "10px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              fontFamily: "var(--font-space-grotesk, sans-serif)",
            }}
          >
            Dubai&apos;s Largest Private Gym
          </span>
          <GoldLine direction="left" />
        </div>

        {/* Headline */}
        <h1
          style={{
            ...reveal(150),
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            lineHeight: 0.93,
            letterSpacing: "-0.025em",
            marginBottom: "1.75rem",
          }}
        >
          <span
            className="block uppercase text-white"
            style={{ fontSize: "clamp(3.2rem, 11vw, 9rem)" }}
          >
            LA MAISON
          </span>
          <span
            className="block uppercase gold-text"
            style={{ fontSize: "clamp(3.2rem, 11vw, 9rem)" }}
          >
            DE LA MASSE
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            ...reveal(300),
            color: "#777",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-inter, sans-serif)",
            fontWeight: 300,
            maxWidth: "520px",
            lineHeight: 1.6,
            marginBottom: "3rem",
          }}
        >
          Where Elite Training Meets Absolute Luxury.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            ...reveal(450),
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <a
            href="https://la-maison-de-la-masse-dubai.gymdesk.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your training session"
            style={{
              padding: "17px 40px",
              background: "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)",
              color: "#0B0B0B",
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.opacity = "0.85";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.opacity = "1";
              el.style.transform = "none";
            }}
          >
            Book Your Session
          </a>

          <button
            onClick={() =>
              document
                .getElementById("concept")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Discover the concept"
            style={{
              padding: "17px 40px",
              border: "1px solid rgba(212,175,55,0.35)",
              color: "#D4AF37",
              background: "transparent",
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition:
                "border-color 0.25s ease, background 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "rgba(212,175,55,0.7)";
              el.style.background = "rgba(212,175,55,0.05)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "rgba(212,175,55,0.35)";
              el.style.background = "transparent";
              el.style.transform = "none";
            }}
          >
            Discover the Concept
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          ...reveal(800),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          paddingBottom: "2rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span
          style={{
            color: "#444",
            fontSize: "9px",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            position: "relative",
            width: "1px",
            height: "52px",
            background: "#1a1a1a",
            overflow: "hidden",
          }}
        >
          <div className="scroll-line-inner" />
        </div>
      </div>
    </section>
  );
}

function GoldLine({ direction }: { direction: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: "1px",
        width: "44px",
        flexShrink: 0,
        background:
          direction === "right"
            ? "linear-gradient(to right, transparent, #D4AF37)"
            : "linear-gradient(to left, transparent, #D4AF37)",
      }}
    />
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
