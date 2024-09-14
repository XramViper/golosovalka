import { getBoardsList } from "@/entities/board/api";
import { getUserInfo } from "@/entities/user/api";
import { NextResponse } from "next/server";

export async function GET() {
  const userInfo = await getUserInfo();

  if (userInfo) {
    const boards = getBoardsList();
    return NextResponse.json({ status: 200, data: boards });
  }

  return NextResponse.json({ status: 401 });
}
