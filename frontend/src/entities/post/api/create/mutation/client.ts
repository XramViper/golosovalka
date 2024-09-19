"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { showErrorNotification } from "@/shared/api/showErrorNotification";
import { getCreatePostMutationKey } from "./key";
import { getBoardInfoByTitleQueryKey } from "@/entities/board/api";
import { createPost } from "../action";

type Options = {
  onSuccess?: () => void;
};

export const usePostCreateMutation = (boardName: string, options?: Options) => {
  const { onSuccess } = options ?? {};

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getCreatePostMutationKey(),
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getBoardInfoByTitleQueryKey(boardName),
      });
      onSuccess?.();
    },
    // Показать модалку с атворизацией
    onError: showErrorNotification,
  });
};
