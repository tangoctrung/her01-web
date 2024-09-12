import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const quicksand = Quicksand({ subsets: ["latin"] });

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className={quicksand.className} suppressHydrationWarning={true}>
        {children}
        <ToastContainer />
        <SpeedInsights />
      </body>
    </html>
  );
}
