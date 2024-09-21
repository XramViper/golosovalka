"use client";

import { toast } from "react-toastify";

export const showErrorNotification = (error: Error) => {
  const message = error.message;
  if (message.includes("401")) {
    toast.error("You are not authorized");
    return;
  }

  toast.error(error.message);
};
