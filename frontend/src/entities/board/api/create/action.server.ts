"use server";

import { Request } from "./types";
import Board from "@/entities/board/model/Board";
import User from "@/entities/user/model/User";
import { getUserInfo } from "@/entities/user/api";
import connectDB from "@/shared/server/db/connectDb";
import {
  getAuthErrorResponse,
  getErrorResponse,
} from "@/shared/api/getErrorResponse";
import { getSuccessResponse } from "@/shared/api/getSuccessResponse";
import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";

export const actionServer = async (data: Request) => {
  await connectDB();

  const response = await getUserInfo();
  const { data: userInfo } = await parseServerActionResponse(response);

  if (!userInfo) {
    return await getAuthErrorResponse();
  }

  const { email } = userInfo;

  try {
    const user = await User.findOne({ email });

    const translited_title = translit(data.title);

    const existedBoard = await Board.findOne({ translited_title });

    if (existedBoard) {
      return await getErrorResponse(
        400,
        `Доска с названием «${data.title}» уже существует`
      );
    }

    const board = new Board({
      creator: user._id,
      title: data.title,
      translited_title,
      posts: [],
    });

    board.save();

    return getSuccessResponse(board);
  } catch (error) {
    return await getErrorResponse(500, "Не удалось создать доску");
  }
};

function translit(str: string): string {
  const translitMap: { [key: string]: string } = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  return str
    .toLowerCase()
    .split("")
    .map((char) => translitMap[char] || char)
    .join("")
    .replace(/[^a-z0-9\s-]/g, "") // Remove unwanted characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}
