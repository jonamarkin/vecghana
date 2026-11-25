import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { events, upcomingConcert } from "@/data/events";

export const metadata: Metadata = {
  title: "Concerts & Tours | Christmas in Africa (Feliz Navidad XIII) & Global Stages",
  description:
    "Join VocalEssence Chorale Ghana for Christmas in Africa (Feliz Navidad XIII) on Friday, 4th December 2026 at Victory Bible Church Int., Awoshie Baah Yard at 5:00 PM. Free Entry.",
  alternates: {
    canonical: "https://vecghana.com/events",
  },
  openGraph: {
    title: "Christmas in Africa (Feliz Navidad XIII) | VocalEssence Chorale Ghana",
    description:
      "Experience the warmth, rhythm, and harmony of the season at Christmas in Africa (Feliz Navidad XIII) on Friday, 4th December 2026 at Victory Bible Church Int., Awoshie Baah Yard. Free Entry.",
    url: "https://vecghana.com/events",
    images: ["https://vecghana.com/images/feliz-navidad-xiii-landscape.jpg"],
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
            From our annual flagship Feliz Navidad concert series to representing Ghana on continental stages across Africa, witness our vibrant performance history and upcoming productions.
          </p>
        </div>
      </section>

      {/* Upcoming Flagship Concert */}
      <section id="feliz-navidad-xiii" style={{ padding: "3.5rem 0 1rem" }}>
        <div className="container">
          <div style={{ marginBottom: "1.75rem" }}>
            <div className="badge-pill">Next Live Production</div>
            <h2>Upcoming Concert</h2>
          </div>

          <div className="upcoming-concert-card" style={{ marginBottom: "3.5rem" }}>
            <div className="upcoming-concert-grid">
              <div className="upcoming-poster-wrap">
                <Image
                  src={upcomingConcert.portraitImage || upcomingConcert.image}
                  alt={upcomingConcert.title}
                  fill
                  priority
                  sizes="(max-width: 860px) 90vw, 380px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="upcoming-concert-body">
                <div className="badge-pill">{upcomingConcert.badge}</div>
                <h2>{upcomingConcert.title}</h2>
                {upcomingConcert.subtitle && (
                  <p className="upcoming-concert-lead">{upcomingConcert.subtitle}</p>
                )}
                <p className="upcoming-concert-desc">{upcomingConcert.description}</p>
                {upcomingConcert.extraDescription && (
                  <p className="upcoming-concert-desc">{upcomingConcert.extraDescription}</p>
                )}

                <div className="upcoming-details-list">
                  <div className="upcoming-detail-row">
                    <div className="upcoming-detail-icon">
                      <Calendar size={16} />
                    </div>
                    <div className="upcoming-detail-text">
                      <span className="upcoming-detail-label">Date</span>
                      <span className="upcoming-detail-value">{upcomingConcert.dateInfo}</span>
                    </div>
                  </div>
                  <div className="upcoming-detail-row">
                    <div className="upcoming-detail-icon">
                      <Clock size={16} />
                    </div>
                    <div className="upcoming-detail-text">
                      <span className="upcoming-detail-label">Time</span>
                      <span className="upcoming-detail-value">{upcomingConcert.timeInfo}</span>
                    </div>
                  </div>
                  <div className="upcoming-detail-row">
                    <div className="upcoming-detail-icon">
                      <MapPin size={16} />
                    </div>
                    <div className="upcoming-detail-text">
                      <span className="upcoming-detail-label">Venue</span>
                      <span className="upcoming-detail-value">{upcomingConcert.location}</span>
                    </div>
                  </div>
                  <div className="upcoming-detail-row">
                    <div className="upcoming-detail-icon">
                      <Ticket size={16} />
                    </div>
                    <div className="upcoming-detail-text">
                      <span className="upcoming-detail-label">Entry</span>
                      <span className="upcoming-detail-value">{upcomingConcert.admission}</span>
                    </div>
                  </div>
                </div>

                {upcomingConcert.links && (
                  <div className="upcoming-concert-actions">
                    <a
                      href={upcomingConcert.links.primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      {upcomingConcert.links.primaryText} <ArrowRight size={15} />
                    </a>
                    {upcomingConcert.links.secondaryText && upcomingConcert.links.secondaryUrl && (
                      <Link
                        href={upcomingConcert.links.secondaryUrl}
                        className="btn btn-outline-dark"
                      >
                        {upcomingConcert.links.secondaryText}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Wide Landscape Banner Preview */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              marginBottom: "4rem",
              border: "1px solid var(--color-border)",
            }}
          >
            <Image
              src={upcomingConcert.image}
              alt="Christmas in Africa (Feliz Navidad XIII) Official Landscape Banner"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Continental Tour Spotlight */}
          <div style={{ marginBottom: "1.75rem" }}>
            <div className="badge-pill">International Representation</div>
            <h2>Continental Tour Highlight</h2>
          </div>

          <div className="impact-banner-card" style={{ marginBottom: "4rem" }}>
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
                Continental Representation
              </div>
              <h2>7th Africa Sings Festival | Cotonou, Benin</h2>
              <p>
                From October 11–15, 2023, VocalEssence Chorale Ghana proudly represented our nation at the 7th Edition of the Africa Sings Festival in Cotonou, Republic of Benin, showcasing the richness of Ghanaian choral highlife to international delegates.
              </p>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                <a
                  href="https://www.tiktok.com/@vecghana/video/7289724643567602950"
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
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="badge-pill">Annual Productions</div>
            <h2>Signature Concert Series</h2>
          </div>

          <div>
            {events.slice(2).map((event) => (
              <div key={event.id} className="event-clean-card">
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
                    {event.badge}
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
      <section className="impact-banner-section">
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
