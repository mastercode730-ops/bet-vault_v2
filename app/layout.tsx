import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvaultstar.com'),
  title: "BetVault Official Guide | Sports & Cricket",
  description: "Explore BetVault information, cricket and sports resources, account guidance, casino information, and frequently asked questions.",
  keywords: "cricket ID, IPL ID, online ID India, Bet Vault",
  openGraph: {
    title: "BetVault Official Guide | Sports & Cricket",
    description: "Explore BetVault information, cricket and sports resources, account guidance, casino information, and frequently asked questions.",
    type: "website",
  },
  verification: {
    google: "rstEDzX2HqQrY3ehXW6HGtoWJbEOT1lGuNtM_ZVvap0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G37D90CR7L"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G37D90CR7L');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;0,900;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "http://betvaultstar.com/#website",
                  "url": "http://betvaultstar.com/",
                  "name": "BetVault",
                  "inLanguage": "en"
                },
                {
                  "@type": "Organization",
                  "@id": "http://betvaultstar.com/#organization",
                  "name": "BetVault",
                  "url": "http://betvaultstar.com/"
                },
                {
                  "@type": "WebPage",
                  "@id": "http://betvaultstar.com/#webpage",
                  "url": "http://betvaultstar.com/",
                  "name": "BetVault Official Guide | Sports & Cricket",
                  "description": "Explore BetVault information, cricket and sports resources, account guidance, casino information, and frequently asked questions.",
                  "isPartOf": {
                    "@id": "http://betvaultstar.com/#website"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "http://betvaultstar.com/#faq",
                  "url": "http://betvaultstar.com/",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is BetVault?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "BetVault is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does a BetVault ID work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An account ID is generally used to identify a user account. Refer to BetVault's current account instructions and terms for the exact process."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I access BetVault?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What sports are available on BetVault?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Available sports can change. Check the current sports section on the website for the latest list and availability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does BetVault provide live sports information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I get help with my BetVault account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I find BetVault login information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What payment options are supported?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What should I do if I have trouble accessing my account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where can I find the latest BetVault updates?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Refer to BetVault's current website information and terms for the most accurate answer."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
