import { QueryClient } from "@tanstack/react-query";
import { prefetchResponseParse } from "@/shared/api/prefetchResponseParse";
import { getBoardInfoByIdQueryKey } from "./key";
import { getBoardInfoById } from "../action";

export const prefetchBoardsInfoByIdQuery = async (
  boardId: string,
  queryClient: QueryClient
) => {
  await queryClient.prefetchQuery({
    queryKey: getBoardInfoByIdQueryKey(boardId),
    queryFn: async () => {
      const response = (await getBoardInfoById(boardId)) as Response;
      return prefetchResponseParse(response);
    },
  });
};
