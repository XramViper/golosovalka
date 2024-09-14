import { createBoard } from "@/entities/board/api";
import { getUserInfo } from "@/entities/user/api";
import connectDB from "@/shared/server/db/connectDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();

  const userInfo = await getUserInfo();

  if (userInfo) {
    const requestData = await req.json();

    const response = await createBoard({
      title: requestData.title,
    });

    if (!response || response.status !== 200) {
      return NextResponse.json({
        status: response?.status || 400,
        statusText: response?.statusText || "Error",
      });
    }

    return NextResponse.json({ status: 200, data: response.data });
  }

  return NextResponse.json({ status: 401 });
}
