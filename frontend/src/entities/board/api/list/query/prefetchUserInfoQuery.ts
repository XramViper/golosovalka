import { QueryClient } from "@tanstack/react-query";
import { getBoardsListQueryKey } from "./getBoardsListQueryKey";
import { getBoardsList } from "../realization";

export const prefetchUserInfoQuery = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: getBoardsListQueryKey(),
    queryFn: getBoardsList,
  });
};
