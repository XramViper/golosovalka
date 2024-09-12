import { AuthMeResponse } from "./getUserInfo.types";

export const getUserInfoClient = async (): Promise<AuthMeResponse> => {
  const res = await fetch("/api/me");

  const { userInfo } = (await res.json()) as { userInfo: AuthMeResponse };

  if (!userInfo) {
    return;
  }

  return {
    ...userInfo,
    displayName: userInfo.displayName,
  };
};
