import { Arrow } from "@/shared";
import { classify } from "@/shared/styles/utils/classify";

export function ProblemWays() {
  const nextArrow = (
    <Arrow
      className={classify({
        layout: "absolute right-[-50px] top-[-30px] rotate-45",
        sizes: "h-20 w-20",
        colors: "opacity-20",
      })}
    />
  );

  return (
    <div className="mt-32 grid grid-cols-3 gap-8">
      <div className="relative flex flex-col items-center">
        <span className="mb-4 text-5xl">😃</span>
        <p className="text-lg">Запускают новые функции</p>
        {nextArrow}
      </div>
      <div className="relative flex flex-col items-center">
        <span className="mb-4 text-5xl">😐</span>
        <p className="text-lg">Но ничего не происходит</p>
        {nextArrow}
      </div>
      <div className="flex flex-col items-center">
        <span className="mb-4 text-5xl">😞</span>
        <p className="text-lg">Теряют мотивацию и уходят</p>
      </div>
    </div>
  );
}
