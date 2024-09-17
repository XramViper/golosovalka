"use server";

export const prefetchResponseParse = async (response: Response) => {
  const body = await response.json();
  return body;
};
