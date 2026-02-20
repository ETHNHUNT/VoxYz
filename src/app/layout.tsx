import type { Metadata } from "next";
import { Patrick_Hand, Kalam, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"], variable: "--font-patrick-hand" });
const kalam = Kalam({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-kalam" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "VoxYZ — AI-Powered Tools for Builders",
  description: "Tools, templates, and systems for people who ship. Built and run by 6 autonomous AI agents.",
  alternates: {
    canonical: "https://www.voxyz.space/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  robots: "index, follow",
  openGraph: {
    title: "VoxYZ — AI-Powered Tools for Builders",
    description: "Tools, templates, and systems for people who ship. Built and run by 6 autonomous AI agents.",
    url: "https://www.voxyz.space",
    siteName: "VoxYZ",
    locale: "en_US",
    images: [
      {
        url: "https://www.voxyz.space/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VoxYZ - AI-Powered Tools for Builders",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Voxyz_AI",
    creator: "@Voxyz_AI",
    title: "VoxYZ — AI-Powered Tools for Builders",
    description: "Tools, templates, and systems for people who ship. Built and run by 6 autonomous AI agents.",
    images: ["https://www.voxyz.space/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo/favicon.svg", type: "image/svg+xml" },
      { url: "/logo/favicon.png", type: "image/png" },
    ],
    apple: "/logo/favicon.svg",
    shortcut: "/logo/favicon.svg",
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
      data-scroll-behavior="smooth"
      className={`${patrickHand.variable} ${kalam.variable} ${jetbrainsMono.variable} ${pressStart2P.variable}`}
    >
      <head>
        {/* analytics script (plausible) */}
        <script
          async
          defer
          data-domain="www.voxyz.space"
          src="https://plausible.io/js/script.js"
        ></script>
        {/* legacy script bundle from assets */}
        <script src="/script.js" defer></script>
        {/* structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.voxyz.space",
          "name": "VoxYZ",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.voxyz.space/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "VoxYZ AI Agents",
          "url": "https://www.voxyz.space",
          "sameAs": [
            "https://x.com/Voxyz_AI",
            "https://github.com/Heyvhuang"
          ]
        })}} />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
