"use client";

import { getSignOutMutationKey } from "./getSignOutMutationKey";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

export const useSignOutMutation = () => {
  return useMutation({
    mutationKey: getSignOutMutationKey(),
    mutationFn: async () => {
      await delay(1000);
      signOut({ callbackUrl: "/" });
    },
  });
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
