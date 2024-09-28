"use client";

import { CTAButton } from "@/shared";
import { classify } from "@/shared/styles/utils/classify";
import { useRouter } from "next/navigation";

export const CTASection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div
      className={classify({
        layout: "grid grid-cols-1 bg-base-300",
        spacing: "gap-8 md:gap-16 lg:gap-10",
        padding: "py-16 md:py-60 lg:py-60",
        alignment: "place-items-center",
        position: "relative",
        sizes: "h-screen",
      })}
    >
      <div className="col-span-12 flex max-w-5xl flex-col items-center text-center">
        <h2 className="mb-24 text-6xl font-bold leading-tight">
          Делай то, что реально хотят твои клиенты
        </h2>
        <CTAButton onClick={handleClick}>Собрать фидбек бесплатно</CTAButton>
      </div>
    </div>
  );
};
