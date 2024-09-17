"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "../action";

import { showErrorNotification } from "@/shared/api/showErrorNotification";
import { getCreateBoardMutationKey } from "./key";
import { getBoardsListQueryKey } from "../../list";

type Options = {
  onSuccess?: () => void;
};

export const useBoardCreateMutation = (options?: Options) => {
  const { onSuccess } = options ?? {};

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getCreateBoardMutationKey(),
    mutationFn: createBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getBoardsListQueryKey() });
      onSuccess?.();
    },
    onError: showErrorNotification,
  });
};
