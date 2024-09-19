import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";

import { Response, ResponseData } from "./types";

export const actionApi = async (boardId: string): Promise<Response> => {
  const response = await fetch(`/api/board/${boardId}/delete`, {
    method: "DELETE",
  });
  return parseServerActionResponse<ResponseData>(response);
};
