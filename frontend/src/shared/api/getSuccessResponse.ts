"use server";

export const getSuccessResponse = async <TData>(data: TData) => {
  return new Response(JSON.stringify({ data }), { status: 200 });
};
