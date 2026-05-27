"use client";

import { useInView } from "@/hooks/useInView";

const AMENITIES = [
  {
    icon: <SneakerIcon />,
    label: "Iconic",
    title: "The Sneaker Wall",
    description:
      "Our legendary, curated sneaker display wall — blending street culture with luxury fitness aesthetics. A statement piece that defines the unique character of La Maison de la Masse.",
    tags: ["Cultural Icon", "Exclusive Curation"],
  },
  {
    icon: <LoungeIcon />,
    label: "Premium",
    title: "Luxury Lounges & Restrooms",
    description:
      "Impeccably designed, high-end separate Male & Female restrooms with premium finishes, rainfall showers, and amenity kits. Comfort elevated to match your performance.",
    tags: ["Male & Female", "Premium Finishes"],
  },
  {
    icon: <RecoveryIcon />,
    label: "Recovery",
    title: "Recovery & Entertainment Zone",
    description:
      "A dedicated relaxation space equipped with a massive 4K TV, PlayStation 5, and premium lounge seating. Decompress, recharge, and enjoy the post-workout ritual.",
    tags: ["PlayStation 5", "4K Cinema Screen"],
  },
  {
    icon: <FuelIcon />,
    label: "The Bar",
    title: "The Fuel Bar",
    description:
      "Premium espresso and beverages on-demand. Custom protein shakers prepared fresh post-workout. Healthy, macro-friendly meals orderable directly at the gym.",
    tags: ["Premium Espresso", "Protein Shakers", "Healthy Meals"],
  },
];

export default function Amenities() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      style={{ background: "#0B0B0B", padding: "7rem 0" }}
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
            <span className="section-label-text">The Experience</span>
            <div
              className="section-label-line"
              style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}
            />
          </div>

          <h2
            id="amenities-heading"
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
            Beyond Training.
            <br />
            <span className="gold-text">A Complete Lifestyle.</span>
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
            Every detail designed to enhance your experience — before, during,
            and long after your session ends.
          </p>
        </div>

        {/* Amenities grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {AMENITIES.map((item, i) => (
            <AmenityCard key={item.title} item={item} delay={i * 110} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenityCard({
  item,
  delay,
}: {
  item: (typeof AMENITIES)[0];
  delay: number;
}) {
  const { ref, inView } = useInView();

  return (
    <article
      ref={ref}
      className="card-hover"
      style={{
        padding: "2.5rem",
        background: "#111111",
        border: "1px solid rgba(212,175,55,0.1)",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(32px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {/* Top row: icon + label */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "1.75rem",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.15)",
            color: "#D4AF37",
            flexShrink: 0,
          }}
        >
          {item.icon}
        </div>
        <span
          style={{
            fontSize: "9.5px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#D4AF37",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            border: "1px solid rgba(212,175,55,0.25)",
            padding: "4px 10px",
            alignSelf: "flex-start",
          }}
        >
          {item.label}
        </span>
      </div>

      {/* Thin gold line */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(to right, rgba(212,175,55,0.3), transparent)",
          marginBottom: "1.5rem",
        }}
      />

      <h3
        style={{
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          fontWeight: 600,
          fontSize: "1.2rem",
          color: "#fff",
          marginBottom: "0.875rem",
          letterSpacing: "-0.01em",
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          color: "#666",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          fontWeight: 300,
          marginBottom: "1.5rem",
        }}
      >
        {item.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#888",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "4px 10px",
              fontFamily: "var(--font-space-grotesk, sans-serif)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

/* ─── SVG Icons ─── */
function SneakerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17c0 0 1.5-4 5-5s8-1 11 1c0 0-1 3-3 3H4a1 1 0 01-1-1z"/>
      <path d="M7 12l2-5 3 3 2-4"/>
    </svg>
  );
}

function LoungeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 9V7a2 2 0 012-2h16a2 2 0 012 2v2"/>
      <path d="M2 9a2 2 0 012 2v3h16v-3a2 2 0 012-2"/>
      <path d="M4 17v2M20 17v2"/>
      <rect x="4" y="14" width="16" height="3" rx="1"/>
    </svg>
  );
}

function RecoveryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="13" rx="2"/>
      <path d="M8 20h8M12 17v3"/>
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 8h1a4 4 0 010 8h-1"/>
      <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/>
      <path d="M6 2v4M10 2v4"/>
    </svg>
  );
}
