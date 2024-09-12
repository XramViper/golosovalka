import { getToken, JWT } from "next-auth/jwt";
import { NextRequest } from "next/server";

export type UserInfo = {
  displayName?: string;
  picture: string | null;
  name: JWT["name"];
  email: JWT["email"];
};

export const getUserSession = async (
  request: NextRequest
): Promise<UserInfo | undefined> => {
  const token = await getToken({ req: request });
  if (token) {
    return {
      displayName: token.name || token.email || "Аноним",
      name: token.name,
      email: token.email,
      picture: token?.picture ?? null,
    };
  }
};
