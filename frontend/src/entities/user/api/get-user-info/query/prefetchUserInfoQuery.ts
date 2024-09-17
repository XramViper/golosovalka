import { QueryClient } from "@tanstack/react-query";
import { getUserInfo } from "../realization";
import { getUserInfoQueryKey } from "./getUserInfoQueryKey";
import { prefetchResponseParse } from "@/shared/api/prefetchResponseParse";

export const prefetchUserInfoQuery = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: getUserInfoQueryKey(),
    queryFn: async () => {
      const response = (await getUserInfo()) as Response;
      return prefetchResponseParse(response);
    },
  });
};
