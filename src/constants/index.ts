export const SITE = {
  name: "ECWA Gospel Church, Pyakasa",
  shortName: "EGCC",
  district: "Pyakasa",
  motto: "Evangelical Church Winning All",
  tagline: "To God be the glory.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecwapyakasa.org",
  email: "egccpyakasa@gmail.com",
  phone: "+234 0913 455 1883",
} as const;

/**
 * Real coordinates for ECWA Gospel Church, Pyakasa
 * (Pyakasa, off Airport Road, Lugbe, Abuja FCT).
 */
export const LOCATION = {
  address: "Pyakasa, off Airport Road",
  area: "Lugbe, Abuja (FCT), Nigeria",
  postcode: "900107",
  lat: 8.9619666,
  lng: 7.3987307,
  zoom: 16,
} as const;

/** Shared map link — opens the exact church pin on Google Maps. */
export const MAP_DIRECTIONS_URL = "https://maps.app.goo.gl/WWjhz2sNBNH8Fv369";

/** No-API-key embed derived from coordinates; zoom 17 keeps the pin prominent. */
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${LOCATION.lat},${LOCATION.lng}&hl=en&z=17&output=embed`;

export const SOCIALS = {
  facebook:
    "https://web.facebook.com/people/ECWA-Gospel-Church-Pyakasa/100069870651591/",
  // instagram: "#",
  youtube: "https://www.youtube.com/@PropheticEchoesBand",
} as const;
