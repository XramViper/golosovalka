"use client";

import { classify } from "@/shared/styles/utils/classify";
import { useRouter } from "next/navigation";

export function HeroTitleSection() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div
      className={classify({
        layout: "order-1 col-span-1 flex flex-col lg:order-2 lg:col-span-6",
        spacing: "gap-6 lg:gap-8",
        padding: "px-4",
        alignment: "text-center lg:text-left",
      })}
    >
      <h1
        className={classify({
          typography:
            "text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl",
        })}
      >
        Делай то, что{" "}
        <span className={classify({ colors: "text-primary" })}>реально </span>{" "}
        хотят твои клиенты
      </h1>

      <p
        className={classify({
          spacing: "pb-2 lg:pb-4",
          typography: "text-base leading-relaxed lg:text-lg",
          colors: "text-slate-500",
        })}
      >
        Собирай отзывы от своих клиентов, правильно расставляй приоритеты и
        создавай продукт, который пользователи полюбят
      </p>

      <div
        className={classify({
          layout: "flex flex-col",
          spacing: "gap-4",
          alignment: "items-center lg:items-start",
        })}
      >
        <button
          onClick={handleClick}
          className={classify({
            layout: "btn btn-primary h-fit w-full lg:w-fit",
            borders: "border-none",
            colors:
              "bg-white text-base-100 hover:bg-slate-100 hover:text-base-100",
            padding: "px-4 pb-4 pt-3 lg:px-6",
            typography: "text-base font-black lg:text-lg",
          })}
        >
          Собрать фидбэк бесплатно
        </button>
        <p
          className={classify({
            typography: "text-sm lg:text-base",
            colors: "text-slate-500",
          })}
        >
          Это 100% бесплатно. Серьезно.
        </p>
      </div>
    </div>
  );
}
