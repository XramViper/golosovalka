import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import { BoardList } from "./board-list";
import { prefetchBoardsListQuery } from "@/entities/board/api";

export async function BoardListHydrated() {
  const queryClient = new QueryClient();

  await prefetchBoardsListQuery(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BoardList />
    </HydrationBoundary>
  );
}
