"use client";
import { useQuery } from "@tanstack/react-query";
import { getBoardsList } from "../realization";
import { getBoardsListQueryKey } from "./getBoardsListQueryKey";

export const useBoardsList = () => {
  return useQuery({
    queryKey: getBoardsListQueryKey(),
    queryFn: getBoardsList,
  });
};
