"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import { prefetchBoardsInfoByIdQuery } from "@/entities/board/api";
import { DashboardAdminPage } from "./dashboard-admin-page";

interface Props {
  boardId: string;
}

export async function DashboardAdminPageHydrated(props: Props) {
  const { boardId } = props;

  const queryClient = new QueryClient();

  await prefetchBoardsInfoByIdQuery(boardId, queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardAdminPage boardId={boardId} />
    </HydrationBoundary>
  );
}
