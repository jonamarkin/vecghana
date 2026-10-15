"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Video,
} from "lucide-react";

import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main-grid">
        {/* Brand Column */}
        <div className="footer-col footer-brand-col">
          <Link href="/" className="site-logo">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={38}
              height={38}
              className="logo-graphic"
            />
            <div className="logo-words">
              <strong>VocalEssence</strong>
              <span>CHORALE GHANA</span>
            </div>
          </Link>
          <p className="footer-brand-text">
            {siteConfig.subTagline}
          </p>
          <div className="footer-social-row">
            <a
              href={siteConfig.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Facebook"
            >
              <Facebook size={15} />
            </a>
            <a
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href={siteConfig.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="YouTube"
            >
              <Youtube size={15} />
            </a>
            <a
              href={siteConfig.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="TikTok"
            >
              <Video size={15} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ministry */}
        <div className="footer-col">
          <h4>Ministry</h4>
          <ul>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/about">Core Values</Link></li>
            <li><Link href="/impact">Our Impact</Link></li>
            <li><Link href="/contact">Book Us</Link></li>
            <li><Link href="/events">News & Tours</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-col">
          <h4>Connect</h4>
          <ul className="footer-contact-list">
            <li>
              <Phone size={14} /> <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>
            </li>
            <li>
              <Mail size={14} /> <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
            <li>
              <MapPin size={14} /> {siteConfig.contact.address}
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col footer-newsletter-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to get updates on our latest music, events and more.
          </p>
          <form
            className="newsletter-input-group"
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Thank you for subscribing to ${siteConfig.name}!`);
            }}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary" style={{ padding: "0.65rem 1.15rem" }}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="footer-copyright-bar">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
