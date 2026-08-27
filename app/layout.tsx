import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvaultstar.com'),
  title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
  description: "Bet Vault sets up your cricket betting ID by hand, over WhatsApp, usually in a few minutes. No apps, no forms, no runaround — just a real team backing you up.",
  keywords: "cricket betting ID, IPL betting ID, online betting ID India, Bet Vault",
  openGraph: {
    title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
    description: "We set up cricket betting IDs by hand, over WhatsApp. Fast, honest, and backed by a team that actually replies.",
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
