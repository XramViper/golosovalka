import { QueryClient } from "@tanstack/react-query";
import { getUserInfoQueryKey } from "./getUserInfoQueryKey";
import { getUserInfo } from "@/app/api/me/_realization";

export const prefetchUserInfo = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: getUserInfoQueryKey(),
    queryFn: getUserInfo,
  });
};
