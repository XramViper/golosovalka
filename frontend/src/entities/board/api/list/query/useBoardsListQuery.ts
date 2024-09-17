"use client";
import { useQuery } from "@tanstack/react-query";
import { getBoardsListQueryKey } from "./key";
import { getBoardsList } from "../action";

export const useBoardsListQuery = () => {
  return useQuery({
    queryKey: getBoardsListQueryKey(),
    queryFn: getBoardsList,
  });
};
