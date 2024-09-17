"use client"

import { toast } from "react-toastify";

export const showErrorNotification = (error: Error) => {
  toast.error(error.message);
};
