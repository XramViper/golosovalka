"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  router.push("/");

  return null;
};

export default NotFound;
