import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import NextHead from 'next/head';
import Script from 'next/script';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
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
        {/* <!-- Google Tag Manager --> */}
        <Script id="google-dataLayer">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PMMKPWX');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3691019953250878"
          crossOrigin="anonymous"
        ></Script>
        <Script
          async
          src="https://fundingchoicesmessages.google.com/i/pub-3691019953250878?ers=1"
          nonce="CUTFYjkLxnucRToAXGZkEA"
        ></Script>
        <Script nonce="CUTFYjkLxnucRToAXGZkEA" id="google-ad">
          {` (function(){function signalGooglefcPresent() 
            {if (!window.frames['googlefcPresent']) 
            {if (document.body) {const iframe = document.createElement('iframe');
             iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; 
             iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; 
             document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}
             signalGooglefcPresent();
             })();`}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PMMKPWX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
