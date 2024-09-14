import { Request, Response } from "./types";

export const actionApi = async (data: Request): Promise<Response> => {
  const res = await fetch("/api/board/create", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const { data: board } = (await res.json()) as { data: Response };

  return board;
};
