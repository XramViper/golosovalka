import { isServer } from "@tanstack/react-query";

export const switchClientServerMethod = <T>(
  clientMethod: T,
  serverMethod: T
): T => {
  if (isServer) {
    return serverMethod;
  }
  return clientMethod;
};
