import { getServerSession } from "next-auth";
import { AuthMeResponse } from "./getUserInfo.types";

export const getUserInfoServer = async (): Promise<AuthMeResponse> => {
  const res = await getServerSession();

  // Not Authorizd
  if (!res?.user) {
    return;
  }

  const { name, email, image } = res.user;

  return {
    displayName: (name || email) ?? "Anonymous",
    picture: image ?? null,
    name: name ?? null,
    email: email ?? null,
  };
};
