import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";
import { BoardInfoOnCreation, Request } from "./types";

export const actionApi = async (data: Request) => {
  const res = await fetch("/api/board/create", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return parseServerActionResponse<BoardInfoOnCreation>(res);
};
