"use client";

import { getQueryClient } from "@/shared/server/helpers/getQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  const contextClass = {
    success: "bg-base-300",
    error: "bg-base-300",
    info: "bg-base-300",
    warning: "bg-base-300",
    default: "bg-base-300",
  };

  useEffect(() => {
    const updateScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll",
        window.pageYOffset + "px",
      );
    };
    window.addEventListener("scroll", updateScroll);
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ToastContainer
          theme="light"
          closeButton={false}
          hideProgressBar
          closeOnClick
          style={{ display: "flex", flexDirection: "column-reverse", gap: 8 }}
          toastClassName={(context) =>
            contextClass[context?.type || "default"] +
            " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer "
          }
          bodyClassName={() => "text-sm font-white font-med flex p-3"}
          position="bottom-right"
          autoClose={3000}
        />
        <div className="bg-base-300"></div>
      </QueryClientProvider>
    </SessionProvider>
  );
}
