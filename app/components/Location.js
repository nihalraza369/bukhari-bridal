import Reveal from "./Reveal";
import { business } from "../siteData";

export default function Location() {
  return (
    <section className="section" id="location">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Bookings &amp; Inquiries</span>
          <h2>Get in touch — {business.city}</h2>
          <div className="motif">✦</div>
        </Reveal>

        <Reveal>
          <div className="loc-grid">
            <div className="loc-info">
              <h3>{business.name}</h3>
              <p className="addr">{business.bookingNote}</p>

              <div className="contact-table">
                <a className="contact-row" href={business.phoneHref}>
                  <span>Call / Phone</span>
                  <b>{business.phoneDisplay}</b>
                </a>
                <a
                  className="contact-row"
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>WhatsApp</span>
                  <b>{business.phoneDisplay}</b>
                </a>
                <a
                  className="contact-row"
                  href={business.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Instagram</span>
                  <b>{business.instagramHandle}</b>
                </a>
                <div className="contact-row">
                  <span>City</span>
                  <b>{business.city}</b>
                </div>
              </div>

              <div className="loc-actions">
                <a href={business.phoneHref} className="btn btn-red">
                  Call Now
                </a>
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="loc-side">
              <img src={business.logo} alt={`${business.name} logo`} />
              <p>{business.tagline}</p>
              <small>{business.subTagline}</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
