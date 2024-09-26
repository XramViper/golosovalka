"use client";

import { classify } from "@/shared/styles/utils/classify";
import { HeroTitleSection } from "./hero-title-section";
import { HeroPosts } from "./hero-posts";

export const HeroCard = () => {
  return (
    <div
      className={classify({
        layout: "mx-auto grid grid-cols-1 max-lg:max-w-xl lg:grid-cols-12",
        spacing: "gap-8 md:gap-16 lg:gap-10",
        padding: "py-8 md:py-16 lg:py-24",
        height: "min-h-[calc(100vh-10rem)]",
        alignment: "place-items-center",
      })}
    >
      <HeroPosts />
      <HeroTitleSection />
    </div>
  );
};
