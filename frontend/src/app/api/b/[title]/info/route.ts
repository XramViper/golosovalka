import { getBoardInfoByTitle } from "@/entities/board/api";
import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { title: string } }
) {
  const { title } = params;

  return await getBoardInfoByTitle(title);
}
