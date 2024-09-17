import { parseResponse } from "@/shared/api/parseResponse";
import { ResponseData } from "../../list/realization/response";
import { Request } from "./types";

export const actionApi = async (data: Request) => {
  const res = await fetch("/api/board/create", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return parseResponse<ResponseData>(res);
};
