"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { SignInForm } from "./components/SignInForm";

export default function Signin() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

return (
    <div className="flex flex-col items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signIn("google", { callbackUrl })}>
            Sign in with Google
        </button>
        <SignInForm />
    </div>
);
}
