"use client";

import { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);
  const pics = images && images.length ? images : [];

  if (!pics.length) return null;

  return (
    <div className="pd-gallery">
      <div className="pd-main-img">
        <img src={pics[active]} alt={`${name} — photo ${active + 1}`} />
      </div>
      {pics.length > 1 && (
        <div className="pd-thumbs">
          {pics.map((src, i) => (
            <button
              key={i}
              type="button"
              className={`pd-thumb ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`View photo ${i + 1}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
