import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import EmailContact from "@/components/EmailContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Taiwo Joseph: Frontend developer",
    default: "Taiwo Joseph: Frontend developer",
  },
  description:
    "Taiwo Joseph is a software Engineer highly skilled and passionate about creating visually appealing and user-friendly experiences.",
  applicationName: "Taiwo Joseph Portfolio",
  authors: [{ name: "Taiwo Joseph" }],
  generator: "Next.js",
  keywords: [
    "taiwo joseph",
    "web development",
    "programmer",
    "frontend developer",
    "jtk",
  ],
  creator: "Taiwo Joseph",
  publisher: "Taiwo Joseph",
  openGraph: {
    title: "Taiwo Joseph",
    description:
      "Taiwo Joseph is a software Engineer highly skilled and passionate about creating visually appealing and user-friendly experiences.",
    url: "",
    siteName: "Taiwo Joseph Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/wosom/image/upload/v1739782444/profile_wuvkzj.jpg",
        secureUrl: "",
        width: "1200",
        height: "630",
        alt: "Preview Image for Taiwo Joseph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KelvinJoseph10",
    title: "Taiwo Joseph",
    description:
      "Taiwo Joseph is a software Engineer highly skilled and passionate about creating visually appealing and user-friendly experiences.",
    creator: "Taiwo Joseph",
    images: {
      url: "https://res.cloudinary.com/wosom/image/upload/v1739782444/profile_wuvkzj.jpg",
      alt: "Preview Image for Taiwo Joseph",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-secondary`}>
        <Providers>
          <div className="min-h-dvh max-w-[1600px] mx-auto bg-white dark:bg-secondary">
            <Navbar />
            {children}
            <Socials />
            <EmailContact />
          </div>
        </Providers>
      </body>
    </html>
  );
}
