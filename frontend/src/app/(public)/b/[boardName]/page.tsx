import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import { BoardPublicPage } from "./_client";
import { prefetchBoardsInfoByTitleQuery } from "@/entities/board/api";

export default async function Page({
  params: { boardName },
}: {
  params: { boardName: string };
}) {
  const queryClient = new QueryClient();

  await prefetchBoardsInfoByTitleQuery(boardName, queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BoardPublicPage boardName={boardName} />
    </HydrationBoundary>
  );
}
