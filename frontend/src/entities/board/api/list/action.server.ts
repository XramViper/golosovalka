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

export const actionServer = async (): Promise<Response> => {
  await connectDB();
  const res = await getServerSession();

  // Not Authorizd
  if (!res?.user) {
    return await getAuthErrorResponse();
  }

  const { email } = res.user;

  try {
    const user = await User.findOne({ email });
    const boards = await Board.find({ creator: user._id });
    const data = boards.map((board) => ({
      id: board._id.toString(),
      title: board.title,
    }));

    return getSuccessResponse(data);
  } catch (error) {
    return await getErrorResponse(400, "Ошибка создания доски");
  }
};
