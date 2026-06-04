import type { Metadata } from "next";
import { Web3ModalProvider } from "./context/Web3ModalProvider";
import { Barlow, Barlow_Condensed, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kindard Kids — Premium Kids Streetwear",
    template: "%s | Kindard Kids",
  },
  description:
    "Kindard Kids — premium children's streetwear from Amsterdam. Indestructible quality, unrestricted movement, guilt-free materials.",
  keywords: ["kids streetwear", "children's fashion", "premium kids clothing", "Amsterdam fashion"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Kindard Kids",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable} ${playfair.variable}`}
    >
      <body>
        <Web3ModalProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Web3ModalProvider>
      </body>
    </html>
  );
}
