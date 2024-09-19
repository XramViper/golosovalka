import { deleteBoardById } from "@/entities/board/api/delete/action";
import { NextRequest } from "next/server";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  return await deleteBoardById(id);
}
