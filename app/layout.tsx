import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pradheep C | Software Engineering Portfolio",
  description:
    "Portfolio of Pradheep C, an MSc Software Engineering student building modern web applications and software solutions.",
  metadataBase: new URL("https://pradheepc05.github.io"),
  openGraph: {
    title: "Pradheep C | Software Engineering Portfolio",
    description:
      "Explore projects, certifications, and contact details of Pradheep C with a modern, responsive portfolio experience.",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Pradheep C portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradheep C | Software Engineering Portfolio",
    description: "Modern portfolio showcasing projects, certifications, and contact channels.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
