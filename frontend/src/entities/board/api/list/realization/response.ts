import { ResponseHttp } from "@/shared";

export type Board = {
  id: number;
  title: string;
};

export type ResponseData = Board[];

export type Response = ResponseHttp<ResponseData>;
