import { User } from "../../../model/User";
import { Response } from "./response";

export const actionApi = async (): Promise<User | undefined> => {
  const res = await fetch("/api/me");
  const { userInfo } = (await res.json()) as { userInfo: Response };

  if (!userInfo) {
    return;
  }

  return {
    ...userInfo,
    displayName: userInfo.displayName,
  };
};
