import { deletePost } from "@/entities/post/api/delete/action";
import { NextRequest } from "next/server";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return await deletePost(params.id);
}
