import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";

export const actionApi = async (postId: string) => {
  const res = await fetch(`/api/post/${postId}/upvote`, {
    method: "POST",
  });

  return parseServerActionResponse(res);
};