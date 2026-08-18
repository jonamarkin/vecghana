import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Music,
  Disc,
  Facebook,
  Instagram,
  Youtube,
  Video,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Book Us & Contact | Event Inquiries & Secretariat",
  description:
    "Official event booking inquiry form and direct contact directory for VocalEssence Chorale Ghana in Dansoman, Accra. Book the choir for weddings, concerts, and corporate galas.",
  alternates: {
    canonical: "https://vecghana.com/contact",
  },
  openGraph: {
    title: "Book Us & Contact | VocalEssence Chorale Ghana",
    description:
      "Partner with VocalEssence Chorale Ghana for weddings, church conventions, and state ceremonies. Contact our secretariat directly.",
    url: "https://vecghana.com/contact",
    images: ["https://vecghana.com/images/choir-3.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Subpage Header */}
      <section className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div className="breadcrumb-clean">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Book Us / Contact</span>
          </div>
          <div className="badge-pill">Connect & Bookings</div>
          <h1>Let&apos;s Create Something Memorable</h1>
          <p>
            Partner with VocalEssence Chorale Ghana for weddings, corporate galas, church conventions, and state ceremonies. Our management team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Booking & Info Section */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container contact-clean-grid">
          {/* Left Info Card */}
          <div className="contact-card-box">
            <div className="badge-pill">Direct Secretariat</div>
            <h3>Get In Touch</h3>
            <p>
              We welcome inquiries for event bookings, philanthropic partnerships, and choral collaborations.
            </p>

            <ul className="contact-items-list">
              <li className="contact-item-row">
                <div className="contact-item-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-item-text">
                  <strong>Phone / WhatsApp</strong>
                  <a href="tel:+233200079728">+233 20 007 9728</a>
                </div>
              </li>

              <li className="contact-item-row">
                <div className="contact-item-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-item-text">
                  <strong>Official Email</strong>
                  <a href="mailto:vocalessencechorale@gmail.com">vocalessencechorale@gmail.com</a>
                </div>
              </li>

              <li className="contact-item-row">
                <div className="contact-item-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-item-text">
                  <strong>Location</strong>
                  <span>Dansoman, Accra - Ghana</span>
                </div>
              </li>

              <li className="contact-item-row">
                <div className="contact-item-icon">
                  <Clock size={18} />
                </div>
                <div className="contact-item-text">
                  <strong>Rehearsal Times</strong>
                  <span>Thursdays & Saturdays (Dansoman)</span>
                </div>
              </li>
            </ul>

            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
              Official Streaming & Social:
            </div>
            <div className="footer-social-row">
              <a
                href="https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-main)", background: "white" }}
                aria-label="Spotify"
              >
                <Music size={15} />
              </a>
              <a
                href="https://music.apple.com/us/artist/vocalessence-chorale/1561470636"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-main)", background: "white" }}
                aria-label="Apple Music"
              >
                <Disc size={15} />
              </a>
              <a
                href="https://www.facebook.com/vecghana"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-main)", background: "white" }}
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/vocalessencechoraleghana/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-main)", background: "white" }}
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.youtube.com/@VocalEssenceChoraleGhana"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-main)", background: "white" }}
                aria-label="YouTube"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://www.tiktok.com/@vecghana"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-main)", background: "white" }}
                aria-label="TikTok"
              >
                <Video size={15} />
              </a>
            </div>
          </div>

          {/* Right Comprehensive Booking Form */}
          <BookingForm isCompact={false} />
        </div>
      </section>

      {/* Interactive FAQ Accordions */}
      <section style={{ padding: "4.5rem 0", backgroundColor: "var(--color-surface-soft)", borderTop: "1px solid var(--color-border-light)" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="badge-pill">Frequently Asked Questions</div>
            <h2>Booking Information & FAQs</h2>
            <p>Everything you need to know about engaging VocalEssence Chorale Ghana for your event.</p>
          </div>

          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
