/**
 * Эта секция отображает список функций, которые предлагает приложение.
 * Здесь описано, как эти функции решают боли, описанные в проблемной секции.
 * @returns Компонент секции с функциями
 */

import { classify } from "@/shared";
import { Card1 } from "./content/card-1";
import { Card2 } from "./content/card-2";
import { Card3 } from "./content/card-3";
import { Card4 } from "./content/card-4";

export function FeaturesSection() {
  return (
    <section
      className={classify({
        colors: "bg-base-300",
        padding: "py-16",
      })}
    >
      <div
        className={classify({
          layout: "mx-auto",
          borders: "rounded-t-[100px]",
          colors: "bg-base-300",
          padding: "px-24 py-48",
        })}
      >
        <h2
          className={classify({
            typography: "text-center text-5xl font-bold",
            spacing: "mb-12",
          })}
        >
          Делай то, что реально хотят твои клиенты
        </h2>
        <div
          className={classify({
            layout: "grid grid-cols-1 md:grid-cols-3",
            spacing: "gap-4 lg:gap-10",
          })}
        >
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </div>
    </section>
  );
}
