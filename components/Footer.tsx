"use client";

import { useState, FormEvent } from "react";
import { useInView } from "@/hooks/useInView";

const NAV_LINKS = [
  { label: "The Concept", href: "#concept" },
  { label: "Amenities", href: "#amenities" },
  { label: "For Professionals", href: "#b2b" },
  { label: "Membership", href: "#pricing" },
];

export default function Footer() {
  return (
    <>
      <ContactSection />
      <FooterBottom />
    </>
  );
}

function ContactSection() {
  const { ref: leftRef, inView: leftInView } = useInView();
  const { ref: rightRef, inView: rightInView } = useInView();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ background: "#0A0A0A", padding: "7rem 0 0" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="section-label">
            <div
              className="section-label-line"
              style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }}
            />
            <span className="section-label-text">Get in Touch</span>
            <div
              className="section-label-line"
              style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}
            />
          </div>

          <h2
            id="contact-heading"
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
            Ready to Begin Your{" "}
            <span className="gold-text">Journey?</span>
          </h2>

          <p
            style={{
              color: "#666",
              maxWidth: "460px",
              margin: "0 auto",
              fontSize: "1rem",
              lineHeight: 1.75,
              fontFamily: "var(--font-inter, sans-serif)",
              fontWeight: 300,
            }}
          >
            Reach out directly or fill in the form below. We respond to every
            inquiry within 24 hours.
          </p>
        </div>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            paddingBottom: "5rem",
          }}
        >
          {/* Left — contact info */}
          <div
            ref={leftRef}
            style={{
              opacity: leftInView ? 1 : 0,
              transform: leftInView ? "none" : "translateY(28px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Brand */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#fff",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                La Maison{" "}
                <span className="gold-text">de la Masse</span>
              </div>
              <p
                style={{
                  color: "#555",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-inter, sans-serif)",
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                }}
              >
                Dubai's Largest Private Gym
              </p>
            </div>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                {
                  icon: <PhoneIcon />,
                  label: "Phone",
                  value: "+971 58 671 0670",
                  href: "tel:+971586710670",
                },
                {
                  icon: <MailIcon />,
                  label: "Email",
                  value: "lamaisondelamasse.dubai@gmail.com",
                  href: "mailto:lamaisondelamasse.dubai@gmail.com",
                },
                {
                  icon: <LocationIcon />,
                  label: "Location",
                  value: "ABA Avenue, Dubai, AE",
                  href: "https://maps.google.com/?q=ABA+Avenue+Dubai",
                },
                {
                  icon: <InstagramIcon />,
                  label: "Instagram",
                  value: "@lamaisondelamasse",
                  href: "https://www.instagram.com/lamaisondelamasse",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.875rem",
                    textDecoration: "none",
                    color: "#888",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#888")
                  }
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: "1px",
                      color: "#D4AF37",
                      opacity: 0.7,
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "9.5px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#555",
                        fontFamily: "var(--font-space-grotesk, sans-serif)",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-inter, sans-serif)",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              style={{
                marginTop: "2.5rem",
                height: "160px",
                background: "#111",
                border: "1px solid rgba(212,175,55,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <LocationIcon />
              <a
                href="https://maps.google.com/?q=ABA+Avenue+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-space-grotesk, sans-serif)",
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                  textDecoration: "none",
                  opacity: 0.7,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <div
            ref={rightRef}
            style={{
              opacity: rightInView ? 1 : 0,
              transform: rightInView ? "none" : "translateY(28px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", interest: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 2rem",
          border: "1px solid rgba(212,175,55,0.2)",
          background: "rgba(212,175,55,0.02)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            border: "1px solid rgba(212,175,55,0.4)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
            color: "#D4AF37",
          }}
        >
          <CheckIcon />
        </div>
        <h3
          style={{
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 600,
            fontSize: "1.25rem",
            color: "#fff",
            marginBottom: "0.75rem",
          }}
        >
          Message Received
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            color: "#666",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            maxWidth: "300px",
          }}
        >
          We&apos;ll reach out to you within 24 hours to discuss your goals
          and arrange your first session.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.125rem",
        }}
      >
        {[
          { id: "name", label: "Full Name", type: "text", placeholder: "John Smith", key: "name" as const },
          { id: "email", label: "Email Address", type: "email", placeholder: "john@email.com", key: "email" as const },
        ].map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              style={labelStyle}
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              required
              value={form[field.key]}
              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
              placeholder={field.placeholder}
              style={inputStyle}
              onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(212,175,55,0.5)")}
              onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.07)")}
            />
          </div>
        ))}

        <div>
          <label htmlFor="interest" style={labelStyle}>
            I&apos;m interested in
          </label>
          <select
            id="interest"
            required
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
            style={{
              ...inputStyle,
              appearance: "none",
              WebkitAppearance: "none",
            }}
            onFocus={(e) => ((e.target as HTMLSelectElement).style.borderColor = "rgba(212,175,55,0.5)")}
            onBlur={(e) => ((e.target as HTMLSelectElement).style.borderColor = "rgba(255,255,255,0.07)")}
          >
            <option value="" style={{ background: "#111" }}>Select an option</option>
            <option style={{ background: "#111" }}>Personal Coaching</option>
            <option style={{ background: "#111" }}>Private Gym Membership</option>
            <option style={{ background: "#111" }}>Content Creator Booking</option>
            <option style={{ background: "#111" }}>Freelance Coach Partnership</option>
            <option style={{ background: "#111" }}>Online Coaching</option>
            <option style={{ background: "#111" }}>Session Packs</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>
            Message <span style={{ color: "#555" }}>(optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your goals, current level, or any specific questions..."
            style={{
              ...inputStyle,
              resize: "none",
            }}
            onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "rgba(212,175,55,0.5)")}
            onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.07)")}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            padding: "17px",
            background:
              status === "sending"
                ? "rgba(212,175,55,0.5)"
                : "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)",
            color: "#0B0B0B",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            border: "none",
            cursor: status === "sending" ? "not-allowed" : "pointer",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            if (status !== "sending")
              (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
          }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

function FooterBottom() {
  return (
    <footer
      style={{
        background: "#070707",
        borderTop: "1px solid rgba(212,175,55,0.07)",
        padding: "2.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "1.75rem",
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#444",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#888")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#444")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "11px",
            color: "#333",
            letterSpacing: "0.08em",
            fontWeight: 300,
          }}
        >
          © {new Date().getFullYear()} La Maison de la Masse. ABA Avenue, Dubai.
        </p>

        {/* Social */}
        <a
          href="https://www.instagram.com/lamaisondelamasse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @lamaisondelamasse"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#444",
            textDecoration: "none",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#444")
          }
        >
          <InstagramIcon />
          @lamaisondelamasse
        </a>
      </div>
    </footer>
  );
}

/* ─── Styles ─── */
const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-space-grotesk, sans-serif)",
  fontSize: "10px",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "#666",
  marginBottom: "8px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  background: "#111",
  border: "1px solid rgba(255,255,255,0.07)",
  color: "#fff",
  fontFamily: "var(--font-inter, sans-serif)",
  fontSize: "14px",
  fontWeight: 300,
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};

/* ─── SVG Icons ─── */
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
