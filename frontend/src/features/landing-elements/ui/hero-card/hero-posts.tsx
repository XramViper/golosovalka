import { classify } from "@/shared/styles/utils/classify";
import { HeroPostCard } from "./hero-post-card";

export function HeroPosts() {
    return (
      <div
        className={classify({
          layout:
            "order-2 col-span-1 w-full px-0 sm:px-4 lg:order-1 lg:col-span-6",
          padding: "p-4 py-6 lg:p-8",
        })}
      >
        <div className="mockup-browser border border-base-300 bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">golosovalka.com</div>
          </div>
          <div className="flex justify-center bg-base-200">
            <div
              className={classify({
                layout: "rounded-xl",
                colors: "bg-base-200",
                padding: "p-4 py-6 lg:p-8",
              })}
            >
              <h3
                className={classify({
                  spacing: "pb-6",
                  typography: "text-lg font-bold",
                })}
              >
                Последние предложения
              </h3>
              <div
                className={classify({
                  layout: "flex flex-col",
                  spacing: "gap-4",
                })}
              >
                <HeroPostCard
                  title="Онлайн оплата"
                  description="15% моих клиентов хотят эквайринг, с его помощью я увеличу продажи"
                  count={89}
                  doThis
                />
                <HeroPostCard
                  title="Долгая загрузка сайта"
                  description="Изображения много весят, их нужно оптимизировать"
                  count={23}
                />
                <HeroPostCard
                  title="Темная тема"
                  description="Я вообще мимокрокодил"
                  count={1}
                  notThis
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }