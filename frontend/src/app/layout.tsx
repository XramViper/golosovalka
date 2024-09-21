import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, SignInModal } from "@/features";
import clsx from "clsx";
import Providers from "@/config/Providers";

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
    <html data-theme="dark" lang="ru">
      <body className={clsx(font.className)}>
        <Providers>
          <div className="bg-base-200">
            <Header />
            {children}
            <SignInModal />
          </div>
        </Providers>
      </body>
    </html>
  );
}
