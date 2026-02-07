import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./providers";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { LoadingProvider } from "@/components/layout/LoadingContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rajan Mishra | React Native Developer Portfolio",
    template: "%s | Rajan Mishra"
  },
  description: "React Native Developer with 3 years of experience crafting cross-platform iOS and Android apps. Specializing in high-performance mobile applications with real-time features, offline support, and seamless user experiences.",
  keywords: ["React Native Developer", "Mobile App Developer", "iOS Developer", "Android Developer", "Cross-Platform Development", "JavaScript", "TypeScript", "Firebase", "Redux"],
  authors: [{ name: "Rajan Mishra" }],
  creator: "Rajan Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajanmishra.com",
    title: "Rajan Mishra | React Native Developer Portfolio",
    description: "React Native Developer with 3 years of experience crafting cross-platform mobile applications.",
    siteName: "Rajan Mishra Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Mishra | React Native Developer Portfolio",
    description: "React Native Developer specializing in high-performance mobile applications",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-sans selection:bg-primary/30 selection:text-primary-foreground transition-colors duration-300",
          inter.variable
        )}
      >
        <Providers>
          <LoadingProvider>
            <ClientLayout>
              <Navbar />
              <main className="flex-grow min-h-screen pt-20">
                {children}
              </main>
              <Footer />
            </ClientLayout>
          </LoadingProvider>
        </Providers>
      </body>
    </html>
  );
}

