"use client";

import { useInView } from "@/hooks/useInView";

const PRICING_URL = "https://la-maison-de-la-masse-dubai.gymdesk.com/pricing";

const COACHING_PLANS = [
  { sessions: 1, price: "1,600", perSession: "400", popular: false },
  { sessions: 2, price: "3,040", perSession: "380", popular: false },
  { sessions: 3, price: "4,380", perSession: "365", popular: true },
  { sessions: 4, price: "5,600", perSession: "350", popular: false },
  { sessions: 5, price: "6,600", perSession: "330", popular: false },
];

const SPECIAL_PLANS = [
  {
    label: "Pack",
    name: "10 Sessions",
    price: "4,000",
    period: "one-time",
    note: "400 AED / session",
    badge: null,
    highlight: false,
  },
  {
    label: "Pack",
    name: "20 Sessions",
    price: "7,000",
    period: "valid 6 months",
    note: "350 AED / session",
    badge: "Best Value",
    highlight: true,
  },
  {
    label: "Online",
    name: "Online Coaching",
    price: "1,000",
    period: "/ month",
    note: "Unlimited access",
    badge: null,
    highlight: false,
  },
];

export default function Pricing() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{ background: "#090909", padding: "7rem 0" }}
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
          {/* "Train Now Pay Later" badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              border: "1px solid rgba(212,175,55,0.3)",
              background: "rgba(212,175,55,0.05)",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#D4AF37",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#D4AF37",
                fontSize: "10px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                fontWeight: 600,
              }}
            >
              Train Now, Pay Later — Available
            </span>
          </div>

          <div className="section-label">
            <div
              className="section-label-line"
              style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }}
            />
            <span className="section-label-text">Membership</span>
            <div
              className="section-label-line"
              style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}
            />
          </div>

          <h2
            id="pricing-heading"
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
            Invest in Your{" "}
            <span className="gold-text">Transformation</span>
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
            Flexible coaching plans tailored to your frequency. Every session
            delivered at the highest level.
          </p>
        </div>

        {/* Monthly Coaching Plans */}
        <CoachingGrid />

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            margin: "4rem 0",
          }}
        >
          <div
            style={{ flex: 1, height: "1px", background: "rgba(212,175,55,0.1)" }}
          />
          <span
            style={{
              color: "#555",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              whiteSpace: "nowrap",
            }}
          >
            Special Packages
          </span>
          <div
            style={{ flex: 1, height: "1px", background: "rgba(212,175,55,0.1)" }}
          />
        </div>

        {/* Special plans */}
        <SpecialGrid />

        {/* Footer note */}
        <PricingFooter />
      </div>
    </section>
  );
}

function CoachingGrid() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(28px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {COACHING_PLANS.map((plan) => (
        <CoachingCard key={plan.sessions} plan={plan} />
      ))}
    </div>
  );
}

function CoachingCard({ plan }: { plan: (typeof COACHING_PLANS)[0] }) {
  return (
    <div
      style={{
        position: "relative",
        padding: plan.popular ? "2rem 1.5rem 1.75rem" : "1.75rem 1.5rem",
        background: plan.popular ? "#141414" : "#111111",
        border: plan.popular
          ? "1px solid rgba(212,175,55,0.45)"
          : "1px solid rgba(212,175,55,0.1)",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        boxShadow: plan.popular ? "0 0 60px rgba(212,175,55,0.05)" : "none",
      }}
      onMouseEnter={(e) => {
        if (!plan.popular)
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(212,175,55,0.35)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        if (!plan.popular)
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(212,175,55,0.1)";
        (e.currentTarget as HTMLDivElement).style.transform = "none";
      }}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)",
            color: "#0B0B0B",
            fontSize: "9px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            padding: "4px 14px",
            whiteSpace: "nowrap",
          }}
        >
          Most Popular
        </div>
      )}

      {/* Sessions per week */}
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: plan.popular ? "#D4AF37" : "#555",
          marginBottom: "1.25rem",
          paddingTop: plan.popular ? "0.5rem" : 0,
        }}
      >
        {plan.sessions}×&nbsp;/ week
      </div>

      {/* Price */}
      <div style={{ marginBottom: "0.375rem" }}>
        <span
          style={{
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            fontSize: "1.75rem",
            color: plan.popular ? "#D4AF37" : "#fff",
            letterSpacing: "-0.03em",
          }}
        >
          د.إ{plan.price}
        </span>
      </div>

      <div
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          fontSize: "11px",
          color: "#555",
          marginBottom: "1.5rem",
          fontWeight: 300,
        }}
      >
        / month
      </div>

      {/* Per session cost */}
      <div
        style={{
          padding: "6px 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          marginBottom: "1.5rem",
          fontFamily: "var(--font-inter, sans-serif)",
          fontSize: "11.5px",
          color: "#888",
          textAlign: "center",
        }}
      >
        {plan.perSession} AED / session
      </div>

      <a
        href={PRICING_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textAlign: "center",
          padding: "11px",
          background: plan.popular
            ? "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)"
            : "transparent",
          border: plan.popular
            ? "none"
            : "1px solid rgba(212,175,55,0.25)",
          color: plan.popular ? "#0B0B0B" : "#D4AF37",
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          fontWeight: plan.popular ? 700 : 500,
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
        }
      >
        Select
      </a>
    </div>
  );
}

function SpecialGrid() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(28px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {SPECIAL_PLANS.map((plan) => (
        <SpecialCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
}

function SpecialCard({ plan }: { plan: (typeof SPECIAL_PLANS)[0] }) {
  return (
    <div
      style={{
        position: "relative",
        padding: "2.25rem",
        background: plan.highlight ? "#141414" : "#111111",
        border: plan.highlight
          ? "1px solid rgba(212,175,55,0.4)"
          : "1px solid rgba(212,175,55,0.1)",
        transition: "border-color 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        if (!plan.highlight)
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(212,175,55,0.35)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        if (!plan.highlight)
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(212,175,55,0.1)";
        (e.currentTarget as HTMLDivElement).style.transform = "none";
      }}
    >
      {plan.badge && (
        <span
          style={{
            display: "inline-block",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#0B0B0B",
            background: "linear-gradient(135deg, #D4AF37, #B8960C)",
            padding: "4px 12px",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            marginBottom: "1.25rem",
          }}
        >
          {plan.badge}
        </span>
      )}

      <div
        style={{
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: plan.highlight ? "#D4AF37" : "#555",
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          marginBottom: "0.75rem",
          marginTop: plan.badge ? 0 : "1.25rem",
        }}
      >
        {plan.label}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          fontWeight: 600,
          fontSize: "1.15rem",
          color: "#fff",
          marginBottom: "1.25rem",
        }}
      >
        {plan.name}
      </h3>

      <div style={{ marginBottom: "0.25rem" }}>
        <span
          style={{
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            fontSize: "2.25rem",
            color: plan.highlight ? "#D4AF37" : "#fff",
            letterSpacing: "-0.03em",
          }}
        >
          د.إ{plan.price}
        </span>
      </div>

      <div
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          fontSize: "11.5px",
          color: "#555",
          marginBottom: "0.625rem",
          fontWeight: 300,
        }}
      >
        {plan.period}
      </div>

      <div
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          fontSize: "11.5px",
          color: "#888",
          marginBottom: "2rem",
        }}
      >
        {plan.note}
      </div>

      <a
        href={PRICING_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textAlign: "center",
          padding: "13px",
          background: plan.highlight
            ? "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)"
            : "transparent",
          border: plan.highlight
            ? "none"
            : "1px solid rgba(212,175,55,0.25)",
          color: plan.highlight ? "#0B0B0B" : "#D4AF37",
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          fontWeight: plan.highlight ? 700 : 500,
          fontSize: "10.5px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
        }
      >
        Select Plan
      </a>
    </div>
  );
}

function PricingFooter() {
  const { ref, inView } = useInView();

  return (
    <p
      ref={ref}
      style={{
        textAlign: "center",
        color: "#444",
        fontSize: "0.875rem",
        fontFamily: "var(--font-inter, sans-serif)",
        fontWeight: 300,
        marginTop: "3rem",
        opacity: inView ? 1 : 0,
        transition: "opacity 0.8s ease 0.2s",
      }}
    >
      All prices in UAE Dirham (AED). No hidden fees.{" "}
      <a
        href={PRICING_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#D4AF37",
          textDecoration: "none",
          borderBottom: "1px solid rgba(212,175,55,0.3)",
        }}
      >
        View full pricing details →
      </a>
    </p>
  );
}
