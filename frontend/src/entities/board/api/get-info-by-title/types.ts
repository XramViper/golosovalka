import { ResponseHttp } from "@/shared";

type Comment = {
  id: string;
  text: string;
};

type Status = "NEW" | "IN_PROGRESS" | "DONE" | "CLOSED";

type Posts = {
  id: string;
  title: string;
  translitted_title: string;
  description: string;
  comments: Comment[];
  status: Status;
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
