"use client";

import { UpvoteButton } from "@/entities/post/ui/upvote-button";
import clsx from "clsx";
import { useState } from "react";

export const HeroCard = () => {
  return (
    <div
      className={clsx(
        "py-8 lg:py-16 lg:py-32",
        "min-h-[calc(100vh-10rem)]",
        "grid grid-cols-1 lg:grid-cols-12",
        "gap-8 lg:gap-16 lg:gap-32",
        "place-items-center"
      )}
    >
      <Posts />
      <Description />
    </div>
  );
};

function Posts() {
  return (
    <div className="px-0 sm:px-4 col-span-1 lg:col-span-5 w-full order-2 lg:order-1">
      <div className="rounded-xl p-4 lg:p-8 py-6 bg-base-200">
        <h3 className="text-lg font-bold pb-4">Последние предложения</h3>
        <div className="flex flex-col gap-4">
          <PostCard
            title="Онлайн оплата"
            description="15% моих клиентов хотят эквайринг, с его помощью я увеличу продажи"
            count={89}
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
          />
        </div>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="px-4 col-span-1 lg:col-span-6 flex flex-col gap-6 lg:gap-8 order-1 lg:order-2 text-center lg:text-left">
      <h1 className="text-3xl lg:text-4xl lg:text-5xl leading-tight font-extrabold">
        Делай то, что <span className="text-primary">реально </span> хотят твои
        клиенты
      </h1>

      <p className="text-base lg:text-lg text-slate-500 pb-2 lg:pb-4 leading-relaxed">
        Собирай отзывы от своих клиентов, правильно расставляй приоритеты и
        создавай продукт, который пользователи полюбят
      </p>

      <div className="flex flex-col items-center lg:items-start gap-4">
        <button className="w-full lg:w-fit btn h-fit btn-primary font-black text-base lg:text-lg bg-white text-base-100 border-none hover:bg-slate-100 hover:text-base-100 px-4 lg:px-6 pt-3 pb-4">
          Собрать фидбэк бесплатно
        </button>
        <p className="text-sm lg:text-base text-slate-500">
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
};

export function PostCard({ title, description, count }: PostCardProps) {
  const [isUpvoted, setIsUpvoted] = useState(false);

  return (
    <div
      className="flex flex-row bg-base-100 rounded-box p-4 lg:p-6 duration-200 hover:shadow-lg cursor-pointer justify-between items-start lg:items-center gap-4"
      title="Перейти к посту"
    >
      <div>
        <div className="font-bold mb-0.5 flex gap-4 items-start">{title}</div>
        <div className="text-sm lg:text-base text-slate-500 leading-relaxed mb-2">
          {description}
        </div>
      </div>
      <div
        onClick={() => setIsUpvoted(!isUpvoted)}
        className="self-end lg:self-auto"
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
