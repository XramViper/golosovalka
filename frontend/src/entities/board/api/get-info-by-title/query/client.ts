"use client";

import { useQuery } from "@tanstack/react-query";
import { getBoardInfoByTitleQueryKey } from "./key";
import { getBoardInfoByTitle } from "../action";

export const useBoardByTitleQuery = (boardName?: string) => {
  return useQuery({
    queryKey: getBoardInfoByTitleQueryKey(boardName || "??"),
    queryFn: () => getBoardInfoByTitle(boardName),
    enabled: !!boardName,
  });
};
