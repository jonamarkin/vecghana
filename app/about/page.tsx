import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { milestones } from "@/data/milestones";
import { aboutContent } from "@/data/aboutContent";

export const metadata: Metadata = {
  title: "About Us | Our Story, Mission & Vocal Sections",
  description:
    "Discover the founding story of VocalEssence Chorale Ghana in Dansoman (2013), our mission, 4 vocal sections, live orchestra, and 13+ year milestone timeline.",
  alternates: {
    canonical: "https://vecghana.com/about",
  },
  openGraph: {
    title: "About Us | VocalEssence Chorale Ghana",
    description:
      "A community built on faith, excellence, and love. Learn about our founding story, mission, vocal sections, and musical journey.",
    url: "https://vecghana.com/about",
    images: ["https://vecghana.com/images/choir-6.jpg"],
  },
};

export default function AboutPage() {
  const { header, story, pillars, sections, timelineHeader, ctaBanner } = aboutContent;

  return (
    <>
      {/* Subpage Header */}
      <section className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div className="breadcrumb-clean">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>About Us</span>
          </div>
          <div className="badge-pill">{header.badge}</div>
          <h1>{header.title}</h1>
          <p>{header.description}</p>
        </div>
      </section>

      {/* Story & Founding */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="essence-layout">
            <div className="essence-img-box">
              <Image
                src={story.image.src}
                alt={story.image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="essence-content-box">
              <div className="badge-pill">{story.badge}</div>
              <h2>{story.title}</h2>
              {story.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                <Link href={story.exploreMusicHref} className="btn btn-primary">
                  Explore Music
                </Link>
                <Link href={story.bookChoirHref} className="btn btn-outline-dark">
                  Book the Choir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--color-surface-soft)", borderTop: "1px solid var(--color-border-light)", borderBottom: "1px solid var(--color-border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem" }}>
            <div className="badge-pill">{pillars.badge}</div>
            <h2>{pillars.title}</h2>
            <p>{pillars.subtitle}</p>
          </div>

          <div className="voice-four-grid">
            {pillars.items.map((item, idx) => (
              <div key={idx} className="voice-clean-card">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vocal Sections & Orchestra */}
      <section style={{ padding: "4.5rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem" }}>
            <div className="badge-pill">{sections.badge}</div>
            <h2>{sections.title}</h2>
            <p>{sections.subtitle}</p>
          </div>

          <div className="voice-four-grid">
            {sections.items.map((sec, idx) => (
              <div key={idx} className="voice-clean-card">
                <h4>{sec.name}</h4>
                <p>{sec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--color-surface-soft)", borderTop: "1px solid var(--color-border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 2.5rem" }}>
            <div className="badge-pill">{timelineHeader.badge}</div>
            <h2>{timelineHeader.title}</h2>
            <p>{timelineHeader.subtitle}</p>
          </div>

          <div className="timeline-clean">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-clean-item">
                <div className="timeline-clean-dot"></div>
                <span className="timeline-clean-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
                src={ctaBanner.image.src}
                alt={ctaBanner.image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content">
              <div className="badge-pill dark">{ctaBanner.badge}</div>
              <h2>{ctaBanner.title}</h2>
              <p>{ctaBanner.description}</p>
              <Link href={ctaBanner.buttonHref} className="btn btn-primary">
                {ctaBanner.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
