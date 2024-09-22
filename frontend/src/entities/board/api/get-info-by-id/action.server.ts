"use server";

import { getServerSession } from "next-auth";
import Board from "@/entities/board/model/Board";
import connectDB from "@/shared/server/db/connectDb";
import User from "@/entities/user/model/User";
import {
  getAuthErrorResponse,
  getErrorResponse,
} from "@/shared/api/getErrorResponse";
import { getSuccessResponse } from "@/shared/api/getSuccessResponse";
import Post from "@/entities/post/model/Post";

// key - boardId или board Translited Title
export const actionServer = async (boardId: string): Promise<Response> => {
  await connectDB();
  const res = await getServerSession();

  // Not Authorizd
  if (!res?.user) {
    return await getAuthErrorResponse();
  }

  const { email } = res.user;

  try {
    const user = await User.findOne({ email });

    const currentBoard = await Board.findOne({
      _id: boardId,
      creator: user._id,
    });

    if (!currentBoard) {
      return await getErrorResponse(404, "Доски с таким ID  не существует");
    }

    // Получаем посты по их ID
    const posts = await Post.find({ _id: { $in: currentBoard.posts } });

    const data = {
      title: currentBoard.title,
      translittedTitle: currentBoard.translited_title,
      posts: posts.map((post) => ({
        id: post._id,
        title: post.title,
        translitted_title: post.translitted_title,
        description: post.description,
        status: post.status,
        upvotes: post.upvotes.length,
        comments: post.comments.length,
      })),
    };

    return getSuccessResponse(data);
  } catch (error) {
    return await getErrorResponse(
      400,
      `Ошибка получения информации о доске ${boardId}`
    );
  }
};
