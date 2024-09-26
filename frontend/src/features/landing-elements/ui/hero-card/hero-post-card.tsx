import { useState } from "react";
import { classify } from "@/shared/styles/utils/classify";
import { Arrow } from "@/shared";
import { UpvoteButton } from "@/entities/post/ui/upvote-button";

type PostCardProps = {
  title: string;
  description: string;
  count: number;
  doThis?: boolean;
  notThis?: boolean;
};

export function HeroPostCard({
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
