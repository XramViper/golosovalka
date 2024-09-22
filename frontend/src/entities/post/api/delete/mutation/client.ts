"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../action";
import { showErrorNotification } from "@/shared/api/showErrorNotification";
import { getBoardInfoByIdQueryKey } from "@/entities/board/api";

type Options = {
  onSuccess?: () => void;
  boardId: string;
};

export const usePostDeleteMutation = (options: Options) => {
  const { onSuccess, boardId } = options;
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getBoardInfoByIdQueryKey(boardId),
      });
      onSuccess?.();
    },
    onError: showErrorNotification,
  });
};
