import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TSX",
  description: "TSX Server de ARK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${geistSans.variable} ${geistMono.variable} font-geist-sans antialiased bg-gradient-to-br from-secondary from-60% to-violet-500`}>
        <NextTopLoader color='#0D1117' />
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
