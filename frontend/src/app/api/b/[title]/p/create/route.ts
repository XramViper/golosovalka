import { createPost } from "@/entities/post/api/create";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return await createPost(await req.json());
}
