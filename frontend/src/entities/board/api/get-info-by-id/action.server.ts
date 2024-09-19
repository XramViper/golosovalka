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
import { Response } from "./types";

// key - boardId или board Translited Title
export const actionServer = async (
  boardUniqueKey: string
): Promise<Response> => {
  await connectDB();
  const res = await getServerSession();

  // Not Authorizd
  if (!res?.user) {
    return await getAuthErrorResponse();
  }

  const { email } = res.user;

  try {
    console.log("boardUniqueKey", boardUniqueKey);

    const user = await User.findOne({ email });

    let currentBoard = null;

    try {
      currentBoard = await Board.findOne({
        _id: boardUniqueKey,
        creator: user._id,
      }).catch();
    } catch (error) {}

    try {
      currentBoard = await Board.findOne({
        translited_title: boardUniqueKey,
        creator: user._id,
      }).catch();
    } catch (error) {}

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
      `Ошибка получения информации о доске ${boardUniqueKey}`
    );
  }
};
