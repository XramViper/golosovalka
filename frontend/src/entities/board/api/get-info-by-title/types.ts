import { IPost } from "@/entities/post";
import { ResponseHttp } from "@/shared";
import { Types } from "mongoose";

// type Comment = {
//   id: string;
//   text: string;
// };

type Posts = {
  id: string;
  title: string;
  translitted_title: string;
  description?: string;
  comments: Types.ObjectId[];
  status: IPost["status"];
  upvotes: number;
  isUpvoted: boolean;
};

export type Board = {
  id: string;
  title: string;
  translittedTitle: string;
  posts: Posts[];
};

export type ResponseData = Board;

export type Response = ResponseHttp<Board>;
