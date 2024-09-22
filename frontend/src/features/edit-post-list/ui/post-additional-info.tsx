import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

interface PostAdditionalInfoProps {
  upvotes: number;
  commentsCount: number;
}

export function PostAdditionalInfo({
  upvotes,
  commentsCount,
}: PostAdditionalInfoProps) {
  return (
    <div className="text-base-content font-medium flex items-center gap-4">
      <div className="flex gap-1.5 items-center">
        <span className="font-medium text-neutral-500">
          Голосов&nbsp;&nbsp;{upvotes}
        </span>
      </div>
      {commentsCount > 0 && (
        <div className="flex gap-1.5 items-center">
          <ChatBubbleLeftIcon strokeWidth="2" className="w-4 h-4" />
          {commentsCount}
        </div>
      )}
    </div>
  );
}
