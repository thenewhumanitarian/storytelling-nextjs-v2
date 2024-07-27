import type { Metadata } from "next";

import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

// Load Roboto from Google Fonts
const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// Load GT Sectra from local files
const gtSectra = localFont({
  src: [
    {
      path: '../fonts/GT-Sectra-Fine-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/GT-Sectra-Fine-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/GT-Sectra-Fine-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-gt-sectra',
});

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: 'The New Humanitarian | %s',
    default: 'The New Humanitarian | Interactive',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${gtSectra.variable}`}>
      <body>{children}</body>
    </html>
  );
}
