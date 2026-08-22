import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";
import { CtaStrip, Footer } from "../components/Footer";
import { business } from "../siteData";

export const metadata = {
  title: "Collection | Bukhari Bridal — Bridal Ghararay, Shararay & Luxury Designs",
  description:
    "Explore the full Bukhari Bridal collection — bridal ghararay, shararay, luxury designs, groom packages & jewellery with pricing. Bookings via DM or call 0310 3668333.",
};

export default function CollectionPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsGrid id="products" showNote={true} />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
