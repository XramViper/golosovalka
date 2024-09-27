import { classify } from "@/shared";

interface FeedbackItemProps {
  title: string;
  description: string;
  votes: number;
  isVoted: boolean;
  className?: string;
}

export function FeedbackItem({
  title,
  description,
  votes,
  isVoted,
  className,
}: FeedbackItemProps) {
  return (
    <div
      className={classify({
        layout:
          "flex justify-between gap-4 rounded-box bg-base-300 p-4 text-base-content",
        spacing: "mb-2",
        other: className,
      })}
    >
      <div
        className={classify({
          layout: "flex flex-col",
          spacing: "mb-1",
        })}
      >
        <p className="font-semibold">{title}</p>
        <p className="text-base-content-secondary">{description}</p>
      </div>
      {votes > 0 && <VoteButton votes={votes} isVoted={isVoted} />}
    </div>
  );
}

function VoteButton({ votes, isVoted }: { votes: number; isVoted: boolean }) {
  return (
    <button
      className={classify({
        layout:
          "group rounded-box border border-white/10 px-4 py-2 text-center text-lg",
        colors: isVoted
          ? "!border-transparent bg-primary/90"
          : "bg-transparent",
        effects: "duration-150",
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classify({
          effects:
            "h-5 w-5 -translate-y-0.5 duration-150 ease-in-out group-hover:translate-y-0",
        })}
      >
        <path d="m18 15-6-6-6 6"></path>
      </svg>
      {votes}
    </button>
  );
}
