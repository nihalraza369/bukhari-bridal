import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata = {
  title: "Bukhari Bridal | Where Bridal Dreams Begin — Karachi",
  description:
    "Bukhari Bridal — Premium Bridal Wear | Flawless Craftsmanship. Custom & Ready-to-Wear bridal ghararay, shararay & luxury designs, Groom Package & Jewellery in Karachi. Bookings & inquiries: 0310 3668333.",
  icons: { icon: "/bukharilogo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
