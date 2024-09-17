import { ResponseHttp } from "@/shared";

type ResponseData = {
  id: string;
  title: string;
};

export type Response = ResponseHttp<ResponseData>;

export type Request = {
  title: string;
};
