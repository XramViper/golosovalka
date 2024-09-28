"use client";

import { classify } from "@/shared/styles/utils/classify";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <div
      className={classify({
        layout: "grid grid-cols-1 bg-base-300",
        spacing: "gap-8 md:gap-16 lg:gap-10",
        padding: "py-8 md:py-12 lg:py-24",
        alignment: "place-items-center",
        position: "relative",
        borders: "border-t border-slate-800",
      })}
    >
      <div className="col-span-12 mx-auto flex w-full max-w-7xl justify-between">
        <Link
          href="https://t.me/your_telegram_channel"
          className="flex text-white hover:text-gray-200"
        >
          Telegram
        </Link>
        <Link
          href="/privacy-policy"
          className="flex text-white hover:text-gray-200"
        >
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  );
};
