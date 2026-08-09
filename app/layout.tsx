import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import image from "@/public/Images/Five.png"

// Charger les polices locales depuis public/Fonts
const nohemi = localFont({
  src: "../public/Fonts/Nohemi/NohemiMedium.ttf",
  variable: "--font-nohemi-medium",
});

const nohemiRegular = localFont({
  src: "../public/Fonts/Nohemi/NohemiRegular.ttf",
  variable: "--font-nohemi-regular",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--Montserrat",
  subsets: ["latin"],
});

// --- CONFIGURATION SEO & MÉTADONNÉES ---
export const metadata: Metadata = {
  title: {
    default: "Eliazar | Développeur Full-Stack Junior",
    template: "%s | Eliazar Portfolio",
  },
  description: "Portfolio officiel d'Eliazar, développeur Full-Stack spécialisé en React, Next.js, et Spring Boot. Découvrez mes projets web et mon parcours en génie logiciel.",
  keywords: [
    "Développeur Full-Stack", 
    "React", 
    "Next.js", 
    "Spring Boot", 
    "TypeScript", 
    "Tailwind CSS", 
    "Portfolio", 
    "Génie Logiciel",
    "Togo"
  ],
  authors: [{ name: "LAYEBE Eliazar" }],
  creator: "KONKA Kokou Antoine Samuel",
  publisher: "LAYEBE Eliazar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Optimisation pour les partages (Open Graph / Réseaux sociaux)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://eliazar-portfolio-two.vercel.app/", // Remplace par ton URL finale une fois déployé
    title: "LAYEBE Eliazar | Développeur Full-Stack Junior",
    description: "Découvrez mon portfolio, mes projets web et mon expertise technique en développement front-end et back-end.",
    siteName: "Eliazar Portfolio",
    images: [
      {
        url:"https://eliazar-portfolio-two.vercel.app/Images/first.png", // Ajoute une image d'aperçu de 1200x630px dans ton dossier public
        width:1920,
        height: 1080,
        alt: "Eliazar - Développeur Full-Stack Portfolio",
      },
    ],
  },
  // Aperçu Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "LAYEBE Eliazar | Développeur Full-Stack Junior",
    description: "Découvrez mon portfolio et mes réalisations en développement web.",
    images: ["https://eliazar-portfolio-two.vercel.app/Images/first.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr" // Passage de l'anglais au français pour correspondre au contenu de ton portfolio
      className={`${montserrat.variable} ${nohemi.variable} ${nohemiRegular.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col portfolio-bg">{children}</body>
    </html>
  );
}