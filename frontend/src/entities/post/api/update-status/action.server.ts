"use server";

import { getServerSession } from "next-auth";
import Post from "@/entities/post/model/Post";
import Board from "@/entities/board/model/Board";
import connectDB from "@/shared/server/db/connectDb";
import User from "@/entities/user/model/User";
import {
  getAuthErrorResponse,
  getErrorResponse,
} from "@/shared/api/getErrorResponse";
import { getSuccessResponse } from "@/shared/api/getSuccessResponse";
import { IPost } from "../../model/Post";

type UpdateStatusRequest = {
  postId: string;
  status: IPost["status"];
};

export const actionServer = async ({ postId, status }: UpdateStatusRequest) => {
  await connectDB();
  const session = await getServerSession();

  if (!session?.user) {
    return await getAuthErrorResponse();
  }

  const { email } = session.user;

  try {
    const user = await User.findOne({ email });
    const post = await Post.findById(postId);

    if (!post) {
      return await getErrorResponse(404, "Пост не найден");
    }

    const board = await Board.findOne({ posts: post._id });

    if (!board) {
      return await getErrorResponse(404, "Доска не найдена");
    }

    // Проверяем, является ли пользователь владельцем доски
    const isOwner = board.creator.equals(user._id);

    if (!isOwner) {
      return await getErrorResponse(403, "У вас нет прав на изменение этого поста");
    }

    // Обновляем статус поста
    post.status = status;
    await post.save();

    return getSuccessResponse({ message: "Статус поста успешно обновлен", status });
  } catch (error) {
    return await getErrorResponse(500, "Ошибка при обновлении статуса поста");
  }
};