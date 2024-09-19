import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";
import { BoardInfoOnCreation, Request } from "./types";

export const actionApi = async (data: Request) => {
  const res = await fetch(`/api/b/${data.boardId}/p/create`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return parseServerActionResponse<BoardInfoOnCreation>(res);
};
