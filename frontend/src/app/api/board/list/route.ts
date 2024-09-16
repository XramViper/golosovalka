import { getBoardsList } from "@/entities/board/api";
import { getUserInfo } from "@/entities/user/api";
import { NextResponse } from "next/server";

export async function GET() {
  const userInfo = await getUserInfo();

  if (userInfo) {
    const response = await getBoardsList();

    if (!response) {
      return NextResponse.json({ status: 400, statusText: "Bad Request" });
    }

    return NextResponse.json({ status: 200, data: response });
  }

  return NextResponse.json({ status: 401 });
}
