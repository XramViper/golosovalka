"use client";

import { Board } from "@/entities/board/api/get-info-by-id/types";
import { PostLink } from "./post-link";
import { PostStatus } from "./post-status";
import { PostAdditionalInfo } from "./post-additional-info";
import { PostContent } from "./post-content";
import { PostTitle } from "./post-title";
import { DeleteButton } from "@/shared";
import { usePostDeleteMutation } from "@/entities/post/api/delete/mutation/client";
import { usePostUpdateStatusMutation } from "@/entities/post/api/update-status/mutation/client";
import { IPost } from "@/entities/post/model/Post";
import { toast } from "react-toastify";

interface Props {
  post: Board["posts"][0];
  boardId: string;
}

export function EditPostCard({ post, boardId }: Props) {
  const { mutate: deletePost, isPending: isDeletePending } =
    usePostDeleteMutation({
      boardId,
      onSuccess: () => {
        toast.success("Пост удален");
      },
    });

  const { mutate: updateStatus, isPending: isUpdatePending } =
    usePostUpdateStatusMutation({
      onSuccess: () => {
        toast.success("Статус поста обновлен");
      },
    });

  const handleStatusChange = (status: IPost["status"]) => {
    updateStatus({ postId: post.id, status, boardId });
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="bg-base-100 p-6 rounded-box flex justify-between items-start">
      <div className="w-full">
        <div className="mb-3">
          <PostTitle title={post.title} />
          <PostContent description={post.description || ""} />
        </div>
        <PostAdditionalInfo
          upvotes={post.upvotes}
          commentsCount={post.comments}
        />
      </div>
      <div className="w-[0px] bg-base-300 h-full mx-6"></div>
      <div className="w-38 shrink-0 flex flex-col gap-2">
        <PostStatus
          onChange={handleStatusChange}
          status={post.status}
          disabled={isUpdatePending}
        />
        <PostLink
          boardTranslitedTitle={boardId}
          postTranslitedTitle={post.translitted_title}
        />
        <DeleteButton
          onClick={handleDelete}
          disabled={isDeletePending}
          title="Удалить пост"
          description="Вы уверены, что хотите удалить пост?"
        />
      </div>
    </div>
  );
}
