import { updatePostStatus } from "@/entities/post/api/update-status/action";
import { NextRequest } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { status } = await req.json();
  return await updatePostStatus({ postId: params.id, status });
}
