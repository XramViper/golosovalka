import { classify } from "@/shared";
import { FeatureCard } from "../feature-card";

export function Card4() {
  return (
    <FeatureCard
      className={classify({
        layout: "col-span-1",
      })}
      title="Множество голосовалок"
      description="Создавайте голосовалочки для различных целей. Ведь это бесплатно!"
      content={<Content />}
    />
  );
}

/**
 * Демонстрирует, что можно создать несколько голосовалок, которые будут использоваться для разных проектов / целей
 * @returns
 */
function Content() {
  return (
    <div className="relative h-[300px] overflow-hidden">
      <div className="flex w-full max-w-[600px] flex-col gap-4 px-6 transition-transform duration-1000 ease-in-out group-hover:-translate-y-[800px]">
        <VoteCard title="🎥 Youtube Канал" />
        <VoteCard title="🎵 Плейлист для вечеринки" />
        <VoteCard title="🎁 Что подарить на День Рождения?" />
        <VoteCard title="🏋️ Фитнес челлендж" />
        <VoteCard title="🏠 Ремонт в квартире" />
        <VoteCard title="🍕 Меню для пиццерии" />
        <VoteCard title="📚 Книжный клуб" />
        <VoteCard title="🍔 Бар «Carolina Reaper»" />
        <VoteCard title="🎮 Игровой стрим" />
        <VoteCard title="🎨 Дизайн логотипа" />
        <VoteCard title="🌱 Эко-инициатива" />
        <VoteCard title="🐾 Приют для животных" />
        <div className="text-center font-bold text-slate-500 py-4">
          ... сколько хочешь!
        </div>
      </div>
    </div>
  );
}

interface VoteCardProps {
  title: string;
}

function VoteCard({ title }: VoteCardProps) {
  return (
    <div className="rounded-lg bg-base-300 p-4">
      <h3 className="mb-2 font-semibold">{title}</h3>
    </div>
  );
}
