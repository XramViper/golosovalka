"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { getBoardsMutationKey } from "./getBoardsMutationKey";
import { createBoard } from "../realization";
import { getBoardsListQueryKey } from "../../list/query";

type Options = {
  onSuccess?: () => void;
};

export const useBoardCreateMutation = (options?: Options) => {
  const { onSuccess } = options ?? {};

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getBoardsMutationKey(),
    mutationFn: createBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getBoardsListQueryKey() });
      onSuccess?.();
    },
  });
};
