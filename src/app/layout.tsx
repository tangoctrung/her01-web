import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Her01',
    default: 'Her01'
  },
  description: 'Her01',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    siteName: 'Her01 Company'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
