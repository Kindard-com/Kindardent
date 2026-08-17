export interface StoreLocation {
  city: string;
  slug: string;
  fullName: string;
  address: string;
  neighbourhood: string;
  phone: string;
  email: string;
  hours: { days: string; time: string }[];
  experience: { title: string; desc: string; emoji: string }[];
  upcomingEvent?: { name: string; date: string };
  heroTagline: string;
}

export const stores: StoreLocation[] = [
  {
    city: "New York",
    slug: "new-york",
    fullName: "KINDARD NEW YORK",
    neighbourhood: "SoHo",
    address: "152 Prince Street, SoHo, New York, NY 10012",
    phone: "+1 212 000 0000",
    email: "newyork@kindard.com",
    heroTagline: "The flagship. Where everything started going global.",
    hours: [
      { days: "Mon – Fri", time: "10:00 – 20:00" },
      { days: "Sat – Sun", time: "10:00 – 21:00" },
    ],
    experience: [
      { emoji: "🗂", title: "Exclusive Drops", desc: "SoHo gets first access to limited-run colourways and seasonal exclusives." },
      { emoji: "👗", title: "Styling Sessions", desc: "Book a 30-minute one-on-one with our in-store stylists — free of charge." },
      { emoji: "🧸", title: "Kids Play Area", desc: "A dedicated play corner so the real bosses can approve the fits themselves." },
    ],
    upcomingEvent: { name: "SS26 Drop Party", date: "Jun 14 – Jun 15" },
  },
  {
    city: "Los Angeles",
    slug: "los-angeles",
    fullName: "KINDARD LOS ANGELES",
    neighbourhood: "Fairfax",
    address: "420 N Fairfax Ave, Los Angeles, CA 90036",
    phone: "+1 323 000 0000",
    email: "la@kindard.com",
    heroTagline: "Sun-bleached concrete and premium kids streetwear.",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 20:00" },
      { days: "Sat – Sun", time: "10:00 – 20:00" },
    ],
    experience: [
      { emoji: "🛹", title: "Skate Collab Wall", desc: "Rotating art installations from local skate artists." },
      { emoji: "👗", title: "Styling Sessions", desc: "Personal styling appointments available Tuesday–Saturday." },
      { emoji: "🧸", title: "Kids Play Area", desc: "Fully kitted play corner with Kindard-branded toys and activities." },
    ],
    upcomingEvent: { name: "Fairfax Block Party", date: "Jun 21" },
  },
  {
    city: "London",
    slug: "london",
    fullName: "KINDARD LONDON",
    neighbourhood: "Carnaby Street",
    address: "28 Carnaby Street, Soho, London W1F 9PS",
    phone: "+44 20 0000 0000",
    email: "london@kindard.com",
    heroTagline: "Concrete culture meets Amsterdam precision.",
    hours: [
      { days: "Mon – Sat", time: "10:00 – 20:00" },
      { days: "Sunday", time: "11:00 – 18:00" },
    ],
    experience: [
      { emoji: "🎨", title: "Gallery Installs", desc: "Monthly rotating youth art installations in our window and interior." },
      { emoji: "👗", title: "Styling Sessions", desc: "Book through the website — complimentary for orders over £150." },
      { emoji: "🧸", title: "Kids Play Area", desc: "Interactive play zone with activity books and Kindard merch." },
    ],
    upcomingEvent: { name: "Kindard x TATE Youth", date: "Jul 5 – Jul 6" },
  },
  {
    city: "Tokyo",
    slug: "tokyo",
    fullName: "KINDARD TOKYO",
    neighbourhood: "Harajuku",
    address: "1-7-1 Jingumae, Shibuya, Tokyo 150-0001",
    phone: "+81 3 0000 0000",
    email: "tokyo@kindard.com",
    heroTagline: "Where street culture was invented. We're honoured to be here.",
    hours: [
      { days: "Mon – Sun", time: "11:00 – 21:00" },
    ],
    experience: [
      { emoji: "🎌", title: "Japan Exclusives", desc: "Select garments and colourways available only in Harajuku." },
      { emoji: "👗", title: "Styling Sessions", desc: "Available in Japanese and English — book via LINE or the website." },
      { emoji: "🎮", title: "Kids Play Area", desc: "Curated play zone with Tokyo-themed Kindard activities." },
    ],
    upcomingEvent: { name: "Harajuku Pop-Up Garden", date: "Jun 28 – Jun 30" },
  },
  {
    city: "Amsterdam",
    slug: "amsterdam",
    fullName: "KINDARD AMSTERDAM",
    neighbourhood: "9 Straatjes",
    address: "Hartenstraat 12, 1016 CB Amsterdam",
    phone: "+31 20 000 0000",
    email: "amsterdam@kindard.com",
    heroTagline: "Home. Where every collection is conceived.",
    hours: [
      { days: "Mon – Sat", time: "10:00 – 19:00" },
      { days: "Sunday", time: "12:00 – 18:00" },
    ],
    experience: [
      { emoji: "🏠", title: "Flagship HQ", desc: "Our home store. The full collection, archive pieces, and the design team is often in." },
      { emoji: "👗", title: "Styling Sessions", desc: "Walk-ins welcome. Our team speaks Dutch, English, and French." },
      { emoji: "🧸", title: "Kids Play Area", desc: "Dedicated kids' corner with Kindard colouring books and crafts." },
    ],
    upcomingEvent: { name: "Amsterdam Design Week Preview", date: "Oct 18 – Oct 19" },
  },
];

export const storesBySlug: Record<string, StoreLocation> = Object.fromEntries(
  stores.map((s) => [s.slug, s])
);
