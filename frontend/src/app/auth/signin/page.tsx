"use client";

import { Logo } from "@/shared";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("email", { email });
  };

  return (
    <div
      data-theme="dark"
      className="bg-base-300 flex items-center justify-center h-screen w-screen"
    >
      <div className="card bg-base-100 w-96 shadow-2xl shadow-slate-900">
        <div className="card-body">
          <div className="flex flex-col items-center gap-8">
            <Logo />
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => signIn("google")}
                  className="btn btn-lg text-white border-hidden hover:bg-red-600"
                >
                  Google
                </button>
                <button
                  onClick={() => signIn("vk")}
                  className="btn btn-lg text-white hover:bg-blue-600"
                >
                  VK
                </button>
                <button
                  onClick={() => signIn("yandex")}
                  className="btn btn-lg text-white hover:bg-yellow-600"
                >
                  Yandex
                </button>
              </div>
              <div className="divider text-center">или</div>
              <form
                className="form-control flex flex-col gap-4"
                onSubmit={handleEmailSignIn}
              >
                <input
                  autoComplete="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered input-lg"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="submit" className="btn text-white btn-lg">
                  Войти по Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
