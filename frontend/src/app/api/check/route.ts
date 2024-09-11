import { NextRequest, NextResponse } from "next/server";
import { getUserSession } from "@/shared/server";

export async function GET(req: NextRequest) {
  const userInfo = await getUserSession(req);

  if (userInfo) {
    return NextResponse.json({ status: 200, userInfo });
  }

  return NextResponse.json({ status: 401 });
}
