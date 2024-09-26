"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  router.push("/");

  return <div>404</div>;
};

export default NotFound;
