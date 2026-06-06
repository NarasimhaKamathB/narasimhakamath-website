import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Narasimha Kamath — AI, Supply Chain & Cybersecurity",
  description:
    "Dr. Narasimha Kamath is a globally recognised technology executive, researcher, and practitioner at the intersection of Agentic AI, Supply Chain Management, and Cybersecurity. EVP R&D & Global CISO at o9 Solutions. 12 US Patents. PhD IIM Calcutta.",
  keywords: [
    "Narasimha Kamath",
    "Agentic AI",
    "Supply Chain Management",
    "Cybersecurity",
    "CISO",
    "o9 Solutions",
    "IIM Calcutta",
    "US Patents",
    "AI Platform",
    "Decision Intelligence",
  ],
  authors: [{ name: "Dr. Narasimha Kamath" }],
  openGraph: {
    title: "Dr. Narasimha Kamath — AI, Supply Chain & Cybersecurity",
    description:
      "Technology executive, researcher & practitioner. EVP R&D & Global CISO at o9 Solutions. 12 US Patents. PhD IIM Calcutta (EFMD Award).",
    url: "https://narasimhakamath.ai",
    siteName: "Narasimha Kamath",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Narasimha Kamath — AI, Supply Chain & Cybersecurity",
    description:
      "Technology executive, researcher & practitioner. EVP R&D & Global CISO at o9 Solutions. 12 US Patents. PhD IIM Calcutta (EFMD Award).",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
