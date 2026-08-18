"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Music", href: "/music" },
    { name: "Events", href: "/events" },
    { name: "Outreach", href: "/impact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="site-logo">
            <Image
              src="/images/logo.png"
              alt="VocalEssence Chorale"
              width={38}
              height={38}
              className="logo-graphic"
              priority
            />
            <div className="logo-words">
              <strong>VocalEssence</strong>
              <span>CHORALE</span>
            </div>
          </Link>

          <nav className="desktop-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${pathname === item.href ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "0.55rem 1.35rem", fontSize: "0.88rem" }}>
              Book Us
            </Link>
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${pathname === item.href ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn-primary"
          style={{ marginTop: "1rem", textAlign: "center" }}
          onClick={() => setMobileMenuOpen(false)}
        >
          Book Us
        </Link>
      </div>
    </>
  );
}
