import { IPost } from "@/entities";
import { Board } from "@/entities/board/api/get-info-by-title/types";
import { UpvoteButton } from "@/entities/post/ui/upvote-button";

interface PostCardProps {
  translittedTitle: string;
  post: Board["posts"][0];
  boardName: string;
}

const statusTranslations: Record<IPost["status"], string | null> = {
  NEW: null,
  IN_PROGRESS: "В работе",
  DONE: null,
  CLOSED: null,
};

export function PostCard({ post, translittedTitle, boardName }: PostCardProps) {
  const statusText = statusTranslations[post.status];

  return (
    <a
      className="flex bg-base-100 rounded-box p-6 duration-200 hover:shadow-lg cursor-pointer justify-between items-center gap-4"
      title="Перейти к посту"
      href={`/b/${translittedTitle}/p/${post.translitted_title}`}
    >
      <div>
        <div className="font-bold mb-0.5 flex gap-4 items-start">
          {post.title}
          {statusText && (
            <div className="flex items-center gap-1.5 uppercase tracking-wide text-sm !leading-[24px] text-accent font-medium whitespace-nowrap">
              {statusText}{" "}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
            </div>
          )}
        </div>
        <div className="text-base-content/90 leading-relaxed mb-2">
          {post.description}
        </div>
        <div className="flex gap-1.5 items-center text-base-content/90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            ></path>
          </svg>
          {post.upvotes}
        </div>
      </div>
      <UpvoteButton
        isUpvoted={post.isUpvoted}
        count={post.upvotes}
        postId={post.id}
        boardName={boardName}
      />
    </a>
  );
}
