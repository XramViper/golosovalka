import { parseServerActionResponse } from "@/shared/api/parseServerActionResponse";
import { IPost } from "../../model/Post";

type UpdateStatusRequest = {
  postId: string;
  status: IPost["status"];
};

export const actionApi = async ({ postId, status }: UpdateStatusRequest) => {
  const response = await fetch(`/api/post/${postId}/update-status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  return parseServerActionResponse(response);
};