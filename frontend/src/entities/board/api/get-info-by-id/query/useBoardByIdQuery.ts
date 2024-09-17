"use client";

import { useQuery } from "@tanstack/react-query";
import { getBoardInfoByIdQueryKey } from "./key";
import { getBoardInfoById } from "../action";

export const useBoardByIdQuery = (boardId: string) => {
  return useQuery({
    queryKey: getBoardInfoByIdQueryKey(boardId),
    queryFn: () => getBoardInfoById(boardId),
  });
};
