import { ResponseHttp } from "@/shared";

export type Response =
  | ResponseHttp<{
      id: string;
      title: string;
    }>
  | undefined;

export type Request = {
  title: string;
};
