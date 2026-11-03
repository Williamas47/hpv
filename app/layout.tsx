import type { Metadata } from "next";
import { Lilita_One, Nunito, Patrick_Hand } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const lilita = Lilita_One({
  variable: "--font-lilita",
  weight: "400",
  subsets: ["latin"],
});

const patrick = Patrick_Hand({
  variable: "--font-patrick",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Descomplica HPV",
  description: "Tudo sobre o HPV e a vacina, com quiz para adolescentes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.variable} ${lilita.variable} ${patrick.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-lilac font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
