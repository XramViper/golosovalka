import { QueryClient } from "@tanstack/react-query";
import { getBoardsListQueryKey } from "./getBoardsListQueryKey";
import { getBoardsList } from "../realization";
import { prefetchResponseParse } from "@/shared/api/prefetchResponseParse";

export const prefetchBoardsListQuery = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: getBoardsListQueryKey(),
    queryFn: async () => {
      const response = (await getBoardsList()) as Response;
      return prefetchResponseParse(response);
    },
  });
};
