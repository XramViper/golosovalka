import { ResponseData } from "./response";
import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";

export const actionApi = async () => {
  const res = await fetch("/api/me");

  return parseServerActionResponse<ResponseData>(res);
};
