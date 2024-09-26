import { FeaturesSection, HeroCard, ProblemSection } from "@/features";
import { SmoothScroll } from "@/shared";
import React from "react";

export const LandingPage = () => {
  return (
    <div className="bg-base-100">
      <SmoothScroll>
        <HeroCard />
        <ProblemSection />
        <FeaturesSection />
        {/* Отзывы */}

        {/* FAQ */}

        {/* Использовать */}

        {/* Футер */}
      </SmoothScroll>
    </div>
  );
};
