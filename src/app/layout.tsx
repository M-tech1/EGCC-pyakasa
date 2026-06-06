import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import { SITE, LOCATION } from "@/constants";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.motto}`,
    template: `%s · ${SITE.shortName}`,
  },
  description:
    "ECWA Gospel Church Pyakasa — a Spirit-filled, welcoming family in Lugbe, Abuja. Plan your visit, watch sermons online, give, and grow in faith with us.",
  keywords: [
    "ECWA Gospel Church",
    "Pyakasa church",
    "church in Abuja",
    "Lugbe church",
    "Evangelical Church Winning All",
    "Sunday service Abuja",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.motto}`,
    description: "A Spirit-filled, welcoming family in Pyakasa, Abuja. Come as you are.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.motto}`,
    description: "A Spirit-filled, welcoming family in Pyakasa, Abuja. Come as you are.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a1c52",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: SITE.name,
  description: `${SITE.motto} — a church in Pyakasa, Lugbe, Abuja.`,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: LOCATION.address,
    addressLocality: "Lugbe, Abuja",
    addressRegion: "FCT",
    postalCode: LOCATION.postcode,
    addressCountry: "NG",
  },
  geo: { "@type": "GeoCoordinates", latitude: LOCATION.lat, longitude: LOCATION.lng },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
