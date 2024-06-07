import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import NextHead from 'next/head';
import Script from 'next/script';
import { HTMLAttributes, PropsWithChildren } from 'react';
type PageProps = PropsWithChildren<any> & HTMLAttributes<HTMLDivElement>;
export default function RootLayout({ children }: PageProps) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VD3D5Q376Y"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VD3D5Q376Y');`}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
