"use server";

import { getUserInfo } from "@/entities/user/api";
import connectDB from "@/shared/server/db/connectDb";
import {
  getAuthErrorResponse,
  getErrorResponse,
} from "@/shared/api/getErrorResponse";
import { getSuccessResponse } from "@/shared/api/getSuccessResponse";
import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";
import Post from "../../model/Post";
import User from "@/entities/user/model/User";
import { Types } from "mongoose";

export const actionServer = async (postId: string) => {
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
    const post = await Post.findById(postId);

    if (!post) {
      return await getErrorResponse(404, "Пост не найден");
    }

    const userIdObject = user._id as Types.ObjectId;

    const upvoteIndex = post.upvotes.indexOf(userIdObject);

    if (upvoteIndex === -1) {
      post.upvotes.push(userIdObject);
    } else {
      post.upvotes.splice(upvoteIndex, 1);
    }

    await post.save();

    return getSuccessResponse({
      upvotes: post.upvotes.length,
      isUpvoted: upvoteIndex === -1,
    });
  } catch (error) {
    return await getErrorResponse(500, "Не удалось выполнить голосование");
  }
};
