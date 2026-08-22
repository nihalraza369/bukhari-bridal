import Reveal from "./Reveal";

const sampleTestimonials = [
  {
    quote:
      "Sample testimonial — replace with a real customer review. Describe the fitting, fabric quality and how the outfit felt on the wedding day.",
    who: "Add customer name",
  },
  {
    quote:
      "Sample testimonial — replace with a real customer review. Mention the category (gharara, sharara, lehnga...) and the occasion it was worn for.",
    who: "Add customer name",
  },
];

export default function Reviews() {
  return (
    <section className="section section-blush" id="reviews">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Testimonials</span>
          <h2>What brides are saying</h2>
          <div className="motif">✦</div>
        </Reveal>

        <div className="review-wrap">
          <Reveal>
            <div className="review-score">
              <div className="big">5.0</div>
              <div className="stars">★★★★★</div>
              <div className="cap">Loved by our brides</div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="review-list">
              {sampleTestimonials.map((t, i) => (
                <div className="review-card" key={i}>
                  <div className="stars">★★★★★</div>
                  <p>{t.quote}</p>
                  <div className="who">{t.who}</div>
                </div>
              ))}
              <p className="review-note">
                Note: the reviews above are placeholders — swap them for your real customer
                reviews or Instagram feedback.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
