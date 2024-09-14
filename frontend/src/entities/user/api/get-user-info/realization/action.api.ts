import { Response } from "./response";

export const actionApi = async (): Promise<Response> => {
  const res = await fetch("/api/me");
  const { data: userInfo } = (await res.json()) as { data: Response };

  if (!userInfo) {
    return;
  }

  return {
    ...userInfo,
    displayName: userInfo.displayName,
  };
};
