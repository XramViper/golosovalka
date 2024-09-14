"use client";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../realization";
import { getUserInfoQueryKey } from "./getUserInfoQueryKey";

export const useUserInfoQuery = () => {
  return useQuery({
    queryKey: getUserInfoQueryKey(),
    queryFn: getUserInfo,
  });
};
