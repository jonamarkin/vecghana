import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Concerts & Tours | Africa Sings Benin & Feliz Navidad",
  description:
    "Explore past and upcoming concert productions by VocalEssence Chorale Ghana, including the 7th Africa Sings Festival in Benin, Feliz Navidad Christmas concerts, and Easter cantatas.",
  alternates: {
    canonical: "https://vecghana.com/events",
  },
  openGraph: {
    title: "Concerts & Tours | VocalEssence Chorale Ghana",
    description:
      "Witness our vibrant performance history: Africa Sings Benin 2023, Feliz Navidad series, and signature concert productions.",
    url: "https://vecghana.com/events",
    images: ["https://vecghana.com/images/choir-8.jpg"],
  },
};

export default function EventsPage() {
  return (
    <>
      {/* Subpage Header */}
      <section className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div className="breadcrumb-clean">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Events & Global Tours</span>
          </div>
          <div className="badge-pill">Concerts & Tours</div>
          <h1>Concerts & Global Stages</h1>
          <p>
            From our annual flagship Feliz Navidad concert series to representing Ghana on continental stages across Africa, witness our vibrant performance history.
          </p>
        </div>
      </section>

      {/* Featured Tour Spotlight */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="impact-banner-card reveal-on-scroll" style={{ marginBottom: "4rem" }}>
            <div className="impact-banner-bg">
              <Image
                src="/images/choir-8.jpg"
                alt="7th Africa Sings Festival in Benin"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content" style={{ maxWidth: "600px" }}>
              <div className="badge-pill dark">
                <Globe size={14} /> Continental Representation
              </div>
              <h2>7th Africa Sings Festival | Cotonou, Benin</h2>
              <p>
                From October 11–15, 2023, VocalEssence Chorale Ghana proudly represented our nation at the 7th Edition of the Africa Sings Festival in Cotonou, Republic of Benin, showcasing the richness of Ghanaian choral highlife to international delegates.
              </p>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                <a
                  href="https://www.tiktok.com/@vecghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Watch on TikTok
                </a>
                <Link href="/gallery" className="btn btn-outline-white">
                  View Tour Photos
                </Link>
              </div>
            </div>
          </div>

          {/* Signature Productions List */}
          <div style={{ marginBottom: "2.5rem" }} className="reveal-on-scroll">
            <div className="badge-pill">Annual Productions</div>
            <h2>Signature Concert Series</h2>
          </div>

          <div>
            {events.slice(1).map((event) => (
              <div key={event.id} className="event-clean-card reveal-on-scroll">
                <div className="event-clean-img">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="event-clean-body">
                  <div className="event-clean-badge">
                    <Sparkles size={13} /> {event.badge}
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  {event.links && (
                    <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                      <a
                        href={event.links.primaryUrl}
                        target={event.links.primaryUrl.startsWith("http") ? "_blank" : undefined}
                        rel={event.links.primaryUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="btn btn-primary btn-sm"
                      >
                        {event.links.primaryText} <ArrowRight size={14} />
                      </a>
                      {event.links.secondaryText && event.links.secondaryUrl && (
                        <Link
                          href={event.links.secondaryUrl}
                          className="btn btn-outline-dark btn-sm"
                        >
                          {event.links.secondaryText}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contained Bottom Banner */}
      <section className="impact-banner-section reveal-on-scroll">
        <div className="container">
          <div className="impact-banner-card">
            <div className="impact-banner-bg">
              <Image
                src="/images/choir-3.jpg"
                alt="Book VocalEssence"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content">
              <div className="badge-pill dark">Booking Availability</div>
              <h2>Book VocalEssence for Your Next Program</h2>
              <p>
                Available for church anniversaries, state banquets, weddings, and choral productions.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Schedule a Booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
