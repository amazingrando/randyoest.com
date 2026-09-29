import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Fathom from '@/lib/fathom';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Randy Oest • I make the internet less ugly and more useful.",
  description: "Let’s be honest: there’s a lot of bad design out there. I turn tangled content and messy ideas into clean experiences and thoughtful strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased font-base text-slate-700`}
      >
        <Fathom />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
        <Script
          src="https://analytics.amazingrando.com/js/pa-gIS-TSeB98HH-ny1mq58Q.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
