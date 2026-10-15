import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone } from "lucide-react";
import { impactContent } from "@/data/impactContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Our Impact | Saving Hearts Project & Philanthropy",
  description:
    "Learn about the Saving Hearts Project by VocalEssence Chorale Ghana in partnership with the National Cardiothoracic Centre at Korle Bu, widow outreach, and community benevolence.",
  alternates: {
    canonical: "https://vecghana.com/impact",
  },
  openGraph: {
    title: "Our Impact & Philanthropy | VocalEssence Chorale Ghana",
    description:
      "Music that changes lives: sponsoring pediatric open-heart surgeries at Korle Bu, supporting widows, and caring for orphanages.",
    url: "https://vecghana.com/impact",
    images: ["https://vecghana.com/images/choir-4.jpg"],
  },
};

export default function ImpactPage() {
  const { header, flagship, pillars } = impactContent;

  return (
    <>
      {/* Subpage Header */}
      <section className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div className="breadcrumb-clean">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Our Impact</span>
          </div>
          <div className="badge-pill">{header.badge}</div>
          <h1>{header.title}</h1>
          <p>{header.description}</p>
        </div>
      </section>

      {/* Saving Hearts Project Feature */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="impact-banner-card" style={{ marginBottom: "4rem" }}>
            <div className="impact-banner-bg">
              <Image
                src={flagship.image.src}
                alt={flagship.image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content" style={{ maxWidth: "620px" }}>
              <div className="badge-pill dark">{flagship.badge}</div>
              <h2>{flagship.title}</h2>
              <p>{flagship.description}</p>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Partner With Us
                </Link>
                <a href={`tel:${siteConfig.contact.phone}`} className="btn btn-outline-white">
                  <Phone size={15} /> Speak to Secretariat
                </a>
              </div>
            </div>
          </div>

          {/* Three Outreach Pillars */}
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem" }}>
            <div className="badge-pill">{pillars.badge}</div>
            <h2>{pillars.title}</h2>
            <p>{pillars.subtitle}</p>
          </div>

          <div className="voice-four-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {pillars.items.map((item, idx) => (
              <div key={idx} className="voice-clean-card">
                <h4>{item.title}</h4>
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
                src="/images/choir-2.jpg"
                alt="Partner With Us"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content">
              <div className="badge-pill dark">Corporate & Individual Sponsorship</div>
              <h2>Partner With the Saving Hearts Project</h2>
              <p>
                Your corporate CSR partnership or individual gift can directly sponsor heart surgery for a child in urgent need.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Inquire About Philanthropy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
