import Link from "next/link";
import { business } from "../siteData";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <img
          src="/card2/image2.PNG"
          alt="Pakistani bride in traditional red bridal attire with jewellery"
        />
      </div>
      <div className="hero-overlay" />
      

      <div className="hero-badge">
        <div className="stars">★ ★ ★ ★ ★</div>
        <div className="label">Premium Craftsmanship</div>
      </div>

      <div className="container hero-content">
        <span className="hero-eyebrow">{business.subTagline}</span>
        <h1 className="hero-title">
          Bukhari <em>Bridal</em>
        </h1>
        <p className="hero-tagline">{business.tagline} — custom &amp; ready-to-wear bridal
          ghararay, shararay &amp; luxury designs | Groom Package &amp; Jewellery.
        </p>
        <div className="hero-actions">
          <Link href="/collection" className="btn btn-red">
            Explore Collection
          </Link>
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
