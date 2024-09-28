import { classify } from "@/shared";
import { FeatureCard } from "../feature-card";
import { FeedbackItem } from "./feedback-item";

export function Card2() {
  return (
    <FeatureCard
      className={classify({
        layout: "col-span-2",
      })}
      title="Приоритезируйте идеи"
      description="Пользователи проголосуют за нужные функции. Вы знаете, что будете делать дальше."
      content={<FeedbackList />}
    />
  );
}

function FeedbackList() {
  return (
    <div className="flex max-w-[600px] flex-col gap-4 overflow-hidden px-6">
      <FeedbackItem
        title="Добавить интеграцию с ЮMoney на сайт"
        description="Да, это нужно! ✅"
        votes={48}
        isVoted={true}
        className="mb-2 duration-500 group-hover:-mt-36 group-hover:md:-mt-28"
      />
      <FeedbackItem
        title="Добавьте бот помошник на сайт"
        description="Возможно, стоит это сделать 🤔"
        votes={12}
        isVoted={false}
      />
      <FeedbackItem
        title="Обновите UI библиотеку для ваших графиков"
        description="Не делай этого! ❌"
        votes={1}
        isVoted={false}
      />
    </div>
  );
}
