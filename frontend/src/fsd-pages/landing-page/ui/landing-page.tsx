import {
  FeaturesSection,
  HeroCard,
  PriceSection,
  ProblemSection,
  CTASection,
  FooterSection,
} from "@/features";
import { SmoothScroll } from "@/shared";
import React from "react";

export const LandingPage = () => {
  return (
    <div className="bg-base-100">
      <SmoothScroll>
        <HeroCard />

        <ProblemSection />

        <FeaturesSection />

        <PriceSection />

        <CTASection />

        <FooterSection />
      </SmoothScroll>
    </div>
  );
};
