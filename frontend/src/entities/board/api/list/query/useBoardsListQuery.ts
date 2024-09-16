"use client";
import { useQuery } from "@tanstack/react-query";
import { getBoardsList } from "../realization";
import { getBoardsListQueryKey } from "./getBoardsListQueryKey";
import { Response } from "../realization/response";

export const useBoardsListQuery = () => {
  return useQuery({
    queryKey: getBoardsListQueryKey(),
    queryFn: getBoardsList,
    select: getData,
  });
};

function getData(data: Response) {
  return data?.data;
}
