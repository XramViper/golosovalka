import { ResponseHttp } from "@/shared/types/ResponseHttp";
import { isServer } from "@tanstack/react-query";

export const switchClientServerMethod = <TData>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clientMethod: (request?: any) => Promise<ResponseHttp<TData>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serverMethod: (request?: any) => Promise<ResponseHttp<TData>>
) => {
  if (isServer) {
    return serverMethod;
  }
  return clientMethod;
};
