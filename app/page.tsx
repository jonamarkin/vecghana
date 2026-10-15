import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function HomePage() {
  const programs = [
    {
      title: "Worship & Concerts",
      desc: "Spirit-filled ministrations that inspire and uplift.",
      image: "/images/choir-7.jpg",
      link: "/events",
    },
    {
      title: "Outreach & Donations",
      desc: "Serving communities through acts of love and compassion.",
      image: "/images/choir-4.jpg",
      link: "/impact",
    },
    {
      title: "Workshops & Training",
      desc: "Raising and equipping the next generation.",
      image: "/images/choir-2.jpg",
      link: "/about",
    },
    {
      title: "Collaborations",
      desc: "Partnering with churches and organizations.",
      image: "/images/choir-8.jpg",
      link: "/events",
    },
    {
      title: "Recordings",
      desc: "Creating timeless music that spreads the message.",
      image: "/images/choir-9.jpg",
      link: "/music",
    },
  ];

  return (
    <>
      {/* 1. Hero Section: Balanced Modern Editorial */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="hero-editorial-grid">
            {/* Left: Editorial & Call to Action */}
            <div className="hero-editorial-left">
              <div className="badge-pill">EST. 2013 • VOCALESSENCE CHORALE</div>
              <h1 className="hero-editorial-title">
                In Harmony.<br />
                We Sing.
              </h1>
              <p className="hero-editorial-desc">
                A passionate community of voices spreading faith, cultural heritage, and choral excellence across Ghana and the world through inspiring sacred and highlife ministrations.
              </p>
              <div className="hero-editorial-actions">
                <Link href="/music" className="btn btn-primary">
                  Explore Music
                </Link>
                <Link href="/contact" className="btn btn-outline-dark">
                  Book Us
                </Link>
              </div>
              <div className="hero-editorial-stats">
                <div className="hero-stat-item">
                  <span className="hero-stat-val">13+</span>
                  <span className="hero-stat-lbl">Years</span>
                </div>
                <span className="hero-stat-divider" aria-hidden="true">•</span>
                <div className="hero-stat-item">
                  <span className="hero-stat-val">10+</span>
                  <span className="hero-stat-lbl">Albums</span>
                </div>
                <span className="hero-stat-divider" aria-hidden="true">•</span>
                <div className="hero-stat-item">
                  <span className="hero-stat-val">100+</span>
                  <span className="hero-stat-lbl">Choristers</span>
                </div>
              </div>
            </div>

            {/* Right: Framed Stage Photography + Floating Audio Pill */}
            <div className="hero-editorial-right">
              <div className="hero-stage-frame">
                <Image
                  src="/images/choir-1.jpg"
                  alt="VocalEssence Chorale Ghana performing live on stage in royal vestments"
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, (max-width: 1280px) 50vw, 620px"
                  style={{ objectFit: "cover" }}
                />
                <div className="hero-stage-vignette"></div>
                <Link
                  href="/music#ayeyi-ndwom"
                  className="hero-floating-audio"
                  aria-label="Listen to featured track Ayeyi Ndwom on Music page"
                >
                  <span className="hero-audio-play-badge">
                    <Play size={13} fill="currentColor" />
                  </span>
                  <div className="hero-audio-info">
                    <span className="hero-audio-tag">Featured Release</span>
                    <span className="hero-audio-song">Ayeyi Ndwom</span>
                  </div>
                  <ArrowRight size={14} className="hero-audio-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="who-grid">
            {/* Left Big Feature */}
            <div className="who-left-col">
              <div className="who-image-container">
                <Image
                  src="/images/choir-2.jpg"
                  alt="VocalEssence Chorale Fellowship"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="badge-pill">Who We Are</div>
              <div className="who-text-wrap">
                <div className="who-headline-wrap">
                  <h2>
                    A Community<br />
                    Built on Faith,<br />
                    Excellence & Love
                  </h2>
                </div>
                <div className="who-desc-wrap">
                  <p>
                    Founded with a vision to raise a generation of worshipers and ambassadors of Christ through excellence in choral music.
                  </p>
                  <p>
                    We use our music to make a positive and lasting difference in our communities and beyond.
                  </p>
                  <Link href="/about" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Mission & Vision Stack */}
            <div className="who-right-col">
              {/* Mission Card */}
              <div className="mission-card">
                <div className="mission-card-bg">
                  <Image
                    src="/images/choir-3.jpg"
                    alt="Our Mission"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="mission-card-overlay"></div>
                <div className="mission-card-content">
                  <h3>Our Mission</h3>
                  <p>
                    To glorify God, inspire hearts, and make a difference through the power of music.
                  </p>
                  <Link href="/about" className="btn-circle-arrow dark-card-arrow" aria-label="Our Mission">
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Vision Card */}
              <div className="vision-card">
                <div className="vision-card-bg">
                  <Image
                    src="/images/choir-5.jpg"
                    alt="Our Vision"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="mission-card-content">
                  <h3>Our Vision</h3>
                  <p>
                    To be a leading choir that impacts nations and transforms lives.
                  </p>
                  <Link href="/about" className="btn-circle-arrow dark-card-arrow" aria-label="Our Vision">
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar-grid">
            <div className="stat-box">
              <div className="stat-num">13+</div>
              <div className="stat-text">Years of Ministry</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">100+</div>
              <div className="stat-text">Performances</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">500+</div>
              <div className="stat-text">Voices Impacted</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">1</div>
              <div className="stat-text">Purpose</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">4M+</div>
              <div className="stat-text">Estimated Digital Streams</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">23K+</div>
              <div className="stat-text">Estimated Online Following</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Essence Section */}
      <section className="essence-section">
        <div className="container">
          <div className="essence-layout">
            <div className="essence-img-box">
              <Image
                src="/images/choir-6.jpg"
                alt="Harmony in Faith"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="essence-content-box">
              <div className="badge-pill">Our Essence</div>
              <h2>
                Harmony in Faith.<br />
                Excellence in Sound.
              </h2>
              <p>
                We blend rich harmonies with heartfelt worship, lifting voices that touch lives and glorify God. Every note we sing carries a message of hope, love, and transformation.
              </p>
              <Link href="/about" className="btn btn-primary">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. International Tour Spotlight (Africa Sings Benin 2023) */}
      <section style={{ padding: "1.5rem 0 4rem" }}>
        <div className="container">
          <div className="impact-banner-card">
            <div className="impact-banner-bg">
              <Image
                src="/images/choir-8.jpg"
                alt="Africa Sings Festival Cotonou Benin"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content" style={{ maxWidth: "640px" }}>
              <div className="badge-pill dark">
                International Tour Spotlight
              </div>
              <h2>7th Africa Sings Festival | Cotonou, Benin</h2>
              <p>
                From <strong>October 11–15, 2023</strong>, VocalEssence Chorale Ghana proudly represented our nation at the 7th Edition of the Africa Sings Festival in Cotonou, Benin — sharing African choral harmonies, magnifying faith, and celebrating cultural unity across the continent.
              </p>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                <Link href="/events" className="btn btn-primary">
                  Explore Tour Story
                </Link>
                <a
                  href="https://www.tiktok.com/@vecghana/video/7289724643567602950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                >
                  Watch Tour Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What We Do / Our Programs & Ministry Section */}
      <section className="programs-section">
        <div className="container">
          <div className="section-top-bar">
            <div>
              <div className="badge-pill">What We Do</div>
              <h2>Our Programs & Ministry</h2>
            </div>
            <Link href="/events" className="btn btn-outline-dark" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="programs-five-grid">
            {programs.map((prog, idx) => (
              <div key={idx} className="prog-item-card">
                <div className="prog-item-img">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="prog-item-body">
                  <h4>{prog.title}</h4>
                  <p>{prog.desc}</p>
                  <div className="prog-item-foot">
                    <Link href={prog.link} className="btn-circle-arrow" aria-label={prog.title}>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Impact Banner Card */}
      <section className="impact-banner-section">
        <div className="container">
          <div className="impact-banner-card">
            <div className="impact-banner-bg">
              <Image
                src="/images/choir-4.jpg"
                alt="Music That Changes Lives"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content">
              <div className="badge-pill dark">Our Impact</div>
              <h2>Music That Changes Lives</h2>
              <p>
                From widows and orphanages to Korle Bu Children&apos;s Unit and the Saving Hearts Project, our music goes beyond the stage to touch hearts and transform lives.
              </p>
              <Link href="/impact" className="btn btn-primary">
                See Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
