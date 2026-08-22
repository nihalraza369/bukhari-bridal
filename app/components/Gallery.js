import Reveal from "./Reveal";
import { gallery } from "../siteData";

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Lookbook</span>
          <h2>A glimpse of our craft</h2>
          <p>Real silhouettes from our bridal and party wear collections.</p>
          <div className="motif">✦</div>
        </Reveal>

        <Reveal>
          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={`Bukhari Bridal lookbook photo ${i + 1}`} loading="lazy" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
