"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePostStatus } from "../action";
import { showErrorNotification } from "@/shared/api/showErrorNotification";
import { getBoardInfoByIdQueryKey } from "@/entities/board/api";
import { IPost } from "@/entities/post/model/Post";

type UpdateStatusRequest = {
  postId: string;
  status: IPost["status"];
  boardId: string;
};

type Options = {
  onSuccess?: () => void;
};

export const usePostUpdateStatusMutation = (options?: Options) => {
  const { onSuccess } = options ?? {};
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, status }: UpdateStatusRequest) => updatePostStatus({ postId, status }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: getBoardInfoByIdQueryKey(variables.boardId) });
      onSuccess?.();
    },
    onError: showErrorNotification,
  });
};