"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { showErrorNotification } from "@/shared/api/showErrorNotification";
import { getCreatePostMutationKey } from "./key";
import { getBoardInfoByTitleQueryKey } from "@/entities/board/api";
import { createPost } from "../action";

type Options = {
  onSuccess?: () => void;
};

export const usePostCreateMutation = (boardId?: string, options?: Options) => {
  const { onSuccess } = options ?? {};

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getCreatePostMutationKey(),
    mutationFn: createPost,
    onSuccess: () => {
      if (boardId)
        queryClient.invalidateQueries({
          queryKey: getBoardInfoByTitleQueryKey(boardId),
        });
      onSuccess?.();
    },
    // Показать модалку с атворизацией
    onError: showErrorNotification,
  });
};
