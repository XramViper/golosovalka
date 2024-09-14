import { JWT } from "next-auth/jwt";

export type User = {
  displayName?: string;
  picture: string | null;
  name: JWT["name"];
  email: JWT["email"];
};


export type Response = User | undefined;
