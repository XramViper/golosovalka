"use server";

export const getSuccessResponse = async (data: unknown) => {
  return new Response(JSON.stringify({ data }), { status: 200 });
};
