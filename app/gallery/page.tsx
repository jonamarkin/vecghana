import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Youtube,
  Video,
  ArrowRight,
} from "lucide-react";
import GalleryViewer from "@/components/GalleryViewer";

export const metadata: Metadata = {
  title: "Photo & Video Gallery | VocalEssence Chorale Ghana",
  description:
    "Explore high-resolution concert photos, choir portraits, international tour moments, and video recordings of VocalEssence Chorale Ghana.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Subpage Header */}
      <section className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div className="breadcrumb-clean">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Photo & Video Gallery</span>
          </div>
          <div className="badge-pill">Visual Archives</div>
          <h1>Moments in Harmony</h1>
          <p>
            Relive moments of divine praise, authentic choral robes, live brass orchestrations, and continental tours through our photo and video archives.
          </p>
        </div>
      </section>

      {/* Main Filterable Gallery */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <GalleryViewer showFilters={true} />
        </div>
      </section>

      {/* Video Channels */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--color-surface-soft)", borderTop: "1px solid var(--color-border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem" }}>
            <div className="badge-pill">Video Channels</div>
            <h2>Watch VocalEssence in Action</h2>
            <p>Stream our live concert productions, behind-the-scenes rehearsals, and short clips online.</p>
          </div>

          <div className="discography-three-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="album-clean-card">
              <div className="album-clean-art" style={{ aspectRatio: "16/9" }}>
                <Image src="/images/choir-7.jpg" alt="YouTube Channel" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="album-clean-body">
                <h3>Official YouTube Channel</h3>
                <p className="album-clean-tracks">
                  Full-length concert recordings, multi-camera live performances, Easter cantatas, and official lyric videos.
                </p>
                <a
                  href="https://www.youtube.com/@VocalEssenceChoraleGhana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ background: "#FF0000", borderColor: "#FF0000", width: "fit-content" }}
                >
                  <Youtube size={15} /> Subscribe on YouTube <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="album-clean-card">
              <div className="album-clean-art" style={{ aspectRatio: "16/9" }}>
                <Image src="/images/choir-8.jpg" alt="TikTok Hub" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="album-clean-body">
                <h3>TikTok Video Hub (@vecghana)</h3>
                <p className="album-clean-tracks">
                  Viral rehearsal moments, vocal warm-ups, Africa Sings Benin highlights, and quick choral singing tips.
                </p>
                <a
                  href="https://www.tiktok.com/@vecghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ background: "#0E0E10", borderColor: "#0E0E10", width: "fit-content" }}
                >
                  <Video size={15} /> Follow on TikTok <ArrowRight size={14} />
                </a>
              </div>
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
                src="/images/choir-5.jpg"
                alt="Book VocalEssence"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content">
              <div className="badge-pill dark">Live Booking</div>
              <h2>Bring VocalEssence to Your Stage</h2>
              <p>
                Available for church anniversaries, state banquets, weddings, and choral productions.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Book For Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
