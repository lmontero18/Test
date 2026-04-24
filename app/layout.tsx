import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luismontero.com"),
  title: "Luis Montero Molina — Desarrollador y emprendedor",
  description:
    "Desarrollador de software y emprendedor. Automatizo procesos para que empresas ahorren tiempo y dinero. Fundador de Naia y Naia Code.",
  keywords: [
    "Luis Montero",
    "Luis Montero Molina",
    "desarrollador",
    "Costa Rica",
    "Naia",
    "Naia Code",
    "automatización",
    "software",
  ],
  authors: [{ name: "Luis Montero Molina" }],
  creator: "Luis Montero Molina",
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "https://luismontero.com",
    siteName: "Luis Montero Molina",
    title: "Luis Montero Molina — Desarrollador y emprendedor",
    description:
      "Desarrollador de software y emprendedor. Automatizo procesos para que empresas ahorren tiempo y dinero. Fundador de Naia y Naia Code.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Montero Molina — Desarrollador y emprendedor",
    description:
      "Desarrollador de software y emprendedor. Automatizo procesos para que empresas ahorren tiempo y dinero.",
    creator: "@luismonteromolina",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
