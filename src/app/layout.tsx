import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["600", "700", "800"],
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#071322",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/itec";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `http://localhost:4043${basePath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Electrical Equipment & Power Electronics Supplier | ITEC",
    template: "%s | ITEC Indian Trading & Exports Corporation",
  },
  description:
    "Source transformers, electrical components, voltage stabilisers, UPS systems and power electronics through ITEC, your Indian sourcing and export partner in Pune, India.",
  keywords: [
    "electrical equipment supplier india",
    "power electronics supplier europe",
    "servo voltage stabilizer exporter",
    "transformer manufacturer pune",
    "static frequency converter 400hz",
    "industrial ups manufacturer india",
    "ats automatic transfer switch exporter",
    "crgo transformer core india",
    "power conditioning equipment supplier",
    "indian trading and exports corporation",
    "itec pune",
  ],
  authors: [{ name: "ITEC – Indian Trading & Exports Corporation", url: siteUrl }],
  creator: "ITEC",
  publisher: "ITEC – Indian Trading & Exports Corporation",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Electrical Equipment & Power Electronics Supplier | ITEC",
    description:
      "Direct Pune manufacturing and export coordination for custom transformers, servo stabilizers, static frequency converters, and industrial power conditioning solutions.",
    url: siteUrl,
    siteName: "ITEC – Indian Trading & Exports Corporation",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${basePath}/Products/hero-bg-image.png`,
        width: 1200,
        height: 630,
        alt: "ITEC Industrial Electrical Equipment & Power Electronics Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Equipment & Power Electronics Supplier | ITEC",
    description:
      "Source transformers, electrical components, voltage stabilisers, UPS systems and power electronics through ITEC, your Indian sourcing and export partner.",
    images: [`${basePath}/Products/hero-bg-image.png`],
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
  icons: {
    icon: [
      { url: `${basePath}/icon.svg`, type: "image/svg+xml" },
      { url: `${basePath}/favicon.svg`, type: "image/svg+xml" },
    ],
    shortcut: `${basePath}/icon.svg`,
    apple: `${basePath}/icon.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "ITEC – Indian Trading & Exports Corporation",
        alternateName: "ITEC Exports",
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        description:
          "India sourcing and export partner for industrial transformers, power conditioning equipment, voltage stabilizers, and power electronics.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-78754-97964",
          contactType: "sales",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "ITEC Industrial Electrical Sourcing",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        {/* Hero 3D: start fetching before paint */}
        <link
          rel="preload"
          href={`${basePath}/model.glb`}
          as="fetch"
          crossOrigin="anonymous"
          type="model/gltf-binary"
        />

        <link
          rel="modulepreload"
          href="https://ajax.googleapis.com/ajax/libs/model-viewer/4.4.0/model-viewer.min.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{fetch("${basePath}/model.glb",{credentials:"same-origin",mode:"cors",priority:"high"}).catch(function(){})}catch(e){}`,
          }}
        />
        <script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.4.0/model-viewer.min.js"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NLH93NDN');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17855907654"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17855907654');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0B1F3A] antialiased selection:bg-[#0B4EA2] selection:text-white font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLH93NDN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* WCAG Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#0B4EA2] text-white font-bold text-sm rounded shadow-lg border-2 border-white ring-2 ring-blue-400"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
