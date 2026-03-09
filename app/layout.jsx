import "./globals.css";
import Script from "next/script";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kiran Subramani | Portfolio",
  description:
    "Full-stack software engineer portfolio built with Next.js, React, and TailwindCSS.",
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM;

  return (
    <html lang="en">
      <head>
        {gtmId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
              strategy="afterInteractive"
            />
            <Script id="gtm-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtmId}');
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body className="bg-slate-50 text-slate-900 antialiased">
        <TopNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}