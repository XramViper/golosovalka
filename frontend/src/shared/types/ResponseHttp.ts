export type ResponseHttp<TData> = {
  status: number;
  data?: TData;
  statusText?: string;
};
