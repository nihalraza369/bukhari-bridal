"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { business } from "../siteData";

const sections = [
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  const links = [
    { href: "/collection", label: "Collection", isPage: true },
    ...sections.map((s) => ({
      href: onHome ? `#${s.id}` : `/#${s.id}`,
      label: s.label,
      isPage: false,
    })),
  ];

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-item">
            <span>{business.tagline}</span>
          </div>
          <div className="topbar-item">
            <span>{business.city}</span>
            <span>•</span>
            <span className="topbar-stars">★★★★★ Loved by Brides</span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <a href="/" className="brand">
            <img src={business.logo} alt={`${business.name} logo`} className="brand-logo" />
          </a>

          <nav className="nav">
            {links.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href={business.phoneHref} className="btn btn-outline-dark btn-call-desktop">
              Call Now
            </a>
            <button
              className="menu-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${open ? "open" : ""}`}>
          <a href="/" onClick={() => setOpen(false)}>
            Home
          </a>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={business.phoneHref} onClick={() => setOpen(false)}>
            Call {business.phoneDisplay}
          </a>
        </div>
      </header>
    </>
  );
}
