"use server";

import Board from "@/entities/board/model/Board";
import connectDB from "@/shared/server/db/connectDb";
import { getErrorResponse } from "@/shared/api/getErrorResponse";
import { getSuccessResponse } from "@/shared/api/getSuccessResponse";
import { Response } from "./types";
import Post from "@/entities/post/model/Post";

export const actionServer = async (boardTitle: string): Promise<Response> => {
  await connectDB();

  try {
    const currentBoard = await Board.findOne({
      translited_title: boardTitle,
    });

    if (!currentBoard) {
      return await getErrorResponse(404, "Доски не существует");
    }
    const posts = await Post.find({
      _id: { $in: currentBoard.posts },
    });

    const data = {
      id: currentBoard._id,
      title: currentBoard.title,
      translittedTitle: currentBoard.translited_title,
      posts: posts,
    };

    return getSuccessResponse(data);
  } catch (error) {
    return await getErrorResponse(
      400,
      `Ошибка получения информации о доске ${boardTitle}`
    );
  }
};
