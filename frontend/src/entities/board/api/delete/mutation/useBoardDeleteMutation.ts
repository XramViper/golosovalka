"use client";

import { useMutation } from "@tanstack/react-query";
import { deleteBoardById } from "../action";

import { showErrorNotification } from "@/shared/api/showErrorNotification";
import { getDeleteBoardMutationKey } from "./key";

type Options = {
  onSuccess?: () => void;
};

export const useBoardDeleteMutation = (options?: Options) => {
  const { onSuccess } = options ?? {};

  return useMutation({
    mutationKey: getDeleteBoardMutationKey(),
    mutationFn: deleteBoardById,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: showErrorNotification,
  });
};
