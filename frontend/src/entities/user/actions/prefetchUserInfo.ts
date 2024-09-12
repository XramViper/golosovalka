import { QueryClient } from "@tanstack/react-query";
import { getUserInfoQueryKey } from "./getUserInfoQueryKey";
import { getServerSession } from "next-auth";
import { UserInfo } from "@/shared/server";

const getUserInfoServer = async (): Promise<UserInfo> => {
  const res = await getServerSession();

  // Not Authorizd
  if (!res?.user) {
    return {
      displayName: "Anonym",
      picture: null,
      name: null,
      email: null,
    };
  }

  const { name, email, image } = res.user;

  return {
    displayName: (name || email) + "From Server" ?? "Anonymous",
    picture: image ?? null,
    name: name ?? null,
    email: email ?? null,
  };
};

export const prefetchUserInfo = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: getUserInfoQueryKey(),
    queryFn: getUserInfoServer,
  });
};
