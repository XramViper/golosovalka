"use client";

import { UpvoteButton } from "@/entities/post/ui/upvote-button";
import { useState } from "react";
import { classify } from "@/shared/styles/utils/classify";
import { Arrow } from "@/shared";

export const HeroCard = () => {
  return (
    <div
      className={classify({
        layout: "mx-auto grid grid-cols-1 max-lg:max-w-xl lg:grid-cols-12",
        spacing: "gap-8 md:gap-16 lg:gap-10",
        padding: "py-8 md:py-16 lg:py-24",
        height: "min-h-[calc(100vh-10rem)]",
        alignment: "place-items-center",
      })}
    >
      <Posts />
      <Description />
    </div>
  );
};

function Posts() {
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
              <PostCard
                title="Онлайн оплата"
                description="15% моих клиентов хотят эквайринг, с его помощью я увеличу продажи"
                count={89}
                doThis
              />
              <PostCard
                title="Долгая загрузка сайта"
                description="Изображения много весят, их нужно оптимизировать"
                count={23}
              />
              <PostCard
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

function Description() {
  const handleClick = () => {};

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

type PostCardProps = {
  title: string;
  description: string;
  count: number;
  doThis?: boolean;
  notThis?: boolean;
};

export function PostCard({
  title,
  description,
  count,
  doThis = false,
  notThis = false,
}: PostCardProps) {
  const [isUpvoted, setIsUpvoted] = useState(false);

  return (
    <div
      className={classify({
        layout:
          "relative flex flex-row items-start justify-between lg:items-center",
        spacing: "gap-4",
        padding: "p-4 lg:p-6",
        colors: "bg-base-100",
        borders: "rounded-box",
        effects: "cursor-pointer hover:shadow-lg",
        transitions: "duration-200",
      })}
      title="Перейти к посту"
    >
      {doThis && (
        <div
          className={classify({
            layout: "absolute left-[60%] top-[-25px]",
          })}
        >
          <Arrow
            className={classify({
              layout: "absolute left-[-30px] top-[30px] rotate-180",
              sizes: "h-7 w-7",
            })}
          />
          Делай это ✅
        </div>
      )}
      {notThis && (
        <div
          className={classify({
            layout: "absolute bottom-[-25px] left-[30%]",
          })}
        >
          <Arrow
            className={classify({
              layout: "absolute right-[-30px] top-[-30px]",
              sizes: "h-7 w-7",
            })}
          />
          Не это ❌
        </div>
      )}
      <div>
        <div
          className={classify({
            layout: "flex items-start",
            spacing: "mb-0.5 gap-4",
            typography: "font-bold",
          })}
        >
          {title}
        </div>
        <div
          className={classify({
            spacing: "mb-2",
            typography: "text-sm leading-relaxed lg:text-base",
            colors: "text-slate-500",
          })}
        >
          {description}
        </div>
      </div>
      <div
        onClick={() => setIsUpvoted(!isUpvoted)}
        className={classify({
          alignment: "self-end lg:self-auto",
        })}
      >
        <UpvoteButton
          isUpvoted={isUpvoted}
          count={count + (isUpvoted ? 1 : 0)}
          postId={123}
          boardName="boardName"
          fake
        />
      </div>
    </div>
  );
}
