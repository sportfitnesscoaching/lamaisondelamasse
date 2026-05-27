"use client";

import { useInView } from "@/hooks/useInView";

const PROFILES = [
  {
    badge: "Content Creators",
    headline: "The Ultimate Cinematic Backdrop",
    description:
      "A fully-equipped, aesthetically flawless private gym available for booking to shoot high-tier fitness content, YouTube videos, brand campaigns, and editorial shoots.",
    benefits: [
      "Full private booking — no strangers in your shots",
      "Cinematic lighting & architectural aesthetics",
      "50+ premium machines as dynamic background",
      "The Sneaker Wall — an iconic visual centerpiece",
      "Content-ready spaces across the entire facility",
    ],
    icon: <CameraIcon />,
  },
  {
    badge: "Freelance Coaches",
    headline: "Elevate Your Business",
    description:
      "Bring your private clients to train in the most exclusive facility in Dubai. Deliver a 5-star personal training experience that reflects your premium positioning.",
    benefits: [
      "Partner access to the full premium facility",
      "Private environment for your high-profile clients",
      "Ultra-luxury amenities elevate every session",
      "Elite equipment for every training modality",
      "Flexible booking tailored to your schedule",
    ],
    icon: <CoachIcon />,
  },
];

export default function B2B() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section
      id="b2b"
      aria-labelledby="b2b-heading"
      style={{ background: "#0F0F0F", padding: "7rem 0" }}
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
            <span className="section-label-text">For Professionals</span>
            <div
              className="section-label-line"
              style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}
            />
          </div>

          <h2
            id="b2b-heading"
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
            A Venue Built for{" "}
            <span className="gold-text">Excellence</span>
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
            Whether you create content or coach elite clients — La Maison de la
            Masse provides the most exclusive stage in Dubai.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {PROFILES.map((profile, i) => (
            <B2BCard key={profile.badge} profile={profile} delay={i * 150} />
          ))}
        </div>

        {/* CTA */}
        <InquireCTA />
      </div>
    </section>
  );
}

function B2BCard({
  profile,
  delay,
}: {
  profile: (typeof PROFILES)[0];
  delay: number;
}) {
  const { ref, inView } = useInView();

  return (
    <article
      ref={ref}
      style={{
        position: "relative",
        background: "#111111",
        border: "1px solid rgba(212,175,55,0.12)",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(32px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms, border-color 0.3s ease`,
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor =
          "rgba(212,175,55,0.38)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor =
          "rgba(212,175,55,0.12)")
      }
    >
      {/* Gold top bar */}
      <div
        aria-hidden="true"
        style={{
          height: "2px",
          background:
            "linear-gradient(to right, #D4AF37, #E8CC7A, #D4AF37)",
        }}
      />

      <div style={{ padding: "2.75rem" }}>
        {/* Badge + icon row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#D4AF37",
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              border: "1px solid rgba(212,175,55,0.3)",
              padding: "5px 12px",
            }}
          >
            {profile.badge}
          </span>
          <div
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(212,175,55,0.5)",
            }}
          >
            {profile.icon}
          </div>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          {profile.headline}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            color: "#666",
            fontSize: "0.9rem",
            lineHeight: 1.75,
            fontWeight: 300,
            marginBottom: "2rem",
          }}
        >
          {profile.description}
        </p>

        {/* Benefits list */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.25rem" }}>
          {profile.benefits.map((benefit) => (
            <li
              key={benefit}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                marginBottom: "0.75rem",
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "0.875rem",
                color: "#888",
                lineHeight: 1.55,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: "2px",
                  color: "#D4AF37",
                  fontSize: "12px",
                }}
              >
                ✦
              </span>
              {benefit}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          style={{
            display: "block",
            textAlign: "center",
            padding: "14px",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "#D4AF37",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 600,
            fontSize: "10.5px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.25s ease, border-color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "rgba(212,175,55,0.07)";
            el.style.borderColor = "rgba(212,175,55,0.6)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "transparent";
            el.style.borderColor = "rgba(212,175,55,0.3)";
          }}
        >
          Inquire for Private Booking
        </a>
      </div>
    </article>
  );
}

function InquireCTA() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "3rem",
        border: "1px solid rgba(212,175,55,0.1)",
        background: "rgba(212,175,55,0.02)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(24px)",
        transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          color: "#888",
          fontSize: "0.9rem",
          letterSpacing: "0.05em",
          marginBottom: "1.25rem",
        }}
      >
        Have a specific project or collaboration in mind?
      </p>
      <a
        href="#contact"
        style={{
          display: "inline-block",
          padding: "15px 40px",
          background: "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)",
          color: "#0B0B0B",
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "opacity 0.25s ease",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
        }
      >
        Inquire for Private Booking
      </a>
    </div>
  );
}

function CameraIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 7l-7 5 7 5V7z"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  );
}

function CoachIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  );
}
