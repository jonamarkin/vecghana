import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone } from "lucide-react";

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
          <div className="badge-pill">Philanthropy & Outreach</div>
          <h1>Music That Changes Lives</h1>
          <p>
            At VocalEssence Chorale, our ministry extends far beyond the concert stage. Through strategic partnerships and benevolence, we channel our musical giftings to heal hearts and restore hope.
          </p>
        </div>
      </section>

      {/* Saving Hearts Project Feature */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="impact-banner-card" style={{ marginBottom: "4rem" }}>
            <div className="impact-banner-bg">
              <Image
                src="/images/choir-4.jpg"
                alt="The Saving Hearts Project"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content" style={{ maxWidth: "620px" }}>
              <div className="badge-pill dark">
                Flagship Charity Initiative
              </div>
              <h2>The Saving Hearts Project</h2>
              <p>
                In commemoration of our 10th Anniversary, VocalEssence Chorale Ghana officially partnered with the <strong>National Cardiothoracic Centre</strong> and the <strong>Children&apos;s Block at the Korle Bu Teaching Hospital</strong> to sponsor life-saving open-heart surgeries for children with congenital heart defects.
              </p>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Partner With Us
                </Link>
                <a href="tel:+233200079728" className="btn btn-outline-white">
                  <Phone size={15} /> Speak to Secretariat
                </a>
              </div>
            </div>
          </div>

          {/* Three Outreach Pillars */}
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem" }}>
            <div className="badge-pill">Benevolence Pillars</div>
            <h2>How We Serve Our Community</h2>
            <p>Guided by Christ&apos;s love, our choir actively engages in regular benevolence and community support.</p>
          </div>

          <div className="voice-four-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="voice-clean-card">
              <h4>Pediatric Ward Visits</h4>
              <p>
                Regular hospital visits to pediatric wards at Korle Bu, bringing uplifting hymns, prayer ministrations, provisions, and direct medical bill relief.
              </p>
            </div>

            <div className="voice-clean-card">
              <h4>Support for Widows</h4>
              <p>
                Annual welfare care packages, food supplies, and financial relief for vulnerable widows during Easter and Christmas seasons.
              </p>
            </div>

            <div className="voice-clean-card">
              <h4>Orphanage Outreach</h4>
              <p>
                Educational materials, clothing donations, and interactive choral music workshops for children in foster homes and orphanages.
              </p>
            </div>
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
