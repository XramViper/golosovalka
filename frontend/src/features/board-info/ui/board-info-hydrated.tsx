"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import { BoardInfo } from "./board-info";
import { prefetchBoardsInfoByIdQuery } from "@/entities/board/api";

interface Props {
  boardId: string;
}

export async function BoardInfoHydrated(props: Props) {
  const { boardId } = props;

  const queryClient = new QueryClient();

  await prefetchBoardsInfoByIdQuery(boardId, queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BoardInfo boardId={boardId} />
    </HydrationBoundary>
  );
}
