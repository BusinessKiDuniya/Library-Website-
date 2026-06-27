import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atheneumstudy.com"),
  title: {
    default: `${SITE.name} — Premium Study Library in Noida`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "study library",
    "reading hall",
    "study space",
    "study room Noida",
    "library membership",
    "premium study hall",
    "silent library",
    "UPSC study hall",
    "CA study library",
    "competitive exam library",
    "Athenaeum Study Hall",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://atheneumstudy.com",
    title: `${SITE.name} — Premium Study Library in Noida`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Premium Study Library`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Premium Study Library in Noida`,
    description: SITE.description,
    images: ["/og-image.jpg"],
    creator: "@atheneumstudy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Library",
              name: SITE.name,
              description: SITE.description,
              url: "https://atheneumstudy.com",
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "14-B, Knowledge Park, Sector 62",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                postalCode: "201309",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "06:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "06:00",
                  closes: "22:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "4800",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
