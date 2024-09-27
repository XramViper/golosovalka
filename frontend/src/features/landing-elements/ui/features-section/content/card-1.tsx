import { classify } from "@/shared";
import { FeatureCard } from "../feature-card";

export function Card1() {
  return (
    <FeatureCard
      className={classify({
        layout: "col-span-1",
      })}
      title="Собери обратную связь"
      description="Используйте Голосовалку, чтобы пользователи могли предложить свои идеи."
      content={
        <div
          className={classify({
            sizes: "h-full w-full",
            transform: "translate-x-12",
            borders: "rounded-t-box",
            colors: "bg-base-300",
            padding: "p-6",
          })}
        >
          <p
            className={classify({
              typography: "text-sm font-medium uppercase tracking-wide",
              colors: "text-base-content/60",
              spacing: "mb-3",
            })}
          >
            Предложить идею
          </p>
          <div
            className={classify({
              layout: "relative",
              sizes: "h-full",
              colors: "bg-base-300",
              padding: "mr-12 py-4",
              borders: "group-hover:border-base-content/10",
              other: "textarea",
            })}
          >
            <div
              className={classify({
                layout: "flex items-center",
                position: "absolute left-4 top-4",
              })}
            >
              <span>Добавьте</span>
              <span
                className={classify({
                  sizes: "h-6 w-[2px]",
                  colors: "bg-primary",
                  effects: "animate-pulse group-hover:hidden",
                })}
              ></span>
            </div>
            <div
              className={classify({
                effects: "opacity-0 group-hover:opacity-100",
                transitions: "duration-200",
              })}
            >
              Добавьте вход через сторонние сервисы. Неудобно вводить логин и
              пароль.
              <span
                className={classify({
                  sizes: "h-6 w-[2px]",
                  colors: "bg-primary",
                  effects: "animate-pulse",
                })}
              ></span>
            </div>

            <button
              className={classify({
                layout: "btn btn-primary",
                position: "absolute bottom-6 right-4",
                effects: "opacity-0 shadow-lg group-hover:opacity-100",
                transitions: "duration-200",
              })}
            >
              Предложить
            </button>
          </div>
        </div>
      }
    />
  );
}
