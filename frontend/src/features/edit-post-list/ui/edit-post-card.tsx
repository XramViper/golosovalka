"use client";

import { Post } from "@/entities";
import { PostLink } from "./post-link";
import { PostStatus } from "./post-status";
import { PostAdditionalInfo } from "./post-additional-info";
import { PostContent } from "./post-content";
import { PostTitle } from "./post-title";
import { DeleteButton } from "@/shared";

interface Props {
  post: Post;
}

export function EditPostCard({ post }: Props) {
  const handleStatusChange = (status: Post["status"]) => {
    // update
  };

  return (
    <div className="bg-base-100 p-6 rounded-box flex justify-between items-start">
      <div className="w-full">
        <div className="mb-3">
          <PostTitle title={post.name} />
          <PostContent description={post.description} />
        </div>
        <PostAdditionalInfo
          upvotes={post.upvotes}
          commentsCount={post.comments.length}
        />
      </div>
      <div className="w-[0px] bg-base-300 h-full mx-6"></div>
      <div className="w-38 shrink-0 flex flex-col gap-2">
        <PostStatus onChange={handleStatusChange} status={post.status} />
        <PostLink />
        <DeleteButton
          onClick={function (): void {
            throw new Error("Edit client card not implemented.");
          }}
        />
      </div>
    </div>
  );
}
