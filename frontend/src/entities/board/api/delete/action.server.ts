"use server";

import { getServerSession } from "next-auth";
import Board from "@/entities/board/model/Board";
import Post from "@/entities/post/model/Post"; // Импортируем модель Post
import connectDB from "@/shared/server/db/connectDb";
import User from "@/entities/user/model/User";
import {
  getAuthErrorResponse,
  getErrorResponse,
} from "@/shared/api/getErrorResponse";
import { getSuccessResponse } from "@/shared/api/getSuccessResponse";
import { Response } from "./types";

export const actionServer = async (boardId: string): Promise<Response> => {
  await connectDB();
  const res = await getServerSession();

  // Not Authorized
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
      return await getErrorResponse(404, "Доски с таким ID не существует");
    }

    const posts = currentBoard.posts;

    // Удаляем все посты, связанные с доской
    await Post.deleteMany({ _id: { $in: posts } });

    // Удаляем саму доску
    await Board.deleteOne({ _id: boardId, creator: user._id });

    return getSuccessResponse({
      message: "Доска и связанные с ней посты успешно удалены",
    });
  } catch (error) {
    return await getErrorResponse(
      400,
      `Ошибка получения информации о доске с ID ${boardId}`
    );
  }
};
