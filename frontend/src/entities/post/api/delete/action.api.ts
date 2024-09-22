import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";

export const actionApi = async (postId: string) => {
  const response = await fetch(`/api/post/${postId}/delete`, {
    method: "DELETE",
  });
  return parseServerActionResponse(response);
};
