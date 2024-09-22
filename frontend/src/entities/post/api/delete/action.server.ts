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

export const actionServer = async (postId: string) => {
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

    // Проверяем, является ли пользователь владельцем доски или автором поста
    const isOwner = board.creator.equals(user._id);
    const isAuthor = post.creator.equals(user._id);

    if (!isOwner && !isAuthor) {
      return await getErrorResponse(
        403,
        "У вас нет прав на удаление этого поста"
      );
    }

    // Удаляем пост
    await Post.deleteOne({ _id: post._id });

    // Удаляем ссылку на пост из доски
    await Board.updateOne({ _id: board._id }, { $pull: { posts: post._id } });

    return getSuccessResponse({ message: "Пост успешно удален" });
  } catch (error) {
    return await getErrorResponse(500, "Ошибка при удалении поста");
  }
};
