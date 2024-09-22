"use client";

import { PostCard } from "./post-card";
import { useBoardByTitleQuery } from "@/entities/board/api";

type Props = {
  boardName: string;
};

export function PostList(props: Props) {
  const { boardName } = props;

  const { data, isFetching } = useBoardByTitleQuery(boardName);

  const boardInfo = data?.data;
  if (!boardInfo) {
    return null;
  }

  const { posts, translittedTitle } = boardInfo;

  return (
    <div
      style={{
        opacity: isFetching ? 0.5 : 1,
      }}
      className="space-y-6 col-span-full md:col-span-4"
    >
      {posts.map((post) => (
        <PostCard
          translittedTitle={translittedTitle}
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}
