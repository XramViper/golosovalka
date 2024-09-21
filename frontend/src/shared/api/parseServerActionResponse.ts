import { ResponseHttp } from "../types/ResponseHttp";

export const parseServerActionResponse = async <TData>(
  response: ResponseHttp<TData>
) => {
  const localResponse = response as Response;
  const body = await localResponse.json();

  if (!localResponse.ok) {
    throw new Error(
      `Request failed with status ${localResponse.status}: ${
        body.error ?? "Unknown error"
      }`
    );
  }

  return body as ResponseHttp<TData>;
};
