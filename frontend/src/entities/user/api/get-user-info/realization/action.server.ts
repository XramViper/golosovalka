import { getServerSession } from "next-auth";
import { Response } from "./response";

export const actionServer = async (): Promise<Response> => {
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
