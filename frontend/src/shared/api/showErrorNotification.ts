"use client";

import { toast } from "react-toastify";

export const showErrorNotification = (error: Error) => {
  const message = error.message;

  if (message.includes("401")) {
    const dialog = document.getElementById("signin_modal") as HTMLDialogElement;
    dialog?.showModal();
    return;
  }

  toast.error(error.message);
};
