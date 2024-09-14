import { ResponseHttp } from "@/shared";

type Board = {
  id: number;
  title: string;
};

export type Response = ResponseHttp<Board[]> | undefined;
