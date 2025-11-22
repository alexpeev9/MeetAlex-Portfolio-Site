import { getCopy } from "@/lib/getCopy";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const copy = getCopy();

const getAbsoluteUrl = (path: string) => {
  return `${process.env.NEXT_PUBLIC_SITE_URL || ""}${path}`;
};

export const metadata: Metadata = {
  title: copy.metadata.title,
  description: copy.metadata.description,
  openGraph: {
    title: copy.metadata.title,
    description: copy.metadata.description,
    type: "website",
    images: [
      {
        url: getAbsoluteUrl(copy.metadata.bannerImage),
        alt: copy.metadata.bannerImageAlt,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metadata.title,
    description: copy.metadata.description,
    images: getAbsoluteUrl(copy.hero.imageSrc),
  },
  keywords: copy.metadata.keywords,
  authors: [{ name: copy.cv.bio.name }],
  creator: copy.cv.bio.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="flex min-h-screen flex-col"
          style={{
            background: "var(--gradient-page)",
            color: "var(--text-primary)",
          }}
          id="main"
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </html>
  );
}
