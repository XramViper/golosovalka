"use client";
import { getUserInfoQueryKey } from "./getUserInfoQueryKey";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/app/api/me/_realization";

export const useUserInfoQuery = () => {
  return useQuery({
    queryKey: getUserInfoQueryKey(),
    queryFn: getUserInfo,
  });
};
