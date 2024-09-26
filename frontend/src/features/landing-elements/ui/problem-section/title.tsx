import { TypewriterEffect } from "../typewriter-effect";
import { classify } from "@/shared/styles/utils/classify";

export function Title() {
  return (
    <h2 className="mb-8 text-6xl font-black leading-tight">
      80% проектов терпят неудачу, потому что создатели делают{" "}
      <span className={classify({ colors: "text-error" })}>
        <TypewriterEffect
          words={["бесполезные функции", "неактульный контент", "плохой UX"]}
          loop={true}
          typeSpeed={80}
          deleteSpeed={20}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
}
