"use client";
import { getUserInfoQueryKey } from "./getUserInfoQueryKey";
import { useQuery } from "@tanstack/react-query";
import { UserInfo } from "@/shared/server";

export const fetchUserInfo = async (): Promise<UserInfo> => {
  const res = await fetch("/api/me");
  const { userInfo } = (await res.json()) as { userInfo: UserInfo };

  return { ...userInfo, displayName: userInfo.displayName + "From Client" };
};

export const useUserInfoQuery = () => {
  return useQuery<UserInfo>({
    queryKey: getUserInfoQueryKey(),
    queryFn: () => fetchUserInfo(),
  });
};
