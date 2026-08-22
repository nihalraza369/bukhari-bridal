import Link from "next/link";
import Reveal from "./Reveal";
import { business, products } from "../siteData";

export default function ProductsGrid({ id = "collections", showNote = false }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Our Collection</span>
          <h2>Every piece, with details &amp; pricing</h2>
          <p>
            {business.subTagline} — prices are starting rates; final quote depends on
            fabric, work and sizing.
          </p>
          <div className="motif">✦</div>
        </Reveal>

        <div className="product-grid">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}>
              <article className="product-card">
                <Link href={`/collection/${p.id}`} className="product-media">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span className="product-cat">{p.category}</span>
                </Link>
                <div className="product-body">
                  <h3>
                    <Link href={`/collection/${p.id}`}>{p.name}</Link>
                  </h3>
                  <p className="product-desc">{p.desc}</p>
                  <ul className="product-meta">
                    {p.fabric && (
                      <li>
                        <span>Fabric</span> {p.fabric}
                      </li>
                    )}
                    {p.work && (
                      <li>
                        <span>Work</span> {p.work}
                      </li>
                    )}
                    {p.material && (
                      <li>
                        <span>Material</span> {p.material}
                      </li>
                    )}
                    {p.pieces && (
                      <li>
                        <span>Includes</span> {p.pieces}
                      </li>
                    )}
                    <li>
                      <span>Occasion</span> {p.occasion}
                    </li>
                  </ul>
                  <div className="product-foot">
                        <div className="product-price">
                          <b>{p.price}</b>
                          <small>{p.priceNote}</small>
                        </div>
                        <Link href={`/collection/${p.id}`} className="btn btn-red btn-sm">
                          Book Now
                        </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showNote && (
          <Reveal>
            <div className="collection-note">
              <p>
                Looking for something custom? Har design aapki choice ke fabric, colour aur
                size mein banaya ja sakta hai — {business.bookingNote} ·{" "}
                <a href={business.instagramHref} target="_blank" rel="noopener noreferrer">
                  {business.instagramHandle}
                </a>
              </p>
              <a href="/" className="btn btn-outline-dark">
                Back to Home
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
