import { isServer } from "@tanstack/react-query";
import { getUserInfoClient } from "./getUserInfo.client";
import { getUserInfoServer } from "./getUserInfo.server";

export const getUserInfo = () => {
  if (isServer) {
    return getUserInfoServer();
  }

  return getUserInfoClient();
};
