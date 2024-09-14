"use client";

import { useMutation } from "@tanstack/react-query";

import { getBoardsMutationKey } from "./getBoardsMutationKey";
import { createBoard } from "../realization";

export const useBoardCreateMutation = () => {
  return useMutation({
    mutationKey: getBoardsMutationKey(),
    mutationFn: createBoard,
  });
};
