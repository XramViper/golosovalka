import { upvotePost } from "@/entities/post/api/upvote/action";
import { NextRequest } from "next/server";

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return await upvotePost(params.id);
}
