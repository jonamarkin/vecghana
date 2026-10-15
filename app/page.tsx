import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { homeContent } from "@/data/homeContent";

export default function HomePage() {
  const {
    hero,
    whoWeAre,
    statsBar,
    essence,
    internationalTour,
    programs,
    impactBanner,
  } = homeContent;

  return (
    <>
      {/* 1. Hero Section: Balanced Modern Editorial */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="hero-editorial-grid">
            {/* Left: Editorial & Call to Action */}
            <div className="hero-editorial-left">
              <div className="badge-pill">{hero.badge}</div>
              <h1 className="hero-editorial-title">
                {hero.titleLine1}<br />
                {hero.titleLine2}
              </h1>
              <p className="hero-editorial-desc">
                {hero.description}
              </p>
              <div className="hero-editorial-actions">
                <Link href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} className="btn btn-outline-dark">
                  {hero.secondaryCta.label}
                </Link>
              </div>
              <div className="hero-editorial-stats">
                {hero.stats.map((stat, idx) => (
                  <span key={stat.label} style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem" }}>
                    <div className="hero-stat-item">
                      <span className="hero-stat-val">{stat.value}</span>
                      <span className="hero-stat-lbl">{stat.label}</span>
                    </div>
                    {idx < hero.stats.length - 1 && (
                      <span className="hero-stat-divider" aria-hidden="true">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Framed Stage Photography + Floating Audio Pill */}
            <div className="hero-editorial-right">
              <div className="hero-stage-frame">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, (max-width: 1280px) 50vw, 620px"
                  style={{ objectFit: "cover" }}
                />
                <div className="hero-stage-vignette"></div>
                <Link
                  href={hero.featuredTrack.href}
                  className="hero-floating-audio"
                  aria-label={`Listen to featured track ${hero.featuredTrack.title} on Music page`}
                >
                  <span className="hero-audio-play-badge">
                    <Play size={13} fill="currentColor" />
                  </span>
                  <div className="hero-audio-info">
                    <span className="hero-audio-tag">{hero.featuredTrack.tag}</span>
                    <span className="hero-audio-song">{hero.featuredTrack.title}</span>
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
                  src={whoWeAre.featureImage.src}
                  alt={whoWeAre.featureImage.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="badge-pill">{whoWeAre.badge}</div>
              <div className="who-text-wrap">
                <div className="who-headline-wrap">
                  <h2>
                    {whoWeAre.titleLine1}<br />
                    {whoWeAre.titleLine2}<br />
                    {whoWeAre.titleLine3}
                  </h2>
                </div>
                <div className="who-desc-wrap">
                  {whoWeAre.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  <Link href={whoWeAre.learnMoreHref} className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
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
                    src={whoWeAre.missionCard.image}
                    alt={whoWeAre.missionCard.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="mission-card-overlay"></div>
                <div className="mission-card-content">
                  <h3>{whoWeAre.missionCard.title}</h3>
                  <p>{whoWeAre.missionCard.desc}</p>
                  <Link href={whoWeAre.missionCard.href} className="btn-circle-arrow dark-card-arrow" aria-label={whoWeAre.missionCard.title}>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Vision Card */}
              <div className="vision-card">
                <div className="vision-card-bg">
                  <Image
                    src={whoWeAre.visionCard.image}
                    alt={whoWeAre.visionCard.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="mission-card-content">
                  <h3>{whoWeAre.visionCard.title}</h3>
                  <p>{whoWeAre.visionCard.desc}</p>
                  <Link href={whoWeAre.visionCard.href} className="btn-circle-arrow dark-card-arrow" aria-label={whoWeAre.visionCard.title}>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar-grid">
            {statsBar.map((item, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-num">{item.num}</div>
                <div className="stat-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Essence Section */}
      <section className="essence-section">
        <div className="container">
          <div className="essence-layout">
            <div className="essence-img-box">
              <Image
                src={essence.image.src}
                alt={essence.image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="essence-content-box">
              <div className="badge-pill">{essence.badge}</div>
              <h2>
                {essence.titleLine1}<br />
                {essence.titleLine2}
              </h2>
              <p>{essence.description}</p>
              <Link href={essence.buttonHref} className="btn btn-primary">
                {essence.buttonLabel}
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
                src={internationalTour.image.src}
                alt={internationalTour.image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content" style={{ maxWidth: "640px" }}>
              <div className="badge-pill dark">
                {internationalTour.badge}
              </div>
              <h2>{internationalTour.title}</h2>
              <p>{internationalTour.description}</p>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                <Link href={internationalTour.tourLink} className="btn btn-primary">
                  Explore Tour Story
                </Link>
                <a
                  href={internationalTour.videoLink}
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
                src={impactBanner.image.src}
                alt={impactBanner.image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="impact-banner-overlay"></div>
            <div className="impact-banner-content">
              <div className="badge-pill dark">{impactBanner.badge}</div>
              <h2>{impactBanner.title}</h2>
              <p>{impactBanner.description}</p>
              <Link href={impactBanner.buttonHref} className="btn btn-primary">
                {impactBanner.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
