import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brandshiftmedia.com"),
  title: "Brand Shift Media",
  description:
    "Delivering Cutting-Edged Digital Marketing Solutions for Unmatched Brand Growth",
  generator: "Brand Shift Media",
  applicationName: "Brand Shift Media",
  verification: {
    google: "",
  },
  keywords: [
    "brand shift media",
    "BSM",
    "brand shift",
    "branding agency",
    "branding agency in lagos",
    "creative digital agency nigeria",
    "graphics design company lagos",
    "corporate branding services nigeria",
    "brand identity design company in lagos",
    "logo design agency lagos",
    "brand strategist in lagos nigeria",
    "business registration company near me",
    "digital marketing agency nigeria",
    "social media management lagos",
    "sponsored ads expert nigeria",
    "meta verification services nigeria",
    "instagram account recovery expert lagos",
    "facebook ads manager lagos",
    "ai content creation agency nigeria"
  ],
  openGraph: {
    title: "Brand Shift Media",
    description:
      "Delivering Cutting-Edged Digital Marketing Solutions for Unmatched Brand Growth",
    url: "https://www.brandshiftmedia.com",
    siteName: "Brand Shift Media",
    images: "/images/logo.png",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Shift Media",
    description:
      "Delivering Cutting-Edged Digital Marketing Solutions for Unmatched Brand Growth",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brand Shift Media",
    url: "https://www.brandshiftmedia.com",
    logo: "https://www.brandshiftmedia.com/logo.png",
    description:
      "Delivering Cutting-Edged Digital Marketing Solutions for Unmatched Brand Growth",
    founder: [
      {
        "@type": "Person",
        name: "",
        jobTitle: "Founder",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ikeja",
      addressCountry: "NG",
    },
  };
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
