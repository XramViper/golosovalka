import { getUserInfo } from "@/entities/user/api";
import { NextResponse } from "next/server";

export async function GET() {
  const userInfo = await getUserInfo();

  if (userInfo) {
    return NextResponse.json({ status: 200, userInfo });
  }

  return NextResponse.json({ status: 401 });
}
