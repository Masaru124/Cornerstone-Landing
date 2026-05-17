import type { Metadata } from "next";
import { Inter, Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const garamond = Cormorant_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Create Real AI Influencer — Go Viral & Earn Lakhs",
  description: "Create Real AI Influencer storefront redesign with preserved content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${garamond.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
