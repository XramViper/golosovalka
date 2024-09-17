import { getBoardInfoById } from "@/entities/board/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  return await getBoardInfoById(id);
}
