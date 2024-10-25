import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madhummitha R | Full Stack Developer",
  description:
    "A tech enthusiast translating ideas into user-friendly solutions.",
  keywords: [
    "Web Development",
    "Full Stack Developer",
    "Mobile App Developer",
    "SaaS",
    "E-Commerce Websites",
    "Custom CRM",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
  ],
  twitter: {
    title: "Madhummitha R | Full Stack Developer",
    description:
      "A tech enthusiast translating ideas into user-friendly solutions.",
    card: "summary_large_image",
    creator: "@madhummitha21",
    images: [
      {
        url: "https://madhummitha.vercel.app/images/name.png",
        alt: "Portfolio Image",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Madhummitha R | Full Stack Developer",
    description:
      "A tech enthusiast translating ideas into user-friendly solutions.",
    url: "https://madhummitha.vercel.app/",
    siteName: "Madhummitha R",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://madhummitha.vercel.app/images/name.png",
        alt: "Madhummitha R",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ToastContainer />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
