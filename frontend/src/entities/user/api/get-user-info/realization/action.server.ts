import { getServerSession } from "next-auth";
import { getAuthErrorResponse } from "@/shared/api/getErrorResponse";
import { getSuccessResponse } from "@/shared/api/getSuccessResponse";

export const actionServer = async () => {
  const res = await getServerSession();

  // Not Authorizd
  if (!res?.user) {
    return await getAuthErrorResponse();
  }

  const { name, email, image } = res.user;

  const data = {
    displayName: (name || email) ?? "Anonymous",
    picture: image ?? null,
    name: name ?? null,
    email: email ?? null,
  };

  return await getSuccessResponse(data);
};
