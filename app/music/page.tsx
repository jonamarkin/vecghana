import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Music,
  Disc,
  Youtube,
  Play,
  Radio,
  Headphones,
} from "lucide-react";
import { albums } from "@/data/discography";

export const metadata: Metadata = {
  title: "Music & Discography | Albums, Highlife & Streaming",
  description:
    "Stream the official discography of VocalEssence Chorale Ghana: Ayeyi Ndwom, Harmony of a Decade, Carols from VEC, and Ghanaian choral highlife on Spotify, Apple Music, and YouTube.",
  alternates: {
    canonical: "https://vecghana.com/music",
  },
  openGraph: {
    title: "Music & Discography | VocalEssence Chorale Ghana",
    description:
      "Explore 6 studio and live albums from VocalEssence Chorale Ghana. Stream on Spotify, Apple Music, YouTube, and Boomplay.",
    url: "https://vecghana.com/music",
    images: ["https://vecghana.com/images/choir-1.jpg"],
  },
};

export default function MusicPage() {
  return (
    <>
      {/* Subpage Header */}
      <section className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div className="breadcrumb-clean">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Music & Discography</span>
          </div>
          <div className="badge-pill">Discography</div>
          <h1>Official Albums & Releases</h1>
          <p>
            Immerse yourself in our catalog of studio albums, live concert recordings, Ghanaian choral highlife medleys, and sacred anthems.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
            <a
              href="https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW"
              target="_blank"
              rel="noopener noreferrer"
              className="stream-pill spotify"
            >
              <Music size={15} /> Spotify Artist Page
            </a>
            <a
              href="https://music.apple.com/us/artist/vocalessence-chorale/1561470636"
              target="_blank"
              rel="noopener noreferrer"
              className="stream-pill apple"
            >
              <Disc size={15} /> Apple Music Page
            </a>
            <a
              href="https://www.youtube.com/@VocalEssenceChoraleGhana"
              target="_blank"
              rel="noopener noreferrer"
              className="stream-pill youtube"
            >
              <Youtube size={15} /> YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Album Catalog Grid */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="badge-pill">Album Catalog</div>
            <h2>Albums & Live Recordings</h2>
          </div>

          <div className="discography-three-grid">
            {albums.map((album) => (
              <div key={album.id} className="album-clean-card">
                <div className="album-clean-art">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <span className="album-clean-year">{album.year}</span>
                </div>
                <div className="album-clean-body">
                  <h3>{album.title}</h3>
                  <div className="album-clean-genre">{album.genre}</div>
                  <p className="album-clean-tracks">{album.tracksPreview}</p>
                  <div className="album-clean-actions">
                    <a
                      href={album.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ background: "#1DB954", borderColor: "#1DB954" }}
                    >
                      <Play size={14} /> Spotify
                    </a>
                    <a
                      href={album.appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm"
                    >
                      <Disc size={14} /> Apple Music
                    </a>
                    {album.youtubeUrl && (
                      <a
                        href={album.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm"
                      >
                        <Youtube size={14} /> YouTube
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Musical Styles & Repertoire */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--color-surface-soft)", borderTop: "1px solid var(--color-border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem" }}>
            <div className="badge-pill">Artistic Diversity</div>
            <h2>Our Musical Repertoire</h2>
            <p>VocalEssence Chorale performs a rich cross-section of choral literature.</p>
          </div>

          <div className="voice-four-grid">
            <div className="voice-clean-card">
              <h4>Ghanaian Highlife</h4>
              <p>Energetic indigenous choral medleys arranged in polyrhythmic African cadences.</p>
            </div>
            <div className="voice-clean-card">
              <h4>Sacred Hymnody</h4>
              <p>Traditional four-part classical hymns rendered with solemn reverence and beauty.</p>
            </div>
            <div className="voice-clean-card">
              <h4>Western Classical</h4>
              <p>Masterworks by Handel, Mozart, Bach, and classic choral oratorios.</p>
            </div>
            <div className="voice-clean-card">
              <h4>Contemporary Praise</h4>
              <p>Modern gospel and spirit-filled praise tailored for live concerts and conventions.</p>
            </div>
          </div>

          {/* Worldwide Distribution Banner */}
          <div style={{ marginTop: "3.5rem" }} className="impact-banner-card">
            <div className="impact-banner-overlay" style={{ background: "rgba(14, 14, 16, 0.96)" }}></div>
            <div className="impact-banner-content" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
              <div className="badge-pill dark" style={{ margin: "0 auto 1rem" }}>Worldwide Distribution</div>
              <h2>Available on All Streaming Platforms</h2>
              <p style={{ margin: "0 auto 2rem" }}>
                Listen to VocalEssence Chorale Ghana wherever you stream music. Search for <strong>&quot;VocalEssence Chorale&quot;</strong> across your favorite service:
              </p>
              <div style={{ display: "flex", gap: "0.65rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="https://open.spotify.com/artist/44LB81BhfbdhHJkogzbKyW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stream-pill spotify"
                  style={{ background: "#1DB954", color: "white", borderColor: "#1DB954" }}
                >
                  <Music size={15} /> Spotify
                </a>
                <a
                  href="https://music.apple.com/us/artist/vocalessence-chorale/1561470636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stream-pill apple"
                  style={{ background: "#FA243C", color: "white", borderColor: "#FA243C" }}
                >
                  <Disc size={15} /> Apple Music
                </a>
                <a
                  href="https://www.youtube.com/@VocalEssenceChoraleGhana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stream-pill youtube"
                  style={{ background: "#FF0000", color: "white", borderColor: "#FF0000" }}
                >
                  <Youtube size={15} /> YouTube Music
                </a>
                <span className="stream-pill" style={{ background: "rgba(255, 255, 255, 0.15)", color: "white", borderColor: "transparent" }}>
                  <Radio size={15} /> Boomplay
                </span>
                <span className="stream-pill" style={{ background: "rgba(255, 255, 255, 0.15)", color: "white", borderColor: "transparent" }}>
                  <Headphones size={15} /> Amazon Music
                </span>
                <span className="stream-pill" style={{ background: "rgba(255, 255, 255, 0.15)", color: "white", borderColor: "transparent" }}>
                  <Music size={15} /> Deezer
                </span>
                <span className="stream-pill" style={{ background: "rgba(255, 255, 255, 0.15)", color: "white", borderColor: "transparent" }}>
                  <Disc size={15} /> Tidal & Audiomack
                </span>
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
                src="/images/choir-7.jpg"
                alt="Feature VocalEssence"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content">
              <div className="badge-pill dark">Live Bookings</div>
              <h2>Feature VocalEssence at Your Next Event</h2>
              <p>
                Available for wedding celebrations, corporate banquets, state ceremonies, and choral collaborations.
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
