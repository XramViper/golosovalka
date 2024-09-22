"use server";

import Board from "@/entities/board/model/Board";
import connectDB from "@/shared/server/db/connectDb";
import { getErrorResponse } from "@/shared/api/getErrorResponse";
import { getSuccessResponse } from "@/shared/api/getSuccessResponse";
import { Board as BoardType, Response } from "./types";
import Post from "@/entities/post/model/Post";
import { getServerSession } from "next-auth";
import User from "@/entities/user/model/User";

export const actionServer = async (boardTitle: string): Promise<Response> => {
  await connectDB();

  try {
    let currentUser = null;

    try {
      const res = await getServerSession();
      currentUser = await User.findOne({ email: res?.user?.email }).then(
        (user) => user
      );
    } catch (error) {
      console.log("error", error);
    }

    const currentBoard = await Board.findOne({
      translited_title: boardTitle,
    });

    if (!currentBoard) {
      return await getErrorResponse(404, "Доски не существует");
    }
    const posts = await Post.find({
      _id: { $in: currentBoard.posts },
    });

    const mappedPosts = posts.map((post) => ({
      id: post._id as string,
      title: post.title ?? "",
      translitted_title: post.translitted_title ?? "",
      description: post.description ?? "",
      comments: post.comments ?? [],
      status: post.status ?? "NEW",
      upvotes: post.upvotes.length ?? 0,
      isUpvoted: post.upvotes.includes(currentUser._id),
    }));

    const data: BoardType = {
      id: currentBoard._id as string,
      title: currentBoard.title,
      translittedTitle: currentBoard.translited_title,
      posts: mappedPosts.filter(
        (post) => post.status !== "CLOSED" && post.status !== "DONE"
      ),
    };

    return getSuccessResponse(data);
  } catch (error) {
    return await getErrorResponse(
      400,
      `Ошибка получения информации о доске ${boardTitle}`
    );
  }
};
