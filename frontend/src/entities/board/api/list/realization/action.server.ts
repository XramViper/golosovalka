import { getServerSession } from "next-auth";
import { Response } from "./response";
import Board from "@/entities/board/model/Board";
import connectDB from "@/shared/server/db/connectDb";
import User from "@/entities/user/model/User";

export const actionServer = async (): Promise<Response> => {
  await connectDB();
  const res = await getServerSession();

  // Not Authorizd
  if (!res?.user) {
    return;
  }

  const { email } = res.user;

  try {
    const user = await User.findOne({ email });
    const boards = await Board.find({ creator: user._id });
    return {
      status: 200,
      data: boards.map((board) => ({
        id: board._id,
        title: board.title,
      })),
    };
  } catch (error) {
    return {
      status: 400,
      statusText: `create board error ${JSON.stringify(error)}`,
    };
  }
};
