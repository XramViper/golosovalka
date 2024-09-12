import { headers } from "next/headers";

export const getServerPathname = () => {
  const headersList = headers();
  const pathname = headersList.get("referer") || "";
  return pathname;
};
