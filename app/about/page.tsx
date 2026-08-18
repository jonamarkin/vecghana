import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Heart,
  Sparkles,
  Award,
  Users,
  Mic2,
  Music,
  Volume2,
} from "lucide-react";
import { milestones } from "@/data/milestones";

export const metadata: Metadata = {
  title: "About Us | VocalEssence Chorale Ghana",
  description:
    "Discover the founding story, mission, vocal sections, and 13+ year timeline of VocalEssence Chorale Ghana.",
};

export default function AboutPage() {
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
          <div className="badge-pill">Who We Are</div>
          <h1>A Legacy of Faith, Artistry & Community</h1>
          <p>
            From humble beginnings in Dansoman, Accra to continental stages across Africa, discover the heart, history, and people behind VocalEssence Chorale Ghana.
          </p>
        </div>
      </section>

      {/* Story & Founding */}
      <section style={{ padding: "4rem 0" }} className="reveal-on-scroll">
        <div className="container">
          <div className="essence-layout">
            <div className="essence-img-box">
              <Image
                src="/images/choir-6.jpg"
                alt="VocalEssence Chorale Story"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="essence-content-box">
              <div className="badge-pill">Our Story</div>
              <h2>Founded on Faith & Choral Artistry</h2>
              <p>
                In 2013, a circle of devoted young choristers in Dansoman, Accra, came together bound by a shared conviction: that choral music could be elevated into a vibrant, soul-stirring vehicle for Christian worship, Ghanaian cultural preservation, and world-class artistic excellence.
              </p>
              <p>
                Over the past 13+ years, VocalEssence Chorale has staged dozens of acclaimed concert productions, represented Ghana at international festivals, released 6 studio and live albums, and spearheaded life-changing philanthropic initiatives.
              </p>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                <Link href="/music" className="btn btn-primary">
                  Explore Music
                </Link>
                <Link href="/contact" className="btn btn-outline-dark">
                  Book the Choir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--color-surface-soft)", borderTop: "1px solid var(--color-border-light)", borderBottom: "1px solid var(--color-border-light)" }} className="reveal-on-scroll">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem" }}>
            <div className="badge-pill">Our Pillars</div>
            <h2>Mission, Vision & Core Values</h2>
            <p>The foundational anchors that guide every rehearsal, anthem, and ministration.</p>
          </div>

          <div className="voice-four-grid">
            <div className="voice-clean-card reveal-on-scroll reveal-delay-1">
              <div className="voice-clean-icon">
                <Heart size={22} />
              </div>
              <h4>Our Mission</h4>
              <p>
                To inspire, impact, and ignite a profound passion for Christ through choral excellence, bridging indigenous African rhythms with classical choral traditions.
              </p>
            </div>

            <div className="voice-clean-card reveal-on-scroll reveal-delay-2">
              <div className="voice-clean-icon">
                <Sparkles size={22} />
              </div>
              <h4>Our Vision</h4>
              <p>
                To be West Africa&apos;s premier choral brand, recognized globally for musical mastery, spiritual authenticity, and compassionate community impact.
              </p>
            </div>

            <div className="voice-clean-card reveal-on-scroll reveal-delay-3">
              <div className="voice-clean-icon">
                <Award size={22} />
              </div>
              <h4>Excellence</h4>
              <p>
                Uncompromising dedication to pitch accuracy, dynamic nuance, diction, and vocal artistry in every performance and studio recording.
              </p>
            </div>

            <div className="voice-clean-card reveal-on-scroll reveal-delay-4">
              <div className="voice-clean-icon">
                <Users size={22} />
              </div>
              <h4>Fellowship</h4>
              <p>
                A close-knit family of believers united in prayer, mutual growth, and selfless service to our church, nation, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vocal Sections & Orchestra */}
      <section style={{ padding: "4.5rem 0" }} className="reveal-on-scroll">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem" }}>
            <div className="badge-pill">Choral Anatomy</div>
            <h2>The Four Vocal Sections & Orchestra</h2>
            <p>Our harmonious sound is engineered by five specialized performance sections.</p>
          </div>

          <div className="voice-four-grid">
            <div className="voice-clean-card reveal-on-scroll reveal-delay-1">
              <div className="voice-clean-icon"><Mic2 size={22} /></div>
              <h4>Sopranos</h4>
              <p>Luminous, crystalline high registers that soar with expressive brilliance and vocal clarity.</p>
            </div>

            <div className="voice-clean-card reveal-on-scroll reveal-delay-2">
              <div className="voice-clean-icon"><Music size={22} /></div>
              <h4>Altos</h4>
              <p>Warm, velvety, and resonant harmonic foundation delivering rich mid-range color.</p>
            </div>

            <div className="voice-clean-card reveal-on-scroll reveal-delay-3">
              <div className="voice-clean-icon"><Sparkles size={22} /></div>
              <h4>Tenors</h4>
              <p>Dynamic, melodic, and powerful upper-range passion bringing vibrant energy to every piece.</p>
            </div>

            <div className="voice-clean-card reveal-on-scroll reveal-delay-4">
              <div className="voice-clean-icon"><Volume2 size={22} /></div>
              <h4>Basses</h4>
              <p>Deep, commanding, and grounded sonic bedrock anchor that solidifies our four-part harmony.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--color-surface-soft)", borderTop: "1px solid var(--color-border-light)" }} className="reveal-on-scroll">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 2.5rem" }}>
            <div className="badge-pill">Our Journey</div>
            <h2>13+ Years of Choral Milestones</h2>
            <p>A look at key moments that have shaped the growth and legacy of VocalEssence Chorale Ghana.</p>
          </div>

          <div className="timeline-clean">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-clean-item reveal-on-scroll">
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
      <section className="impact-banner-section reveal-on-scroll">
        <div className="container">
          <div className="impact-banner-card">
            <div className="impact-banner-bg">
              <Image
                src="/images/choir-1.jpg"
                alt="Book VocalEssence"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content">
              <div className="badge-pill dark">Work With Us</div>
              <h2>Experience the VocalEssence Sound</h2>
              <p>
                Invite our ensemble for your church ministration, wedding ceremony, or corporate gala.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Request a Booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
