import { QueryClient } from "@tanstack/react-query";
import { prefetchResponseParse } from "@/shared/api/prefetchResponseParse";
import { getBoardsList } from "../action";
import { getBoardsListQueryKey } from "./key";

export const prefetchBoardsListQuery = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: getBoardsListQueryKey(),
    queryFn: async () => {
      const response = (await getBoardsList()) as Response;
      return prefetchResponseParse(response);
    },
  });
};
