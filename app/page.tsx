import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const programs = [
    {
      title: "Worship & Concerts",
      desc: "Spirit-filled ministrations that inspire and uplift.",
      image: "/images/choir-1.jpg",
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
      {/* 1. Hero Section */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="hero-card">
            <div className="hero-card-img">
              <Image
                src="/images/choir-7.jpg"
                alt="VocalEssence Chorale Ghana performing live on stage"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="hero-card-overlay"></div>
            <div className="hero-card-content">
              <h1>
                In Harmony.<br />
                We Sing.
              </h1>
              <p>
                VocalEssence Chorale Ghana is a passionate community of voices spreading the message of hope, faith and love through choral music.
              </p>
              <div className="hero-btn-group">
                <Link href="/music" className="btn btn-primary">
                  Listen Now
                </Link>
                <Link href="/contact" className="btn btn-outline-white">
                  Book Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="who-we-are-section reveal-on-scroll">
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
                <div className="vision-card-overlay"></div>
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
          <div className="stats-bar-grid reveal-on-scroll">
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
          </div>
        </div>
      </section>

      {/* 3. Our Essence Section */}
      <section className="essence-section reveal-on-scroll">
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

      {/* 4. What We Do / Our Programs & Ministry Section */}
      <section className="programs-section reveal-on-scroll">
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
              <div key={idx} className={`prog-item-card reveal-on-scroll reveal-delay-${(idx % 5) + 1}`}>
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

      {/* 5. Our Impact Banner Card */}
      <section className="impact-banner-section reveal-on-scroll">
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
