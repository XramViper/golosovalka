"use server";

import { Request, Response } from "./types";
import Board from "@/entities/board/model/Board";
import User from "@/entities/user/model/User";
import { getUserInfo } from "@/entities/user/api";
import connectDB from "@/shared/server/db/connectDb";

export const actionServer = async (data: Request): Promise<Response> => {
  await connectDB();

  const userInfo = await getUserInfo();

  if (!userInfo) {
    return;
  }

  const { email } = userInfo;

  try {
    const user = await User.findOne({ email });

    const board = new Board({
      creator: user._id,
      title: data.title,
      posts: [],
    });

    board.save();

    return {
      status: 200,
      data: board,
    };
  } catch (error) {
    return {
      status: 400,
      statusText: `create board error ${JSON.stringify(error)}`,
    };
  }
};
