import { Response } from "./response";

export const actionApi = async (): Promise<Response> => {
  const res = await fetch("/api/board/list");

  const { data: boards } = (await res.json()) as { data: Response };

  if (!boards) {
    return;
  }

  return boards;
};
