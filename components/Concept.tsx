"use client";

import { useInView } from "@/hooks/useInView";

const PILLARS = [
  {
    number: "01",
    title: "Absolute Discretion",
    description:
      "A private, high-end atmosphere designed for high-profile clients who demand focus and privacy. No crowds. No distractions. No compromise. Just you and peak performance.",
  },
  {
    number: "02",
    title: "Elite Equipment",
    description:
      "Over 50+ state-of-the-art, custom-selected machines engineered for absolute beginners to seasoned pros — ensuring optimal biomechanics for every body type and every goal.",
  },
  {
    number: "03",
    title: "Incredible Premium Decor",
    description:
      "An architectural masterpiece combining raw industrial strength with ultra-luxury finishes. Every detail is crafted to inspire greatness the moment you step through the door.",
  },
];

export default function Concept() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section
      id="concept"
      aria-labelledby="concept-heading"
      style={{ background: "#0D0D0D", padding: "7rem 0" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "none" : "translateY(24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="section-label">
            <div
              className="section-label-line"
              style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }}
            />
            <span className="section-label-text">The Concept</span>
            <div
              className="section-label-line"
              style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}
            />
          </div>

          <h2
            id="concept-heading"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              color: "#fff",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            Redefining Private Training
            <br />
            <span className="gold-text">in Dubai</span>
          </h2>

          <p
            style={{
              color: "#666",
              maxWidth: "480px",
              margin: "0 auto",
              fontSize: "1rem",
              lineHeight: 1.75,
              fontFamily: "var(--font-inter, sans-serif)",
              fontWeight: 300,
            }}
          >
            Three pillars that set La Maison de la Masse apart from every other
            facility in the region.
          </p>
        </div>

        {/* Pillars grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  delay,
}: {
  pillar: (typeof PILLARS)[0];
  delay: number;
}) {
  const { ref, inView } = useInView();

  return (
    <article
      ref={ref}
      className="card-hover"
      style={{
        padding: "2.75rem",
        background: "#111111",
        border: "1px solid rgba(212,175,55,0.12)",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(32px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {/* Watermark number */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.5rem",
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          fontWeight: 800,
          fontSize: "5rem",
          color: "rgba(212,175,55,0.05)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
          userSelect: "none",
        }}
      >
        {pillar.number}
      </div>

      {/* Gold accent line */}
      <div
        style={{
          width: "28px",
          height: "2px",
          background: "linear-gradient(to right, #D4AF37, #E8CC7A)",
          marginBottom: "1.75rem",
        }}
      />

      <h3
        style={{
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          fontWeight: 600,
          fontSize: "1.25rem",
          color: "#fff",
          marginBottom: "1rem",
          letterSpacing: "-0.01em",
        }}
      >
        {pillar.title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          color: "#666",
          fontSize: "0.9375rem",
          lineHeight: 1.75,
          fontWeight: 300,
        }}
      >
        {pillar.description}
      </p>
    </article>
  );
}
