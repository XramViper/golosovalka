import { ResponseHttp } from "@/shared";

export type Board = {
  title: string;
  translittedTitle: string;
  posts: [];
};

export type ResponseData = Board;

export type Response = ResponseHttp<Board>;
