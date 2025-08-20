import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

// ✅ Importamos Albert Sans
const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // puedes añadir más si ocupas
  variable: "--font-albert",     // definimos variable CSS
});

export const metadata: Metadata = {
  title: "Dr Juan Diego López",
  description: "Sitio oficial del Dr Juan Diego López Vega",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${albert.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
