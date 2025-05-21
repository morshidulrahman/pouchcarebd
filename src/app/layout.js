import { Geist } from "next/font/google";
import "./globals.css";
import AosProvider from "@/provider/AosProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pouchcare | Digital Marketing, SEO, and Web Development Experts",
  description:
    "Pouchcare specializes in digital marketing, SEO optimization, and web development services. Helping businesses across India and Pakistan grow their online presence and achieve success.",
  keywords:
    "Pouchcare, digital marketing, web development, SEO, SEO agency, Pakistan, India, business growth, online marketing",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Pouchcare | Digital Marketing, SEO, and Web Development Experts",
    description:
      "Pouchcare specializes in digital marketing, SEO optimization, and web development services. Helping businesses across India and Pakistan grow their online presence and achieve success.",
    type: "website",
    locale: "en_US",
    siteName: "Pouchcare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pouchcare | Digital Marketing, SEO, and Web Development Experts",
    description:
      "Grow your business with Pouchcare's expert digital marketing, SEO, and web development solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-geist bg-black`}>
        <GoogleAnalytics />
        <AosProvider>
          <Navbar />
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
