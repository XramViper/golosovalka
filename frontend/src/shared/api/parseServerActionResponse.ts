import { ResponseHttp } from "../types/ResponseHttp";

export const parseServerActionResponse = async <TData>(response: ResponseHttp<TData>) => {
  const localResponse = response as Response;
  const body = await localResponse.json();

  if (!localResponse.ok) {
    throw new Error(body.error ?? "Request failed");
  }

  return body as ResponseHttp<TData>;
};
