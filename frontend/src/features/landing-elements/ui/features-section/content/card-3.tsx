"use client";

import { classify } from "@/shared";
import { FeatureCard } from "../feature-card";
import { useState } from "react";

export function Card3() {
  return (
    <FeatureCard
      groupId={""}
      className={classify({
        layout: "col-span-2",
      })}
      title="Поделитель прогрессом"
      description="Покажите клиентам, что их идеи в работе"
      content={<Content />}
    />
  );
}

/**
 * Список постов с возможностью изменения статуса
 */
function Content() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Добавить темную тему", status: "NEW" },
    { id: 2, title: "Интеграция с Telegram", status: "NEW" },
    { id: 3, title: "Улучшить мобильную версию", status: "NEW" },
  ]);

  const toggleStatus = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, status: post.status === "NEW" ? "IN_PROGRESS" : "NEW" }
          : post,
      ),
    );
  };

  return (
    <div className="flex w-full max-w-[600px] flex-col gap-4 overflow-hidden px-6">
      {posts.map((post) => (
        <div
          className={classify({
            layout: "flex items-center justify-between gap-16",
            colors: "bg-base-300 p-4 text-base-content",
            effects: "rounded-box",
            sizes: "w-full",
            other: "group",
          })}
          key={post.id}
        >
          <h4 className="flex h-[40px] w-full items-center justify-between text-xl font-semibold">
            {post.title}
            {post.status === "IN_PROGRESS" && (
              <span
                className={classify({
                  typography: "text-lg",
                  colors: "text-emerald-500",
                  effects: `ml-8 duration-150`,
                })}
              >
                •&nbsp;&nbsp;В процессе
              </span>
            )}
          </h4>

          {post.status === "NEW" && (
            <button
              className={classify({
                layout: "min-w-max",
                colors: "bg-primary text-primary-content",
                effects: "hover:bg-primary-focus rounded px-4 py-2",
              })}
              onClick={() => toggleStatus(post.id)}
            >
              Взять в работу
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
