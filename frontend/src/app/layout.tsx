import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/features";
import clsx from "clsx";

const font = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Голосовалка",
  description: "Бесплатное онлайн-голосование",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="ru">
      <body className={clsx(font.className)}>
        <div className="bg-base-200">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
