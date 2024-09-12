import { NextResponse } from "next/server";
import { getUserInfo } from "./_realization";

export async function GET() {
  const userInfo = await getUserInfo();

  if (userInfo) {
    return NextResponse.json({ status: 200, userInfo });
  }

  return NextResponse.json({ status: 401 });
}
