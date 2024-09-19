import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";

import { Response, ResponseData } from "./types";

export const actionApi = async (boardTitle: string): Promise<Response> => {
  const response = await fetch(`/api/b/${boardTitle}/info`);
  return parseServerActionResponse<ResponseData>(response);
};
