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
    <div className="flex w-full max-w-[600px] flex-col gap-4 overflow-hidden px-6">
      <VoteCard title="🎥 Youtube Канал" />
      <VoteCard title="🍔 Бар «Carolina Reaper»" />
      <VoteCard title="🎁 Что подарить на День Рождения?" />
      <VoteCard title=".. Еще что-то" />
    </div>
  );
}

interface VoteCardProps {
  title: string;
}

function VoteCard({ title }: VoteCardProps) {
  return (
    <div className="rounded-lg bg-base-200 p-4">
      <h3 className="mb-2 font-semibold">{title}</h3>
    </div>
  );
}
