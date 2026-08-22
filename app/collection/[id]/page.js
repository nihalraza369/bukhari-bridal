import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Reveal from "../../components/Reveal";
import ProductGallery from "../../components/ProductGallery";
import { CtaStrip, Footer } from "../../components/Footer";
import { business, products } from "../../siteData";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.price} | Bukhari Bridal`,
    description: `${product.desc} Price: ${product.price}. ${business.bookingNote} — call or WhatsApp ${business.phoneDisplay}.`,
  };
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const waMessage = encodeURIComponent(
    `Assalam o Alaikum! I'm interested in "${product.name}" (${product.price}). Please share booking details.`
  );

  const details = [
    product.fabric && { label: "Fabric", value: product.fabric },
    product.work && { label: "Work", value: product.work },
    product.material && { label: "Material", value: product.material },
    product.pieces && { label: "Includes", value: product.pieces },
    { label: "Occasion", value: product.occasion },
  ].filter(Boolean);

  const others = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <section className="section pd-section">
          <div className="container">
            <div className="pd-crumb">
              <Link href="/collection">← Back to Collection</Link>
            </div>

            <div className="pd-grid">
              <ProductGallery images={product.images} name={product.name} />

              <div className="pd-info">
                <span className="product-cat pd-cat">{product.category}</span>
                <h1>{product.name}</h1>

                <div className="pd-price">
                  <b>{product.price}</b>
                  <small>{product.priceNote}</small>
                </div>

                <p className="pd-desc">{product.desc}</p>

                <ul className="product-meta pd-meta">
                  {details.map((d) => (
                    <li key={d.label}>
                      <span>{d.label}</span> {d.value}
                    </li>
                  ))}
                </ul>

                <div className="pd-actions">
                  <a
                    href={`https://wa.me/923103668333?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-red"
                  >
                    Book Now on WhatsApp
                  </a>
                  <a href={business.phoneHref} className="btn btn-outline-dark">
                    Call {business.phoneDisplay}
                  </a>
                </div>

                <p className="pd-note">
                  {business.bookingNote} · Instagram{" "}
                  <a href={business.instagramHref} target="_blank" rel="noopener noreferrer">
                    {business.instagramHandle}
                  </a>{" "}
                  · Final price fabric, work aur sizing par depend karta hai.
                </p>
              </div>
            </div>

            <div className="pd-others">
              <h2>You may also like</h2>
              <div className="pd-others-grid">
                {others.map((o, i) => (
                  <Reveal key={o.id} delay={i * 90}>
                    <Link href={`/collection/${o.id}`} className="pd-other-card">
                      <img src={o.img} alt={o.name} loading="lazy" />
                      <div>
                        <small>{o.category}</small>
                        <h3>{o.name}</h3>
                        <b>{o.price}</b>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
