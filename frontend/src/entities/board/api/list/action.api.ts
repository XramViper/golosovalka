import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";

import { Response, ResponseData } from "./types";

export const actionApi = async (): Promise<Response> => {
  const response = await fetch("/api/board/list");
  return parseServerActionResponse<ResponseData>(response);
};
