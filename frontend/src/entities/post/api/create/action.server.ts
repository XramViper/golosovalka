"use server";

import { Request } from "./types";
import User from "@/entities/user/model/User";
import { getUserInfo } from "@/entities/user/api";
import connectDB from "@/shared/server/db/connectDb";
import {
  getAuthErrorResponse,
  getErrorResponse,
} from "@/shared/api/getErrorResponse";
import { getSuccessResponse } from "@/shared/api/getSuccessResponse";
import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";
import Post from "../../model/Post";
import Board from "@/entities/board/model/Board"; // Import the Board model
import { translit } from "@/shared/utils/translit";
import { Types } from "mongoose";

export const actionServer = async (data: Request) => {
  await connectDB();

  const response = await getUserInfo();

  if (response.status === 401) {
    return await getAuthErrorResponse();
  }

  const { data: userInfo } = await parseServerActionResponse(response);

  if (!userInfo) {
    return await getAuthErrorResponse();
  }

  const { email } = userInfo;

  try {
    const user = await User.findOne({ email });

    const translited_title = translit(data.title);

    const currentBoard = await Board.findById(data.boardId);

    if (!currentBoard) {
      return await getErrorResponse(404, "Доска не найдена");
    }

    const existedPosts = await Post.find({
      translitted_title: translited_title,
    });

    const existingPost = existedPosts.find(post => 
      currentBoard.posts.includes(post._id as Types.ObjectId)
    );

    if (existingPost) {
      return await getErrorResponse(
        400,
        `Пост с названием «${data.title}» уже существует`
      );
    }

    const post = new Post({
      creator: user._id,
      title: data.title,
      translitted_title: translited_title,
      description: data?.description,
      status: "NEW",
      upvotes: [],
      comments: [],
    });

    await post.save();

    currentBoard.posts.push(post._id as Types.ObjectId);

    await currentBoard.save();

    return getSuccessResponse(post);
  } catch (error) {
    return await getErrorResponse(500, "Не удалось создать пост");
  }
};
