"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showErrorNotification } from "@/shared/api/showErrorNotification";
import { getUpvotePostMutationKey } from "./key";
import { getBoardInfoByTitleQueryKey } from "@/entities/board/api";
import { upvotePost } from "../action";

export const usePostUpvoteMutation = (boardName: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getUpvotePostMutationKey(),
    mutationFn: upvotePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getBoardInfoByTitleQueryKey(boardName),
      });
    },
    onError: showErrorNotification,
  });
};