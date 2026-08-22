// ── Sab business details yahan se edit karein ──────────────────────────────
export const business = {
  name: "Bukhari Bridal",
  tagline: "Where Bridal Dreams Begin",
  subTagline: "Premium Bridal Wear | Flawless Craftsmanship",
  aboutText:
    "Custom & Ready-to-Wear by Bukhari Bridal | Groom | Jewellery — Bridal ghararay, shararay & luxury designs & Groom Package.",
  bookingNote: "Bookings & Inquiries via DM",
  phoneDisplay: "0310 3668333",
  phoneHref: "tel:+923103668333",
  whatsappHref: "https://wa.me/923103668333",
  instagramHandle: "@BukhariBridal",
  instagramUsername: "bukharibridal2",
  instagramHref: "https://www.instagram.com/bukharibridal2/",
  city: "Karachi",
  logo: "/bukharilogo.png",
};

const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// ── Products (Collection page) — prices aur images yahan se edit karein ────
export const products = [
  {
    id: "bb-01",
    name: "Royal Red Bridal Gharara",
    category: "sale",
    price: "PKR 145,000",
    priceNote: "Custom stitching included",
    desc: "Deep red velvet gharara with heavy zardozi, dabka & sequin handwork. Paired with an embellished kameez and a four-sided border dupatta.",
    fabric: "Velvet · Net Dupatta",
    work: "Zardozi · Dabka · Sequins",
    occasion: "Baraat",
    img: "/card1/image2.PNG",
    images: ["/card1/image1.PNG", "/card1/image2.PNG", "/card1/image3.PNG"],
  },
  {
    id: "bb-02",
    name: "Golden Sharara Set",
    category: "Bridal Sharara",
    price: "PKR 98,000",
    priceNote: "Ready-to-wear available",
    desc: "Champagne-gold sharara with gota borders and fine pearl spray. A flowy silhouette that moves beautifully on the dance floor.",
    fabric: "Organza · Raw Silk",
    work: "Gota · Pearl Work",
    occasion: "Walima",
     img: "/card2/image1.PNG",
    images: ["/card2/image1.PNG", "/card2/image2.PNG", "/card2/image3.PNG", "/card2/image4.PNG"],
  },
  
];

export const gallery = [
  px(5622603),
  px(31750723),
  px(33023960),
  px(9596225),
  px(30167011),
  px(32107217),
];
