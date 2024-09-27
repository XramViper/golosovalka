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

export function PostCard({ post, boardName }: PostCardProps) {
  const statusText = statusTranslations[post.status];

  return (
    <div className="flex items-center justify-between gap-4 rounded-box bg-base-100 p-6 duration-200 hover:shadow-lg">
      <div>
        <div className="mb-0.5 flex items-start gap-4 font-bold">
          {post.title}
          {statusText && (
            <div className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium uppercase !leading-[24px] tracking-wide text-accent">
              {statusText}{" "}
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
            </div>
          )}
        </div>
        <div className="mb-2 leading-relaxed text-base-content/90">
          {post.description}
        </div>
      </div>
      <UpvoteButton
        isUpvoted={post.isUpvoted}
        count={post.upvotes}
        postId={post.id}
        boardName={boardName}
      />
    </div>
  );
}
