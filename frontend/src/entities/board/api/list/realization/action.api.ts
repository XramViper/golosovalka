import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";
import { ResponseData } from "./response";

export const actionApi = async () => {
  const response = await fetch("/api/board/list");

  return parseServerActionResponse<ResponseData>(response);
};
