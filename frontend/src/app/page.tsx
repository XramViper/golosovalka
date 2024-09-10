"use client";

import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      console.log("response", response);
    })();
  }, []);

  return (
    <SessionProvider>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <AuthMessage />
          <button
            onClick={() => signIn("google")}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Google auth
          </button>
          <button
            onClick={() => signIn("vk")}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            VK AUth
          </button>
          <button
            onClick={() => signIn("email")}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Email
          </button>
        </main>
      </div>
    </SessionProvider>
  );
}

const AuthMessage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Session</p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    );
  }
  return (
    <div>
      <p>No session</p>
    </div>
  );
};
