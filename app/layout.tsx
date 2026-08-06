import localFont from "next/font/local";
import "./globals.css";

// Charger les polices locales depuis public/Fonts
const nohemi = localFont({
  src: "../public/Fonts/Nohemi/NohemiMedium.ttf", // Ajustez le nom exact du fichier ttf/woff2
  variable: "--font-nohemi-medium",
});

const nohemiRegular = localFont({
  src: "../public/Fonts/Nohemi/NohemiRegular.ttf", // Ajustez le chemin vers Delight
  variable: "--font-nohemi-regular",
  display: "swap",
});

export const metadata = {
  title: "Layebe Eliazar - Portfolio",
  description: "Junior Front dev based in Lome",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${nohemi.variable} ${nohemiRegular.variable}`}>
      <body className="bg-white text-black antialiased font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
