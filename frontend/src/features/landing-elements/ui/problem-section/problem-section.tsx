"use client";

import { classify } from "@/shared/styles/utils/classify";
import { Title } from "./title";
import { ProblemWays } from "./problem-ways";

export const ProblemSection = () => {
  return (
    <div
      className={classify({
        layout: "grid grid-cols-1 rounded-t-[100px] bg-base-300",
        spacing: "gap-8 md:gap-16 lg:gap-10",
        padding: "py-16 md:py-24 lg:py-60",
        alignment: "place-items-center",
        position: "relative",
      })}
    >
      <div className="col-span-12 max-w-5xl text-center">
        <Title />
        <ProblemWays />
      </div>
    </div>
  );
};
