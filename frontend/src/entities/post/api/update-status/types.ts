import { ResponseHttp } from "@/shared";

export type BoardInfoOnCreation = {
  id: string;
  title: string;
};

export type Response = ResponseHttp<BoardInfoOnCreation>;

export type Request = {
  boardId: string;
  title: string;
  description?: string;
};
