import { createBoard } from "@/entities/board/api";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return await createBoard(await req.json());
}
