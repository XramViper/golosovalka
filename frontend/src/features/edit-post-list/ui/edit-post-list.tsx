"use client";

import { EditPostCard } from "./edit-post-card";
import { useBoardByIdQuery } from "@/entities/board/api";

type Props = {
  boardId: string;
};

export function EditPostList(props: Props) {
  const { boardId } = props;

  const { data: responseData } = useBoardByIdQuery(boardId);

  const boardInfo = responseData?.data;
  const posts = boardInfo?.posts;

  if (!posts) {
    return null;
  }

  return (
    <section className="flex flex-col gap-6 w-full">
      {posts.map((post) => (
        <EditPostCard key={post.id} post={post} boardId={boardId} />
      ))}
    </section>
  );
}
