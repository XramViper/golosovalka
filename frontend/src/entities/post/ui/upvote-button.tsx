"use client";

import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { MouseEvent } from "react";
import { IPost } from "../model";
import { usePostUpvoteMutation } from "../api/upvote/mutation/client";

interface UpvoteButtonProps {
  count: number;
  isUpvoted: boolean;
  postId: IPost["id"];
  boardName: string;
}

export const UpvoteButton = ({
  count,
  isUpvoted,
  postId,
  boardName,
}: UpvoteButtonProps) => {
  const { mutate: upvotePost, isPending } = usePostUpvoteMutation(boardName);

  const handleUpvote = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    upvotePost(postId);
  };

  return (
    <button
      onClick={handleUpvote}
      disabled={isPending}
      className={`px-4 py-2 rounded-box group text-center text-lg duration-150 border
        ${
          isUpvoted
            ? "border-transparent bg-primary text-primary-content"
            : "border-base-content/10 bg-base-100 text-base-content"
        }
        ${isPending ? "opacity-50 cursor-not-allowed" : null}`}
      title="Проголосовать за пост"
    >
      <ChevronUpIcon
        strokeWidth="2.5"
        className={`w-5 h-5 ease-in-out duration-150 -translate-y-0.5 
          ${isPending ? "" : "group-hover:translate-y-0"}`}
      />

      {count}
    </button>
  );
};
