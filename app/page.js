import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import { CtaStrip, Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductsGrid id="collections" />
        <Gallery />
        <Reviews />
        <Location />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
