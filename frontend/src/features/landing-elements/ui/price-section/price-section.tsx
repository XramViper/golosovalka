"use client";

import { classify } from "@/shared/styles/utils/classify";

export const PriceSection = () => {
  return (
    <div
      className={classify({
        layout: "grid grid-cols-1 bg-base-100",
        spacing: "gap-8 md:gap-16 lg:gap-10",
        padding: "lg:py-30 py-16 md:py-24",
        alignment: "place-items-center",
        position: "relative",
      })}
    >
      <div className="col-span-12 max-w-5xl gap-8 text-center">
        <span className="text-2xl font-bold">
          Цена?&nbsp;
          <span className="text-2xl font-normal">
            А ее нет, потому что Голосовалка полностью бесплатная 💜
          </span>
        </span>
      </div>
    </div>
  );
};
