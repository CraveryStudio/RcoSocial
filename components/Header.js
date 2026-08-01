"use client";
import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/seo-agentic-discovery", label: "SEO & Agentic Discovery" },
  { href: "/services/ai-content", label: "AI Video & Image Content" },
  { href: "/services/social-media-marketing", label: "Social Media Marketing" },
  { href: "/services/custom", label: "Custom AI Services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo-link" aria-label="RCO Social home">
          <img src="/logo.svg" alt="RCO Social" width="180" height="36" />
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li className="dropdown">
              <Link href="/services/web-development">Services</Link>
              <div className="dropdown-panel">
                {SERVICES.map((s) => (
                  <Link key={s.href} href={s.href}>{s.label}</Link>
                ))}
              </div>
            </li>
            <li><Link href="/packages">Packages</Link></li>
            <li><Link href="/real-estate">Real Estate</Link></li>
            <li><Link href="/#gallery">Gallery</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </nav>
        <Link href="/#contact" className="btn btn-primary nav-cta">Get Free Audit</Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <details>
          <summary>Services</summary>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} onClick={() => setOpen(false)}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </details>
        <Link href="/packages" onClick={() => setOpen(false)}>Packages</Link>
        <Link href="/real-estate" onClick={() => setOpen(false)}>Real Estate</Link>
        <Link href="/#gallery" onClick={() => setOpen(false)}>Gallery</Link>
        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/#contact" className="btn btn-primary btn-block" style={{ marginTop: 12 }} onClick={() => setOpen(false)}>
          Get Free Audit
        </Link>
      </div>
    </header>
  );
}
