import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { Post } from "../model";
import { MouseEvent } from "react";

interface UpvoteButtonProps {
  count: number;
  isUpvoted: boolean;
  postId: Post["id"];
}

export const UpvoteButton = ({
  count,
  isUpvoted,
  postId,
}: UpvoteButtonProps) => {
  const handleUpvote = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(`Upvoting post with id: ${postId}`);
  };

  return (
    <button
      onClick={handleUpvote}
      className={`px-4 py-2 rounded-box group text-center text-lg duration-150 border ${
        isUpvoted
          ? "border-transparent bg-primary text-primary-content"
          : "border-base-content/10 bg-base-100 text-base-content"
      }`}
      title="Upvote post"
    >
      <ChevronUpIcon
        strokeWidth="2.5"
        className="w-5 h-5 ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
      />

      {isUpvoted ? count + 1 : count}
    </button>
  );
};
