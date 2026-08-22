import Link from "next/link";
import { business } from "../siteData";

export function CtaStrip() {
  return (
    <section className="cta-strip">
      <div className="container">
        <h2>Ready to plan your bridal look?</h2>
        <p>{business.bookingNote} — call or WhatsApp us today at {business.phoneDisplay}.</p>
        <div className="hero-actions">
          <a href={business.phoneHref} className="btn btn-white">
            Call Now
          </a>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="/" className="footer-brand">
            <img src={business.logo} alt={`${business.name} logo`} className="brand-logo" />
            <span className="brand-name">{business.name}</span>
          </a>
          <p className="tag">
            {business.tagline} — {business.subTagline}. Custom &amp; ready-to-wear bridal
            ghararay, shararay &amp; luxury designs | Groom | Jewellery.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link href="/collection">Collection</Link></li>
            <li><Link href="/#gallery">Gallery</Link></li>
            <li><Link href="/#reviews">Reviews</Link></li>
            <li><Link href="/#location">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Collections</h4>
          <ul>
            <li>Bridal Ghararay</li>
            <li>Bridal Shararay</li>
            <li>Luxury Designs</li>
            <li>Groom Package</li>
            <li>Jewellery</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href={business.phoneHref}>{business.phoneDisplay}</a></li>
            <li>{business.bookingNote}</li>
            <li>
              <a
                href={business.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {business.instagramHandle}
              </a>
            </li>
            <li>{business.city}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
        <span>Premium Bridal Wear · {business.city}</span>
      </div>
    </footer>
  );
}
