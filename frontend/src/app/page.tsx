"use client";

import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <div>Тут будет лендос</div>
    </SessionProvider>
  );
}
