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

    const data = {
      title: currentBoard.title,
      translittedTitle: currentBoard.translited_title,
      posts: currentBoard.posts,
    };

    return getSuccessResponse(data);
  } catch (error) {
    return await getErrorResponse(
      400,
      `Ошибка получения информации о доске ${boardId}`
    );
  }
};
