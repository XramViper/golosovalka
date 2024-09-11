import { Post } from "@/entities";
import { ChatBubbleLeftIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface PostAdditionalInfoProps {
  upvotes: Post["upvotes"];
  commentsCount: number;
}

export function PostAdditionalInfo(props: PostAdditionalInfoProps) {
  return (
    <div className="text-base-content font-medium flex items-center gap-4">
      <div className="flex gap-1.5 items-center">
        <ChevronUpIcon strokeWidth="3" className="w-4 h-4" />
        {props.upvotes}
      </div>
      <div className="flex gap-1.5 items-center">
        <ChatBubbleLeftIcon strokeWidth="2" className="w-4 h-4" />

        {props.commentsCount}
      </div>
    </div>
  );
}
