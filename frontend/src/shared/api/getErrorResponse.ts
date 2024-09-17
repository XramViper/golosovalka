"use server";

export const getErrorResponse = async (status: number, message: string) => {
  return new Response(JSON.stringify({ error: message }), { status });
};

export const getAuthErrorResponse = async () => {
  return await getErrorResponse(401, "Ошибка авторизации");
};
