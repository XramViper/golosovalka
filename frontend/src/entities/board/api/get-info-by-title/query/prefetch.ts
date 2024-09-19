import { QueryClient } from "@tanstack/react-query";
import { prefetchResponseParse } from "@/shared/api/prefetchResponseParse";
import { getBoardInfoByTitleQueryKey } from "./key";
import { getBoardInfoByTitle } from "../action";

export const prefetchBoardsInfoByTitleQuery = async (
  boardTitle: string,
  queryClient: QueryClient
) => {
  await queryClient.prefetchQuery({
    queryKey: getBoardInfoByTitleQueryKey(boardTitle),
    queryFn: async () => {
      const response = (await getBoardInfoByTitle(boardTitle)) as Response;
      return prefetchResponseParse(response);
    },
  });
};
