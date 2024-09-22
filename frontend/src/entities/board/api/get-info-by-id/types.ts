import { IPost } from "@/entities/post";
import { ResponseHttp } from "@/shared";

export type Board = {
  title: string;
  translittedTitle: string;
  posts: {
    id: string;
    title: string;
    translitted_title: string;
    description: string;
    status: IPost["status"];
    upvotes: number;
    comments: number;
  }[];
};

export type ResponseData = Board;

export type Response = ResponseHttp<Board>;
