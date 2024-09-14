import { QueryClient } from "@tanstack/react-query";
import { getUserInfo } from "../realization";
import { getUserInfoQueryKey } from "./getUserInfoQueryKey";

export const prefetchUserInfoQuery = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: getUserInfoQueryKey(),
    queryFn: getUserInfo,
  });
};
